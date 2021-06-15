import logger from './looger.js';
import crashReporter from './crashReporter.js';

const middleware = [
  logger,
  crashReporter,
];

export default middleware;
