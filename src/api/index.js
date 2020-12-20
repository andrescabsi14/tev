import axios from "axios";

const api = axios.create({});
const API_URL = process.env.REACT_APP_API_URL;
const DEFAULTS = {
  method: "post",
};
const REQUEST_TIMEOUT = 60 * 1000; // one minute timeout request
const MAX_REQUESTS_COUNT = 5;
const INTERVAL_MS = 10;
let PENDING_REQUESTS = 0;
export const CANCELLED_REQUEST_RESPONSE = "Request Cancelled";
export const TIMEOUT_EXCEEDED_RESPONSE = "Timeout exceeded";

// Cancel token
////////////////////////////////////
export const CancelTokenFactory = {
  get tokenRef() {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    return source;
  },
};

// Axios Request Interceptor
////////////////////////////////////
api.interceptors.request.use((config) => {
  return new Promise((resolve) => {
    let interval = setInterval(() => {
      if (PENDING_REQUESTS < MAX_REQUESTS_COUNT) {
        PENDING_REQUESTS++;
        clearInterval(interval);
        resolve(config);
      }
    }, INTERVAL_MS);
  });
});

// Axios Response Interceptor
////////////////////////////////////
api.interceptors.response.use(
  (response) => {
    PENDING_REQUESTS = Math.max(0, PENDING_REQUESTS - 1);
    return Promise.resolve(response);
  },
  (error) => {
    PENDING_REQUESTS = Math.max(0, PENDING_REQUESTS - 1);
    return Promise.reject(error);
  }
);

// Request error handler
////////////////////////////////////
const errorHandler = async (error) => {
  if (error?.response?.status === 401) {
    console.error("Session expired. Please login.");
  }
  if (axios.isCancel(error)) {
    console.error(CANCELLED_REQUEST_RESPONSE);
  }

  console.error(error);
};

// Request handler
////////////////////////////////////
const apiRequest = ({ url = "", ...options }) => {
  // Get access token from authorization client
  // const accessToken =

  return api({
    ...DEFAULTS,
    ...{
      ...options,
      timeout: REQUEST_TIMEOUT,
    },
    ...{
      url: `${API_URL}${url}`,
    },
    headers: {
      // authorization: `bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    //   withCredentials: false
  })
    .then((res) => res.data)
    .catch(errorHandler);
};

export default apiRequest;
