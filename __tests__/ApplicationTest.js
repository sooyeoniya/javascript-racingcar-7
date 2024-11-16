import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_PREFIX, ERROR_MESSAGES } from '../src/constants/constants.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 경주', () => {
  // test('기능 테스트', async () => {
  //   // given
  //   const MOVING_FORWARD = 4;
  //   const STOP = 3;
  //   const inputs = ['pobi,woni', '1'];
  //   const logs = ['pobi : -', 'woni : ', '최종 우승자 : pobi'];
  //   const logSpy = getLogSpy();

  //   mockQuestions(inputs);
  //   mockRandoms([MOVING_FORWARD, STOP]);

  //   // when
  //   const app = new App();
  //   await app.run();

  //   // then
  //   logs.forEach((log) => {
  //     expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  //   });
  // });

  it.each([
    // 자동차 이름 유효성 검증
    ['자동차 이름이 빈 문자열인 경우', [''], ERROR_MESSAGES.IS_EMPTY],
    ['자동차 이름이 중복되는 경우', ['pobi,woni,pobi'], ERROR_MESSAGES.DUPLICATE_NAME],
    ['자동차 이름 형식이 올바르지 않은 경우', ['po bi,won i'], ERROR_MESSAGES.NAME_FORM],
    ['자동차 이름이 5자를 초과하는 경우', ['pobi,javaji'], ERROR_MESSAGES.NAME_LENGTH],

    // 시도 횟수 유효성 검증
    ['시도 횟수가 숫자가 아닌 경우', ['pobi,woni', 'string'], ERROR_MESSAGES.IS_NUMBER],
    ['시도 횟수가 정수가 아닌 경우', ['pobi,woni', '1.2'], ERROR_MESSAGES.IS_INTEGER],
    ['시도 횟수 범위가 유효하지 않은 경우', ['pobi,woni', '-1'], ERROR_MESSAGES.NUMBER_RANGE],
  ])('예외 테스트: %s', async (_, input, errorMessage) => {
    // given
    mockQuestions(input);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(`${ERROR_PREFIX} ${errorMessage}`);
  });
});
