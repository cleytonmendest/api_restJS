import Aluno from '../models/Aluno';

class HomeControler {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Janilson',
      sobrenome: 'Janil',
      email: 'janilson@gmail.com',
      idade: 18,
      peso: 150,
      altura: 1.9,
    });
    res.json(novoAluno);
  }
}
export default new HomeControler();
