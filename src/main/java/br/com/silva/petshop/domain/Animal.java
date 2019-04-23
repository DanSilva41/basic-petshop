package br.com.silva.petshop.domain;

import br.com.silva.petshop.domain.enums.SexoAnimal;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

@Entity
@Table(name = "animal")
public class Animal implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codigo;

    @NotNull
    @Size(min = 3, max = 120)
    @Column(name = "nome")
    private String nome;

    @Column(name = "dt_nascimento")
    private LocalDate dataNascimento;

    @Column(name = "cor")
    private String cor;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "sexo")
    private SexoAnimal sexo;

    @NotNull
    @ManyToOne
    @JoinColumn(name="codigo_especie")
    private Especie especie;

    public Animal() {
    }

    public Animal(Long codigo, String nome, LocalDate dataNascimento, SexoAnimal sexo, String cor, Especie especie) {
        this.codigo = codigo;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.cor = cor;
        this.especie = especie;
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

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "sexo")
    public SexoAnimal getSexo() {
        return sexo;
    }

    public void setSexo(SexoAnimal sexo) {
        this.sexo = sexo;
    }

    @Column
    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    @NotNull
    @ManyToOne
    @JoinColumn(name="codigo_especie")
    public Especie getEspecie() {
        return especie;
    }

    public void setEspecie(Especie especie) {
        this.especie = especie;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Animal animal = (Animal) o;
        return Objects.equals(getCodigo(), animal.getCodigo());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getCodigo());
    }


}
