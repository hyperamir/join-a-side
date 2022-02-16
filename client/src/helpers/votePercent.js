export function getVotePercent(a, b) {
  let percentage = (a / (a + b)) * 100;
    return `${Math.round(percentage)}%`;
};