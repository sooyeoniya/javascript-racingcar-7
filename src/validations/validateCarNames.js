/**
 * 자동차 이름 중복 검사
 * @param {Array<string>} carNames 
 */
const validateDuplicateName = (carNames) => {
  const carNamesSet = new Set(carNames);
  if (carNames.length !== carNamesSet.size) {
    throw new Error('[ERROR] 자동차 이름이 중복됩니다. 다시 입력해주세요.');
  }
}

/**
 * 자동차 이름 5자 초과하는지 확인
 * @param {Array<string>} carNames 
 */
const validateNameLength = (carNames) => {
  const isLongerThanFive = (carName) => carName.length > 5;
  if (carNames.some(isLongerThanFive)) {
    throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해주세요.');
  }
}

/**
 * 자동차 이름 중간에 공백 있는지 확인
 * @param {Array<string>} carNames 
 */
const validateHasBlankSpace = (carNames) => {
  const regex = /\s/g;
  carNames.forEach((carName) => {
    if (regex.test(carName)) {
      throw new Error('[ERROR] 자동차 이름 형식이 올바르지 않습니다. 다시 입력해주세요.');
    }
  });
}

/**
 * 자동차 이름 유효성 검증
 * @param {Array<string>} carNames 
 */
const validateCarNames = (carNames) => {
  validateDuplicateName(carNames);
  validateNameLength(carNames);
  validateHasBlankSpace(carNames);
}

export default validateCarNames;
