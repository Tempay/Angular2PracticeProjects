import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';

@Component({
  moduleId: module.id,
  selector: 'searcher',
  templateUrl: 'search.component.html',
})
export class SearchComponent  {
  target: string;
  result: Artist[];

  constructor(private _spotifyService: SpotifyService) {

  }
  searchContent() {
    this._spotifyService.searchSpotify(this.target).subscribe(res => {this.result = res.artists.items});
  }
}
