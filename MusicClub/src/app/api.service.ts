import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Book } from './interfaces/book';
import { User } from './interfaces/user';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    // booksUrl = environment.booksUrl;
    // apiUrl = environment.apiUrl;
    constructor( private http: HttpClient) { }
  book : Book ;

    getBook(id:string) {
      const { apiUrl } = environment;
      return this.http.get<Book>(`${apiUrl}/${id}`);
    }

    getBooks() {
        const booksUrl = environment.booksUrl;
        return this.http.get<Book[]>(`${booksUrl}/.json`);
  }

    addBook(name: string, author: string, genre: string, year: number, imageUrl: string, description: string, ) {
      const  booksUrl  = environment.booksUrl
        return this.http.post<Book[]>(`${booksUrl}/.json`,{name, author, genre, year, imageUrl, description})
    }
  }

//   {
//     "rules": {
//       ".read": "now < 1694638800000",  // 2023-9-14
//       ".write": "now < 1694638800000",  // 2023-9-14
//     }
//   }