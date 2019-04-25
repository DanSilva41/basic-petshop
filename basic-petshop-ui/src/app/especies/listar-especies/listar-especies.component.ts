import {Component, OnInit} from '@angular/core';
import {EspeciesService} from '../especies.service';
import {Especie} from "../../core/models";

@Component({
  selector: 'app-listar-especies',
  templateUrl: './listar-especies.component.html',
  styleUrls: ['./listar-especies.component.css']
})
export class ListarEspeciesComponent implements OnInit {

  especies: Array<Especie>;

  constructor(private especiesService: EspeciesService) {
  }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.especiesService.listarEspecies().subscribe(response => this.especies = response);
  }

}
