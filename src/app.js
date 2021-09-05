import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import homeRouters from './routes/homeRouters';
import userRouters from './routes/userRouters';
import tokenRouters from './routes/tokenRouters';
import alunoRouters from './routes/alunoRouters';
import fotoRouters from './routes/fotoRouters';
import './database';

const whitelist = [
  'https://localhost:3001',
  '192.168.0.105:3001',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by Cors'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static('/images/', resolve(__dirname, '..', 'uploads', 'images')));
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
