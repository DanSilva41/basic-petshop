package br.com.silva.petshop.service;

import br.com.silva.petshop.service.dto.AnimalDTO;

import java.util.List;
import java.util.Optional;

public interface AnimalService {

    AnimalDTO salvar(AnimalDTO animalDTO);

    AnimalDTO atualizar(AnimalDTO animalDTO);

    List<AnimalDTO> buscarTodos();

    Optional<AnimalDTO> buscarPorCodigo(Long codigo);

    void remover(Long codigo);

}
