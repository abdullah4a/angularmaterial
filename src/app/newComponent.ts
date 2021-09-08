import { Component } from '@angular/core';
@Component({
  selector: 'newComp',
  template: '<h1>New Component</h1>',
})
export class newComponent {
  constructor() {
    console.info('Hello from class');
  }
}
