import { Component } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rotasSemMenu: Array<String> = [
    '/login',
    '/pagina-nao-encontrada'
  ];

  constructor(private router: Router) {}

  exibirNavbar() {
    return !this.rotasSemMenu.includes(this.router.url);
  }
}
