export class Especie {
  codigo: number;
  nome: string;
  descricao: string;
}

export class Animal {
  codigo: number;
  nome: string;
  dataNascimento?: any;
  cor: string;
  sexo: string;
  especie: Especie = new Especie();
  
}
