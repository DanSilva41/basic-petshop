package br.com.silva.petshop.rest;

import br.com.silva.petshop.domain.Animal;
import br.com.silva.petshop.rest.util.HeaderUtil;
import br.com.silva.petshop.service.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
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
    public List<Animal> listar() {
        return this.animalService.buscarTodos();
    }

    /**
     * GET  /api/animais/{codigo} : buscar animal pelo código.
     *
     * @param codigo o código da animal a ser buscado
     * @return a ResponseEntity com status 201 (Criado) e com o corpo do animal correspondente
     */
    @GetMapping("/{codigo}")
    public ResponseEntity<?> buscarPeloCodigo(@PathVariable Long codigo) {
        Optional<Animal> animalRetornado = this.animalService.buscarPorCodigo(codigo);
        return animalRetornado.isPresent() ? ResponseEntity.ok(animalRetornado.get()) : ResponseEntity.notFound().build();
    }

    /**
     * POST  /api/animais : Cria um novo animal.
     *
     * @param animal o animal a ser criado
     * @return a ResponseEntity com status 201 (Criado) e com o corpo do novo animal
     * @throws URISyntaxException se a sintaxe do URI de localização estiver incorreta
     */
    @PostMapping
    public ResponseEntity<Animal> cadastrar(@RequestBody @Valid Animal animal) throws URISyntaxException {
        Animal animalSalvo = this.animalService.salvar(animal);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{codigo}").buildAndExpand(animalSalvo.getCodigo()).toUri();
        return ResponseEntity.created(uri)
                .headers(HeaderUtil.criarAlerta("animal.criado", animalSalvo.getCodigo().toString()))
                .body(animalSalvo);
    }
}

