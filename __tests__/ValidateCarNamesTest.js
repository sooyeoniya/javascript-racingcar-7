import validateCarNames from '../src/validations/validateCarNames.js';
import { ERROR_PREFIX, ERROR_MESSAGES } from '../src/constants/constants.js';

describe('validateCarNames 함수 테스트', () => {
  it.each([
    // given
    ['validateIsEmpty: 자동차 이름이 비어있는지 확인', [ '' ], ERROR_MESSAGES.IS_EMPTY],
    ['validateDuplicateName: 자동차 이름이 중복되는지 확인', [ 'pobi', 'woni', 'pobi' ], ERROR_MESSAGES.DUPLICATE_NAME],
    ['validateHasBlankSpace: 자동차 이름 형식이 올바르지 않은 경우', [ 'po bi', 'won i' ], ERROR_MESSAGES.NAME_FORM],
    ['validateNameLength: 자동차 이름이 5자를 초과하는 경우', [ 'pobi', 'javaji' ], ERROR_MESSAGES.NAME_LENGTH],
  ])('%s', (_, input, errorMessage) => {
    // when & then
    expect(() => {
      validateCarNames(input);
    }).toThrow(`${ERROR_PREFIX} ${errorMessage}`);
  });
});
