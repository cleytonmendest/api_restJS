"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _homeRouters = require('./routes/homeRouters'); var _homeRouters2 = _interopRequireDefault(_homeRouters);
var _userRouters = require('./routes/userRouters'); var _userRouters2 = _interopRequireDefault(_userRouters);
var _tokenRouters = require('./routes/tokenRouters'); var _tokenRouters2 = _interopRequireDefault(_tokenRouters);
var _alunoRouters = require('./routes/alunoRouters'); var _alunoRouters2 = _interopRequireDefault(_alunoRouters);
var _fotoRouters = require('./routes/fotoRouters'); var _fotoRouters2 = _interopRequireDefault(_fotoRouters);
require('./database');

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', _homeRouters2.default);
    this.app.use('/users/', _userRouters2.default);
    this.app.use('/tokens/', _tokenRouters2.default);
    this.app.use('/alunos/', _alunoRouters2.default);
    this.app.use('/fotos/', _fotoRouters2.default);
  }
}

exports. default = new App().app;
