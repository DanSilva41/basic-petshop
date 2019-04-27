package br.com.silva.petshop.service.mapper;

import br.com.silva.petshop.domain.Especie;
import br.com.silva.petshop.service.dto.EspecieDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

/**
 * Mapeador para a entidade Especie e seu DTO chamado EspecieDTO.
 */
@Service
public class EspecieMapper {

    public EspecieDTO especieParaEspecieDTO(Especie especie) {
        return new EspecieDTO(especie);
    }

    public List<EspecieDTO> especiesParaEspecieDTOs(List<Especie> especies) {
        return especies.stream()
                .filter(Objects::nonNull)
                .map(this::especieParaEspecieDTO)
                .collect(Collectors.toList());
    }

    public Especie especieDTOTParaEspecie(EspecieDTO especieDTO) {
        if (especieDTO == null) {
            return null;
        } else {
            Especie especie = new Especie();
            especie.setCodigo(especieDTO.getCodigo());
            especie.setNome(especieDTO.getNome());
            especie.setDescricao(especieDTO.getDescricao());
            return especie;
        }
    }

    public List<Especie> especieDTOsParaEspecies(List<EspecieDTO> especieDTOs) {
        return especieDTOs.stream()
                .filter(Objects::nonNull)
                .map(this::especieDTOTParaEspecie)
                .collect(Collectors.toList());
    }

}
