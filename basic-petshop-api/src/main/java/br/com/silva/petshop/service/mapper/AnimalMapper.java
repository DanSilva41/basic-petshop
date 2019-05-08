package br.com.silva.petshop.service.mapper;

import br.com.silva.petshop.domain.Animal;
import br.com.silva.petshop.service.dto.AnimalDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

/**
 * Mapeador para a entidade Animal e seu DTO chamado AnimalDTO.
 */
@Service
public class AnimalMapper {

    @Autowired
    private EspecieMapper especieMapper;

    public AnimalDTO animalParaAnimalDTO(Animal animal) {
        return new AnimalDTO(animal);
    }

    public List<AnimalDTO> animaisParaAnimalDTOs(List<Animal> animais) {
        return animais.stream()
                .filter(Objects::nonNull)
                .map(this::animalParaAnimalDTO)
                .collect(Collectors.toList());
    }

    public Animal animalDTOTParaAnimal(AnimalDTO animalDTO) {
        if (animalDTO == null) {
            return null;
        } else {
            Animal animal = new Animal();
            animal.setCodigo(animalDTO.getCodigo());
            animal.setNome(animalDTO.getNome());
            animal.setDataNascimento(animalDTO.getDataNascimento());
            animal.setCor(animalDTO.getCor());
            animal.setSexo(animalDTO.getSexo());
            animal.setEspecie(especieMapper.especieDTOTParaEspecie(animalDTO.getEspecieDTO()));
            return animal;
        }
    }

    public List<Animal> animalDTOsParaAnimais(List<AnimalDTO> animalDTOs) {
        return animalDTOs.stream()
                .filter(Objects::nonNull)
                .map(this::animalDTOTParaAnimal)
                .collect(Collectors.toList());
    }
}
