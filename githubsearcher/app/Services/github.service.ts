import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;
    private client_id = '08e202142881f6b7ed19';
    private client_secret = '2e008f7774f7508a37e34cefd59a5b38627521a3';

    constructor(private _http: Http){
      console.log('Connecting to Github...');
      this.username = 'Tempay';
    }

    getUser(){
      return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(res => res.json());
    }

    getUserRepos(){
      return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(res => res.json());
    }

    updateUser(username: string){
      this.username = username;
    }
  }
