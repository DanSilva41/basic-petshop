package br.com.silva.petshop.service;

import br.com.silva.petshop.domain.Animal;

import java.util.List;
import java.util.Optional;

public interface AnimalService {

    Animal salvar(Animal animal);

    Animal atualizar(Animal animal);

    List<Animal> buscarTodos();

    Optional<Animal> buscarPorCodigo(Long codigo);

    void deletar(Long codigo);

}
