import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: 'album.component.html',
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Album[];

  constructor(private _spotifyService: SpotifyService,
                      private _route: ActivatedRoute) {

  }

  ngOnInit(){
      this._route.params
          .map(params => params['id'])
          .subscribe((id) => {
              this._spotifyService.getAlbum(id)
                  .subscribe(album => {
                      this.album = album;
                  })
          });
  }

  previewAlbum(link: string, name: string) {
    var win = window.open(link, name, "height=15px, width=300px, top=500px, left=900px");
    setTimeout(function() {
      win.close()
    }, 30000);
  }
}
