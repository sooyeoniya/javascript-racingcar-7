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
    const tryCount = await InputView.readTryCountAsync();

    const parsedCarNames = parser.parseCarNames(carNames);
    const parsedTryCount = parser.parseTryCount(tryCount);

    validateCarNames(parsedCarNames);
    validateTryCount(parsedTryCount);

    return { parsedCarNames, parsedTryCount };
  }
}

export default Controller;
