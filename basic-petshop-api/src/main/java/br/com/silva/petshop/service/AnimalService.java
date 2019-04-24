package br.com.silva.petshop.service;

import br.com.silva.petshop.domain.Animal;
import br.com.silva.petshop.repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class AnimalService {

    @Autowired
    private AnimalRepository animalRepository;

    public Animal salvar(Animal animal) {
        return this.animalRepository.save(animal);
    }

    public List<Animal> buscarTodos() {
        return (List<Animal>) this.animalRepository.findAll();
    }

    public Optional<Animal> buscarPorCodigo(Long codigo) {
        return this.animalRepository.findById(codigo);
    }

}
