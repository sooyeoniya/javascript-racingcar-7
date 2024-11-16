import parser from '../src/utils/parser.js';

describe('parser 함수 테스트', () => {
  describe('parseCarNames 함수 테스트', () => {
    it.each([
      // given
      ['기본 입력', 'pobi,woni,jun', [ 'pobi', 'woni', 'jun' ]],
      ['공백 입력', ' pobi , woni , jun ', [ 'pobi', 'woni', 'jun' ]],
    ])('%s', (_, carNames, expected) => {
      // when
      const parsedCarNames = parser.parseCarNames(carNames);

      // then
      expect(parsedCarNames).toEqual(expected);
    });
  });

  describe('parseTryCount 함수 테스트', () => {
    it.each([
      // given
      ['기본 입력', '6', 6],
      ['공백 입력', '  1  ', 1],
      ['정수 아닌 유리수 입력', '1.2', 1.2],
      ['숫자 아닌 입력 (1)', 'string', NaN],
      ['숫자 아닌 입력 (2)', '1 2', NaN],
    ])('%s', (_, tryCount, expected) => {
      // when
      const parsedTryCount = parser.parseTryCount(tryCount);

      // then
      expect(parsedTryCount).toEqual(expected);
    });
  });
});
