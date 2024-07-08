import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from './types/Album';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) {}
  album : Album | undefined;

    getAlbum(name:string) {
      const { apiUrl } = environment;
      return this.http.get<Album>(`${apiUrl}/${name}`);
    }

    getAlbums() {
        const musicUrl  = environment.musicUrl
        return this.http.get<Album[]>(`${musicUrl}/.json`);
  }

    addAlbum(artist: string, name: string, released: string, genre: string, label: string, singles: string, coverUrl: string, _id: string, owner: string) {
      const musicUrl  = environment.musicUrl
        return this.http.post<Album[]>(`${musicUrl}/.json`,{artist ,name, released, genre, label, singles, coverUrl, _id, owner})
    }
  }
