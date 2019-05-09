package br.com.silva.petshop.service.impl;

import br.com.silva.petshop.domain.Especie;
import br.com.silva.petshop.repository.EspecieRepository;
import br.com.silva.petshop.service.EspecieService;
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

    @Override
    public Especie salvar(Especie especie) {
        return this.especieRepository.save(especie);
    }

    @Override
    public Especie atualizar(Especie especie) {
        return this.especieRepository.saveAndFlush(especie);
    }

    @Override
    public List<Especie> buscarTodos() {
        return this.especieRepository.findAll();
    }

    @Override
    public Optional<Especie> buscarPorCodigo(Long codigo) {
        Optional<Especie> especieRetornada = this.especieRepository.findById(codigo);
        return especieRetornada.isPresent() ? Optional.of(especieRetornada.get()) : Optional.empty();
    }

    @Override
    public void deletar(Long codigo) {
        this.especieRepository.deleteById(codigo);
    }
}

