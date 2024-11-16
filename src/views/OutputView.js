import { Console } from '@woowacourse/mission-utils';
import { ERROR_PRIFIX } from '../constants/constants.js';

const OutputView = {
  printEachResult() {

  },

  printFinalWinner() {

  },

  printErrorMessage(errorMessage) {
    throw new Error(`${ERROR_PRIFIX} ${errorMessage}`);
  }
}

export default OutputView;
