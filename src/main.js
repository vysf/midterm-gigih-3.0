const injection = require('./interfaces/services/injection');
const config = require('../config/config');
const App = require('./applications/app');

const PORT = config.server.port;
const HOST = config.server.host;
const app = new App(injection);
app.start(PORT, HOST);
