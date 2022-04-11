import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'CRM';
  //si on veut pas initialiser variable direct on peut faire :
  // ( et en gros ca veut dire peut etre type string ou undefined)
  public titleUndefined: string | undefined; // ou on peut faire : public titleUndefined!: string;
  // ou declarer comme ca avec initialisation valeur dans le constructeur
  public title2: string;
  constructor() {
    this.title2 = 'titre2';
  }
}
