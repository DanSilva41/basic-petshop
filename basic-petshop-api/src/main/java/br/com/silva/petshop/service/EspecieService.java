package br.com.silva.petshop.service;

import br.com.silva.petshop.domain.Especie;
import br.com.silva.petshop.repository.EspecieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class EspecieService {

    @Autowired
    private EspecieRepository especieRepository;

    public Especie salvar(Especie especie) {
        return this.especieRepository.save(especie);
    }

    public List<Especie> buscarTodos() {
        return (List<Especie>) this.especieRepository.findAll();
    }

    public Optional<Especie> buscarPorCodigo(Long codigo) {
        return this.especieRepository.findById(codigo);
    }
}

