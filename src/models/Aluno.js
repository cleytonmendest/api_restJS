import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultvalue: '',
        validate: {
          len: {
            args: [3, 355],
            msg: 'Nome precisa ter entre 3 e 355 caracteres',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultvalue: '',
        validate: {
          len: {
            args: [3, 355],
            msg: 'Sobrenome precisa ter entre 3 e 355 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultvalue: '',
        unique: {
          msg: 'Email já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultvalue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um numero inteiro',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultvalue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultvalue: '',
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um número',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
