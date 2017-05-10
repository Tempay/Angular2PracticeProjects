import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div class="col-md-12">
                        <div class="col-md-4" style="padding-bottom:20px">
                            <color-previewer #prev></color-previewer>
                        </div>
                        <div class="col-md-8">
                            <input (keyup)="prev.color = input.value" #input color="white" placeholder="Type Your Color Here">
                            Try: red, #169, blue...
                        </div>

                    </div>
                  `,
})
export class AppComponent  { }
