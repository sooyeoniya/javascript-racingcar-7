import { Console } from '@woowacourse/mission-utils';
import { ERROR_PREFIX, RACE_PREFIX, WINNER_PREFIX, SCORE_VIEW } from '../constants/constants.js';

const OutputView = {
  printRaceStart() {
    Console.print(RACE_PREFIX);
  },

  /**
   * 각 경주에 대한 자동차들의 누적 점수를 출력한다.
   * @param {Map<string, number>} carsInfo
   */
  printRaceResult(carsInfo) {
    carsInfo.forEach((score, carName) => {
      Console.print(`${carName} : ${SCORE_VIEW.repeat(score)}`);
    });
    Console.print('');
  },

  /**
   * 최종 우승자를 출력한다.
   * @param {Array} winners
   */
  printFinalWinner(winners) {
    Console.print(`${WINNER_PREFIX} ${winners.join(', ')}`);
  },

  /**
   * 에러 메시지와 함께 에러를 던진다.
   * @param {string} errorMessage 
   */
  printErrorMessage(errorMessage) {
    throw new Error(`${ERROR_PREFIX} ${errorMessage}`);
  }
}

export default OutputView;
