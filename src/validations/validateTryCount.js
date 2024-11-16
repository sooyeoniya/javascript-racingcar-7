import { MAX_TRY_COUNT } from '../constants/constants.js';

/**
 * 시도 횟수가 숫자인지 확인
 * @param {number} tryCount
 */
const validateIsNumber = (tryCount) => {
  if (isNaN(tryCount)) {
    throw new Error('[ERROR] 시도 횟수가 숫자가 아닙니다. 다시 입력해주세요.');
  }
}

/**
 * 시도 횟수가 정수인지 확인
 * @param {number} tryCount
 */
const validateIsInteger = (tryCount) => {
  if (!Number.isInteger(tryCount)) {
    throw new Error('[ERROR] 시도 횟수가 정수가 아닙니다. 다시 입력해주세요.');
  }
}

/**
 * 시도 횟수 범위가 유효한지 확인
 * @param {number} tryCount
 */
const validateNumberRange = (tryCount) => {
  if (tryCount <= 0 || tryCount > MAX_TRY_COUNT) {
    throw new Error('[ERROR] 시도 횟수 범위가 유효하지 않습니다. 다시 입력해주세요.');
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
