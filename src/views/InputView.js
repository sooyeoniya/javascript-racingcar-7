import { Console } from '@woowacourse/mission-utils';
import { INPUT_PROMPT_MESSAGES } from '../constants/constants.js';

const readPipe = (promptMessage) => {
  try {
    return Console.readLineAsync(promptMessage);
  } catch (error) {
    throw new Error(error.message);
  }
}

const InputView = {
  async readCarNameAsync() {
    return await readPipe(INPUT_PROMPT_MESSAGES.CAR_NAME);
  },

  async readTryCountAsync() {
    return await readPipe(INPUT_PROMPT_MESSAGES.TRY_COUNT);
  }
}

export default InputView;
