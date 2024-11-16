/**
 * 자동차 이름 문자열 공백 제거 및 배열로 변환
 * @param {string} carNames 
 * @returns {Array<string>}
 */
const parseCarNames = (carNames) => {
  return carNames.split(',').map((carName) => carName.trim());
}

/**
 * 시도 횟수 공백 제거 및 문자열 -> 숫자로 변환
 * @param {string} tryCount
 * @returns {number}
 */
const parseTryCount = (tryCount) => {
  return Number(tryCount.trim());
}

const parser = {
  parseCarNames,
  parseTryCount,
}

export default parser;
