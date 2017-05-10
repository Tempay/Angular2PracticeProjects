import { Component } from '@angular/core';
import { SpotifyService } from './services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  providers: [SpotifyService],
  templateUrl: 'app.component.html',
})
export class AppComponent  { }
