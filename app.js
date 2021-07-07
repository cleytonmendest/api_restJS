import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import homeRouters from './src/routes/homeRouters';
import userRouters from './src/routes/userRouters';
import tokenRouters from './src/routes/tokenRouters';
import alunoRouters from './src/routes/alunoRouters';
import './src/database';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRouters);
    this.app.use('/users/', userRouters);
    this.app.use('/tokens/', tokenRouters);
    this.app.use('/alunos/', alunoRouters);
  }
}

export default new App().app;
