import { Injectable } from '@angular/core';
import { Client } from './core/model/client';
import { Product } from './core/model/product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ClientService {
  constructor(private http: HttpClient) {}

  getClient(): Client {
    return new Client(
      'John',
      'Doe',
      'test@gmail.com',
      '1234567890',
      '123 Main St',
      'New York',
      'Male',
      '12345',
      'USA',
      'test',
      'test',
      'test'
    );
  }

  //create method to post a client
  postClient(client: Client) {
    console.log(client);
  }

  //create method to post login
  postLogin(login: string, password: string, confirmPassword: string) {
    if (password === confirmPassword) {
      console.log('Login accepted');
    } else {
      console.log('Login rejected');
    }
  }

  //create method to get a catalogue of Products
  getCatalogue() {
    return this.http.get<Product[]>(environment.catalogUrl);
  }
}
