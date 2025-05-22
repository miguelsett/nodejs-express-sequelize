class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async pegaTodos(req, res) {
    try {
      const listaDeRegistros = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistros);
    } catch (erro) {
      // erro
    }
  }

  async pegaUmPorId(req, res) {
    const { id } = req.params;
    try {
      const registro = await this.entidadeService.pegaUmRegistroPorId(id);
      return res.status(200).json(umRegistro);
    } catch (erro) {
      // erro
    }
  }

  async criaNovo(req, res) {
    const novoRegistro = req.body;
    try {
      const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosNovos);
      return res.status(200).json(novoRegistroCriado);
    } catch (erro) {
      // erro
    }
  }
  async atualiza(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
      const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id));
      if (!foiAtualizado) {
        return res.status(400).json({ message: 'Registro não foi atualizado' });
      }
      return res.status(200).json({ message: 'Registro atualizado com sucesso' });
    } catch (erro) {
      // erro
    }
  }

  async exclui(req, res) {
    const { id } = req.params;
    try {
      await this.entidadeService.apagaRegistro(Number(id));
      return res.status(200).json({ message: `id ${id} deletado` });
    } catch (erro) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = Controller;