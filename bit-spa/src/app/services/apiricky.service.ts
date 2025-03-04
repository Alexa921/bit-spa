import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApirickyService {
  constructor(private httpClient: HttpClient) {}

  getPersonajes() {
    return this.httpClient.get('https://rickandmortyapi.com/api/character');
  }
}
