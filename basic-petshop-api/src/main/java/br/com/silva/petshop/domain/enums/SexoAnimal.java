package br.com.silva.petshop.domain.enums;

public enum SexoAnimal {

    FEMEA("FÊMEA"), MACHO("MACHO");

    private String descricao;

    SexoAnimal(String descricao) {
        this.descricao = descricao;
    }

    public String getDescricao() {
        return descricao;
    }
}

