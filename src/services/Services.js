const dataSource = require('../models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros() {
    return dataSource[this.model].findAll();
  }

  async pegaUmRegistroPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async criaRegistro(dados) {
    return dataSource[this.model].create(dadosDoRegistro);
  }

  async atualizaRegistro(id, dados) {
    const listaDeRegistrosAtualizados = dataSource[this.model].update(dadosAtulizados, {
      where: { id: id },
    });
    if(listaDeRegistrosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }

  async apagaRegistro(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;