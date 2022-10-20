import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  postClient(): void {
    console.log("postClient activé");
  }

  getClient(): void {
    console.log("getClient activé");
  }

  postLogin(): void {
    console.log("postLogin activé");
  }

  getCatalogue(): void {
    console.log("getCatalogue activé");
  }
}
