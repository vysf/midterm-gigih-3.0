/* eslint-disable no-console */
class SimpleLogger {
  constructor(moduleName) {
    this.moduleName = moduleName;
    this.logLevel = {
      INFO: 'INFO',
      ERROR: 'ERROR',
    };
  }

  log(level, message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${this.moduleName}] [${level}] - ${message}`);
  }

  info(message) {
    this.log(this.logLevel.INFO, message);
  }

  error(message) {
    this.log(this.logLevel.ERROR, message);
  }
}

module.exports = SimpleLogger;
