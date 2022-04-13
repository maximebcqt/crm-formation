import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  public numVersion$: BehaviorSubject<any> = new BehaviorSubject<any>(1);
  constructor() {}

  public incrementer(): void {
    this.numVersion$.next(this.numVersion$.value+1);
  }
}
