package br.com.silva.petshop.rest;

import br.com.silva.petshop.domain.Animal;
import br.com.silva.petshop.rest.util.HeaderUtil;
import br.com.silva.petshop.service.AnimalService;
import br.com.silva.petshop.service.dto.AnimalDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * Controlador REST para gerenciamento de animais.
 * Esta classe acessa a entidade Animal e pode realizar operações necessárias.
 */
@RestController
@RequestMapping("/api/animais")
public class AnimalResource {

    @Autowired
    private AnimalService animalService;

    /**
     * GET  /api/animais : buscar todos os animais.
     *
     * @return status 200 (OK) e a lista de todos os animais
     */
    @GetMapping
    public List<AnimalDTO> listarAnimais() {
        return this.animalService.buscarTodos();
    }

    /**
     * GET  /api/animais/{codigo} : buscar animal pelo código.
     *
     * @param codigo o código da animal a ser buscado
     * @return a ResponseEntity com status 201 (Criado) e com o corpo do animal correspondente
     */
    @GetMapping("/{codigo}")
    public ResponseEntity<AnimalDTO> buscarAnimalPeloCodigo(@PathVariable Long codigo) {
        Optional<AnimalDTO> animalRetornado = this.animalService.buscarPorCodigo(codigo);
        return animalRetornado.isPresent() ? ResponseEntity.ok(animalRetornado.get()) : ResponseEntity.notFound().build();
    }

    /**
     * POST  /api/animais : Cria um novo animal.
     *
     * @param animalDTO o animal a ser criado
     * @return a ResponseEntity com status 201 (Criado) e com o corpo do novo animal
     * @throws URISyntaxException se a sintaxe do URI de localização estiver incorreta
     */
    @PostMapping
    public ResponseEntity<AnimalDTO> cadastrarAnimal(@RequestBody @Valid AnimalDTO animalDTO) throws URISyntaxException {
        AnimalDTO animalSalvo = this.animalService.salvar(animalDTO);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{codigo}").buildAndExpand(animalSalvo.getCodigo()).toUri();
        return ResponseEntity.created(uri)
                .headers(HeaderUtil.criarAlerta("animal.criado", animalSalvo.getCodigo().toString()))
                .body(animalSalvo);
    }

    /**
     * PUT  /api/animais : Atualizar um animal.
     *
     * @param animalDTO o animal a ser atualizado
     * @return a ResponseEntity com status 200 (OK) e com o corpo do animal atualizado
     * @throws URISyntaxException se a sintaxe do URI de localização estiver incorreta
     */
    @PutMapping
    public ResponseEntity<AnimalDTO> atualizarAnimal(@RequestBody @Valid AnimalDTO animalDTO) throws URISyntaxException {
        AnimalDTO animalAtualizado = this.animalService.atualizar(animalDTO);

        return ResponseEntity.ok()
                .headers(HeaderUtil.criarAlerta("animal.atualizado", animalAtualizado.getCodigo().toString()))
                .body(animalAtualizado);
    }
}

