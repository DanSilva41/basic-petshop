package br.com.silva.petshop.service;

import br.com.silva.petshop.service.dto.EspecieDTO;

import java.util.List;
import java.util.Optional;

public interface EspecieService {

    EspecieDTO salvar(EspecieDTO especieDTO);

    EspecieDTO atualizar(EspecieDTO especieDTO);

    List<EspecieDTO> buscarTodos();

    Optional<EspecieDTO> buscarPorCodigo(Long codigo);

    void deletar(Long codigo);
}

