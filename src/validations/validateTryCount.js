import { ERROR_MESSAGES, MAX_TRY_COUNT } from '../constants/constants.js';
import OutputView from '../views/OutputView.js';

/**
 * 시도 횟수가 숫자인지 확인
 * @param {number} tryCount
 */
const validateIsNumber = (tryCount) => {
  if (isNaN(tryCount)) {
    OutputView.printErrorMessage(ERROR_MESSAGES.IS_NUMBER);
  }
}

/**
 * 시도 횟수가 정수인지 확인
 * @param {number} tryCount
 */
const validateIsInteger = (tryCount) => {
  if (!Number.isInteger(tryCount)) {
    OutputView.printErrorMessage(ERROR_MESSAGES.IS_INTEGER);
  }
}

/**
 * 시도 횟수 범위가 유효한지 확인
 * @param {number} tryCount
 */
const validateNumberRange = (tryCount) => {
  if (tryCount <= 0 || tryCount > MAX_TRY_COUNT) {
    OutputView.printErrorMessage(ERROR_MESSAGES.NUMBER_RANGE);
  }
}

/**
 * 시도 횟수 유효성 검증
 * @param {number} tryCount
 */
const validateTryCount = (tryCount) => {
  validateIsNumber(tryCount);
  validateIsInteger(tryCount);
  validateNumberRange(tryCount);
}

export default validateTryCount;
