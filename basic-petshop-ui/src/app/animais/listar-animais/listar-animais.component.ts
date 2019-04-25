import { Component, OnInit } from '@angular/core';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-listar-animais',
  templateUrl: './listar-animais.component.html',
  styleUrls: ['./listar-animais.component.css']
})
export class ListarAnimaisComponent implements OnInit {

  animais: Array<any>;

  constructor(private animaisService: AnimaisService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.animaisService.listarAnimais().subscribe(response => this.animais = response);
  }

}
