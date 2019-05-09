package br.com.silva.petshop.service.impl;

import br.com.silva.petshop.domain.Animal;
import br.com.silva.petshop.repository.AnimalRepository;
import br.com.silva.petshop.service.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class AnimalServiceImpl implements AnimalService {

    @Autowired
    private AnimalRepository animalRepository;

    @Override
    public Animal salvar(Animal animal) {
        return this.animalRepository.save(animal);
    }

    @Override
    public Animal atualizar(Animal animal) {
        return this.animalRepository.saveAndFlush(animal);
    }

    @Override
    public List<Animal> buscarTodos() {
        return this.animalRepository.findAll();
    }

    @Override
    public Optional<Animal> buscarPorCodigo(Long codigo) {
        Optional<Animal> animalRetornado = this.animalRepository.findById(codigo);
        return animalRetornado.isPresent() ? Optional.of(animalRetornado.get()) : Optional.empty();
    }

    @Override
    public void deletar(Long codigo) {
        this.animalRepository.deleteById(codigo);
    }

}
