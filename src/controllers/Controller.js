import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  async start() {
    const carNames = await InputView.readCarNameAsync();
    const tryCount = await InputView.readTryCountAsync();
    
  }
}

export default Controller;
