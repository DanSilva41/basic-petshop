package br.com.silva.petshop.rest;

import br.com.silva.petshop.rest.util.HeaderUtil;
import br.com.silva.petshop.service.EspecieService;
import br.com.silva.petshop.service.dto.EspecieDTO;
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
 * Controlador REST para gerenciamento de espécies.
 * Esta classe acessa a entidade Especie e pode realizar operações necessárias.
 */
@RestController
@RequestMapping("/api/especies")
public class EspecieResource {

    @Autowired
    private EspecieService especieService;

    /**
     * GET  /api/especies : buscar todas as espécies.
     *
     * @return status 200 (OK) e a lista de todas as espécies
     */
    @GetMapping
    public List<EspecieDTO> listar() {
        return this.especieService.buscarTodos();
    }

    /**
     * GET  /api/especies/{codigo} : buscar espécie pelo código.
     *
     * @param codigo o código da espécie a ser buscada
     * @return a ResponseEntity com status 201 (Criado) e com o corpo da espécie correspondente
     */
    @GetMapping("/{codigo}")
    public ResponseEntity<EspecieDTO> buscarPeloCodigo(@PathVariable Long codigo) {
        Optional<EspecieDTO> especieRetornada = this.especieService.buscarPorCodigo(codigo);
        return especieRetornada.isPresent() ? ResponseEntity.ok(especieRetornada.get()) : ResponseEntity.notFound().build();
    }

    /**
     * POST  /api/especies : Cria uma nova espécie.
     *
     * @param especieDTO a espécie a ser criada
     * @return a ResponseEntity com status 201 (Criado) e com o corpo da nova espécie
     * @throws URISyntaxException se a sintaxe do URI de localização estiver incorreta
     */
    @PostMapping
    public ResponseEntity<EspecieDTO> cadastrar(@Valid @RequestBody EspecieDTO especieDTO) throws URISyntaxException {
        EspecieDTO especieSalva = this.especieService.salvar(especieDTO);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{codigo}").buildAndExpand(especieSalva.getCodigo()).toUri();
        return ResponseEntity.created(uri)
                .headers(HeaderUtil.criarAlerta("animal.criado", especieSalva.getCodigo().toString()))
                .body(especieSalva);
    }

    /**
     * PUT  /api/especies : Atualizar uma espécie.
     *
     * @param especieDTO a espécie a ser atualizada
     * @return a ResponseEntity com status 200 (OK) e com o corpo da espécie atualizado
     * @throws URISyntaxException se a sintaxe do URI de localização estiver incorreta
     */
    @PutMapping
    public ResponseEntity<EspecieDTO> atualizarEspecie(@RequestBody @Valid EspecieDTO especieDTO) throws URISyntaxException {
        EspecieDTO especieAtualizada = this.especieService.atualizar(especieDTO);

        return ResponseEntity.ok()
                .headers(HeaderUtil.criarAlerta("especie.atualizado", especieAtualizada.getCodigo().toString()))
                .body(especieAtualizada);
    }
}
