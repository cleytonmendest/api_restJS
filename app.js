import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import express from 'express';
import homeRouters from './src/routes/homeRouters';
import userRouters from './src/routes/userRouters';
import tokenRouters from './src/routes/tokenRouters';
import alunoRouters from './src/routes/alunoRouters';
import fotoRouters from './src/routes/fotoRouters';
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
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRouters);
    this.app.use('/users/', userRouters);
    this.app.use('/tokens/', tokenRouters);
    this.app.use('/alunos/', alunoRouters);
    this.app.use('/fotos/', fotoRouters);
  }
}

export default new App().app;
