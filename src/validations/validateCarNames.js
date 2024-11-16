import OutputView from '../views/OutputView.js';
import { ERROR_MESSAGES } from '../constants/constants.js';

/**
 * 입력 값이 비어있는지 검사
 * @param {Array<string>} carNames 
 */
const validateIsEmpty = (carNames) => {
  const isEmpty = (carName) => carName === '';
  if (carNames.some(isEmpty)) {
    OutputView.printErrorMessage(ERROR_MESSAGES.IS_EMPTY);
  }
}

/**
 * 자동차 이름 중복 검사
 * @param {Array<string>} carNames 
 */
const validateDuplicateName = (carNames) => {
  const carNamesSet = new Set(carNames);
  if (carNames.length !== carNamesSet.size) {
    OutputView.printErrorMessage(ERROR_MESSAGES.DUPLICATE_NAME);
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
      OutputView.printErrorMessage(ERROR_MESSAGES.NAME_FORM);
    }
  });
}

/**
 * 자동차 이름 5자 초과하는지 확인
 * @param {Array<string>} carNames 
 */
const validateNameLength = (carNames) => {
  const isLongerThanFive = (carName) => carName.length > 5;
  if (carNames.some(isLongerThanFive)) {
    OutputView.printErrorMessage(ERROR_MESSAGES.NAME_LENGTH);
  }
}

/**
 * 자동차 이름 유효성 검증
 * @param {Array<string>} carNames 
 */
const validateCarNames = (carNames) => {
  validateIsEmpty(carNames);
  validateDuplicateName(carNames);
  validateHasBlankSpace(carNames);
  validateNameLength(carNames);
}

export default validateCarNames;
