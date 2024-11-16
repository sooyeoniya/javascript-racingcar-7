import parser from '../utils/parser.js';
import validateCarNames from '../validations/validateCarNames.js';
import validateTryCount from '../validations/validateTryCount.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  async start() {
    const { carNames, tryCount } = await this.#parseAndValidateInput();

  }

  async #parseAndValidateInput() {
    const carNames = await InputView.readCarNameAsync();
    const parsedCarNames = parser.parseCarNames(carNames);
    validateCarNames(parsedCarNames);

    const tryCount = await InputView.readTryCountAsync();
    const parsedTryCount = parser.parseTryCount(tryCount);
    validateTryCount(parsedTryCount);

    return { parsedCarNames, parsedTryCount };
  }
}

export default Controller;
