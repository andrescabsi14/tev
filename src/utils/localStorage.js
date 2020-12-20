export const APP_DATA = "appData";
export const SESSION_DATA = "session";
export const USER_PREFERENCES = "userPreferences";

const _getTargetContext = (context) => {
  switch (context) {
    case SESSION_DATA:
      return SESSION_DATA;
    case USER_PREFERENCES:
      return USER_PREFERENCES;
    case APP_DATA:
      return APP_DATA;
    default:
      return null;
  }
};

export const updateLocalStorage = (key, value, target) => {
  const targetData = _getTargetContext(target);
  if (!targetData) return null;
  const rawSessionObj = localStorage.getItem(targetData);
  const sessionObj = JSON.parse(rawSessionObj);
  const updatedObj = {
    ...sessionObj,
    [key]: value,
  };
  localStorage.setItem(targetData, JSON.stringify(updatedObj));
};

export const getLocalStorage = (target, key) => {
  const targetData = _getTargetContext(target);
  if (!targetData) return null;

  const rawSessionObj = localStorage.getItem(targetData);
  const sessionObj = JSON.parse(rawSessionObj);
  const targetKey = sessionObj && sessionObj[key];

  return targetKey;
};

export const removeLocalStorage = (target, key) => {
  const targetData = _getTargetContext(target);
  if (!targetData) return null;
  const rawSessionObj = localStorage.getItem(targetData);
  const sessionObj = JSON.parse(rawSessionObj);
  delete sessionObj[key];
  localStorage.setItem(targetData, JSON.stringify(sessionObj));
};
