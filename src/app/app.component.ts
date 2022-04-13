import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

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

  //Observable froid
  public obs$: Observable<any> = new Observable<any>((listX) => {
    listX.next('toto');
  });

  //observable chaud
  public sub$: Subject<any> = new Subject<any>();
  public behav$: BehaviorSubject<any> = new BehaviorSubject<any>('totoo');
  constructor() {
    this.title2 = 'titre2';

    this.obs$.subscribe((data) => console.log(data));
    // dans sub, donnée utilisable a la ligne meme car
    //apres ligne d apres ca se vide, comme si pas de memoire et faut subscribe avant
    this.sub$.next('toto');
    this.sub$.subscribe((data) => console.log(data));
    this.sub$.next('toto2');

    //behav
    this.behav$.next('toto3');
    // du coup on va avoir afficher toto2
    this.behav$.subscribe((data) => console.log(data));
    this.behav$.next('toto4');
    //du coup la on aura afficher toto 2 et toto3
    // par contre si en dessous on re ajoute un subscribe on aura 2 toto3
  }
}
