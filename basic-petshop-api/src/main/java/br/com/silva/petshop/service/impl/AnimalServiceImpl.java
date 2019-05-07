package br.com.silva.petshop.service.impl;

import br.com.silva.petshop.domain.Animal;
import br.com.silva.petshop.repository.AnimalRepository;
import br.com.silva.petshop.service.AnimalService;
import br.com.silva.petshop.service.dto.AnimalDTO;
import br.com.silva.petshop.service.mapper.AnimalMapper;
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

    @Autowired
    private AnimalMapper animalMapper;

    @Override
    public AnimalDTO salvar(AnimalDTO animalDTO) {
        Animal animal = animalMapper.animalDTOTParaAnimal(animalDTO);
        return animalMapper.animalParaAnimalDTO(this.animalRepository.save(animal));
    }

    @Override
    public AnimalDTO atualizar(AnimalDTO animalDTO) {
        Animal animal = animalMapper.animalDTOTParaAnimal(animalDTO);
        return animalMapper.animalParaAnimalDTO(this.animalRepository.saveAndFlush(animal));
    }

    @Override
    public List<AnimalDTO> buscarTodos() {
        return animalMapper.animaisParaAnimalDTOs(this.animalRepository.findAll());
    }

    @Override
    public Optional<AnimalDTO> buscarPorCodigo(Long codigo) {
        Optional<Animal> animalRetornado = this.animalRepository.findById(codigo);
        return animalRetornado.isPresent() ? Optional.of(animalMapper.animalParaAnimalDTO(animalRetornado.get())) : Optional.empty();
    }

    @Override
    public void deletar(Long codigo) {
        this.animalRepository.deleteById(codigo);
    }

}
