package br.com.silva.petshop.service.dto;

import br.com.silva.petshop.domain.Especie;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * DTO representando uma especie.
 *
 * @author Danilo Silva
 */
public class EspecieDTO {

    private Long codigo;

    @NotNull
    @Size(min = 3, max = 120)
    private String nome;

    @Size(min = 5, max = 255)
    private String descricao;

    public EspecieDTO() {
        // Construtor vazio é necessário
    }

    public EspecieDTO(Especie especie) {
        this.codigo = especie.getCodigo();
        this.nome = especie.getNome();
        this.descricao = especie.getDescricao();
    }

    public Long getCodigo() {
        return codigo;
    }

    public void setCodigo(Long codigo) {
        this.codigo = codigo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    @Override
    public String toString() {
        return "EspecieDTO{" +
                "codigo=" + codigo +
                ", nome='" + nome + '\'' +
                ", descricao='" + descricao + '\'' +
                '}';
    }
}