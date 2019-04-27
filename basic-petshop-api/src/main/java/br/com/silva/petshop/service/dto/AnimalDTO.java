package br.com.silva.petshop.service.dto;

import br.com.silva.petshop.domain.Animal;
import br.com.silva.petshop.domain.Especie;
import br.com.silva.petshop.domain.enums.SexoAnimal;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;

/**
 * DTO representando um animal.
 *
 * @author Danilo Silva
 */
public class AnimalDTO {

    private Long codigo;

    @NotNull
    @Size(min = 3, max = 120)
    private String nome;

    @DateTimeFormat(pattern = "yyyy-MM-dd", iso = DateTimeFormat.ISO.DATE_TIME)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate dataNascimento;

    @Size(min = 3, max = 120)
    private String cor;

    @NotNull
    private SexoAnimal sexo;

    @NotNull
    private Especie especie;

    public AnimalDTO() {
        // Construtor vazio é necessário
    }

    public AnimalDTO(Animal animal) {
        this.codigo = animal.getCodigo();
        this.nome = animal.getNome();
        this.dataNascimento = animal.getDataNascimento();
        this.cor = animal.getCor();
        this.sexo = animal.getSexo();
        this.especie = animal.getEspecie();
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

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public SexoAnimal getSexo() {
        return sexo;
    }

    public void setSexo(SexoAnimal sexo) {
        this.sexo = sexo;
    }

    public Especie getEspecie() {
        return especie;
    }

    public void setEspecie(Especie especie) {
        this.especie = especie;
    }

    @Override
    public String toString() {
        return "AnimalDTO{" +
                "codigo=" + codigo +
                ", nome='" + nome + '\'' +
                ", dataNascimento=" + dataNascimento +
                ", cor='" + cor + '\'' +
                ", sexo=" + sexo +
                ", especie=" + especie +
                '}';
    }
}
