export function getVotePercent(a, b) {
  let percentage = (a / (a + b)) * 100;
    return `${Math.round(percentage)}%`;
};

export function getCurrentPath() {
  return parseInt(window.location.pathname.split("/").slice(-1)[0])
}

export function arrayFindObjectByProp (arr, prop, val) {
  return arr.find((obj) => obj[prop] == val);
}

export function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}