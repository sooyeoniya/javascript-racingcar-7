import { Console } from '@woowacourse/mission-utils';
import { ERROR_PREFIX } from '../constants/constants.js';

const OutputView = {
  printEachResult() {

  },

  printFinalWinner() {

  },

  printErrorMessage(errorMessage) {
    throw new Error(`${ERROR_PREFIX} ${errorMessage}`);
  }
}

export default OutputView;
