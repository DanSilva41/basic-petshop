package br.com.silva.petshop.service.impl;

import br.com.silva.petshop.domain.Especie;
import br.com.silva.petshop.repository.EspecieRepository;
import br.com.silva.petshop.service.EspecieService;
import br.com.silva.petshop.service.dto.EspecieDTO;
import br.com.silva.petshop.service.mapper.EspecieMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class EspecieServiceImpl implements EspecieService {

    @Autowired
    private EspecieRepository especieRepository;

    @Autowired
    private EspecieMapper especieMapper;

    @Override
    public EspecieDTO salvar(EspecieDTO especieDTO) {
        Especie especie = especieMapper.especieDTOTParaEspecie(especieDTO);
        return especieMapper.especieParaEspecieDTO(this.especieRepository.save(especie));
    }

    @Override
    public EspecieDTO atualizar(EspecieDTO especieDTO) {
        Especie especie = especieMapper.especieDTOTParaEspecie(especieDTO);
        return especieMapper.especieParaEspecieDTO(this.especieRepository.saveAndFlush(especie));
    }

    @Override
    public List<EspecieDTO> buscarTodos() {
        return especieMapper.especiesParaEspecieDTOs(this.especieRepository.findAll());
    }

    @Override
    public Optional<EspecieDTO> buscarPorCodigo(Long codigo) {
        Optional<Especie> especieRetornada = this.especieRepository.findById(codigo);
        return especieRetornada.isPresent() ? Optional.of(especieMapper.especieParaEspecieDTO(especieRetornada.get())) : Optional.empty();
    }

    @Override
    public void remover(Long codigo) {
        this.especieRepository.deleteById(codigo);
    }
}

