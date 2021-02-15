import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
 private _mobileMenuButtonState = new BehaviorSubject<boolean>(false);

  mobileMenuButtonAction = this._mobileMenuButtonState.asObservable();

  constructor() { }

  toggelMobileMenuButtonState(state: boolean): void{
    this._mobileMenuButtonState.next(state);
  }
}
