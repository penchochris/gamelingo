export const setOne = (key, state, action) => ({
  ...state,
  [key]: action[key]
});

export const setSome = (obj, state) => ({
  ...state,
  ...obj,
});