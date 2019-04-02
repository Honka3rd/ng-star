import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    {{text | summary}}
  `
})
export class CourcesComponent {
  text = `Each module contains built-in blocks(component, directive and pips) highly related to the module.
  If all the modules are imported to any Angular application, the code size is to large.
  ngModel is built in form. Import ngModel from form module.
  `;
}
