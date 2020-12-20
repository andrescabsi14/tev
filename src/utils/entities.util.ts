export const arrToEntitiesObj = (array: any[]) => {
  try {
    return array.reduce((obj, item) => {
      obj[item.id] = item;
      return obj;
    }, {});
  } catch (err) {
    console.error(err);
    return {};
  }
};
