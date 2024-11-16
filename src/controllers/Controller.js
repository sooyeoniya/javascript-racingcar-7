import parser from '../utils/parser.js';
import validateCarNames from '../validations/validateCarNames.js';
import validateTryCount from '../validations/validateTryCount.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Cars from '../domains/Cars.js';
import RaceService from '../services/RaceService.js';

class Controller {
  async start() {
    const { parsedCarNames, parsedTryCount } = await this.#parseAndValidateInput();
    const cars = new Cars(parsedCarNames);
    const raceService = new RaceService(cars);

    OutputView.printRaceStart();
    for (let count = 0; count < parsedTryCount; count++) {
      raceService.race();
      OutputView.printRaceResult(cars.getCarsInfo());
    }
    OutputView.printFinalWinner(raceService.getWinner());
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
