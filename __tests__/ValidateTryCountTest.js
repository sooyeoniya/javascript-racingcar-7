import validateTryCount from '../src/validations/validateTryCount.js';
import { ERROR_PREFIX, ERROR_MESSAGES } from '../src/constants/constants.js';

describe('validateTryCount 함수 테스트', () => {
  it.each([
    // given
    ['validateIsNumber: 시도 횟수가 숫자가 아닌 경우', NaN, ERROR_MESSAGES.IS_NUMBER],
    ['validateIsInteger: 시도 횟수가 정수가 아닌 경우', 1.2, ERROR_MESSAGES.IS_INTEGER],
    ['validateNumberRange: 시도 횟수 범위가 유효하지 않은 경우', -1, ERROR_MESSAGES.NUMBER_RANGE],
  ])('%s', (_, input, errorMessage) => {
    // when & then
    expect(() => {
      validateTryCount(input);
    }).toThrow(`${ERROR_PREFIX} ${errorMessage}`);
  });
});
