import { Component } from '@angular/core';

/**
 * Generated class for the ElementComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'element',
  templateUrl: 'element.html'
})
export class ElementComponent {

  text: string;

  constructor() {
    console.log('Hello ElementComponent Component');
    this.text = 'Hello World';
  }

}
