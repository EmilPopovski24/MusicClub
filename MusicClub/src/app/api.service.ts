import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Album } from './types/Album';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    // musicUrl = environment.musicUrl;
    // apiUrl = environment.apiUrl;
    constructor( private http: HttpClient) { }
  album : Album | undefined ;

    getAlbum(id:string) {
      const { apiUrl } = environment;
      return this.http.get<Album>(`${apiUrl}/${id}`);
    }

    getAlbums() {
        const { apiUrl } = environment;
        return this.http.get<Album[]>(`${apiUrl}/.json`);
  }

    addAlbum(artist: string,name: string,released: string, genre: string, label: string, singles: string, coverUrl: string) {
      const { apiUrl } = environment;
      // const musicUrl  = environment.musicUrl
        return this.http.post<Album[]>(`${apiUrl}/.json`,{artist,name, released, genre, label, singles, coverUrl})
    }
  }
