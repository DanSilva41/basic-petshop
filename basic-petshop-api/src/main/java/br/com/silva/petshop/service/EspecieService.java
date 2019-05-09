package br.com.silva.petshop.service;

import br.com.silva.petshop.domain.Especie;

import java.util.List;
import java.util.Optional;

public interface EspecieService {

    Especie salvar(Especie Especie);

    Especie atualizar(Especie Especie);

    List<Especie> buscarTodos();

    Optional<Especie> buscarPorCodigo(Long codigo);

    void deletar(Long codigo);
}

