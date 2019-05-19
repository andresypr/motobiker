import {Component} from '@angular/core';

@Component({
  selector: 'snack-bar-component',
  template: '<span class="example-pizza-party"> Transaccion exitosa!!! 🍕</span>',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class SnackBarComponent {}
