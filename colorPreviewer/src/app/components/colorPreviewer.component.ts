import { Component, Input } from '@angular/core';

@Component({
  selector: 'color-previewer',
  template: `<div class="color-sample col-md-12 col-sm-offset-4" color="red" [ngStyle]="{'background':color}"></div>`,
  styleUrls: ['styles.css']
})
export class ColorPreviewer  {
    @Input
    color:string;
}
