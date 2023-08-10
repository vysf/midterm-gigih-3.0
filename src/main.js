const config = require('../config/config');
const App = require('./applications/app');

const PORT = config.server.port;
const HOST = config.server.host;

const app = new App();
app.start(PORT, HOST);
