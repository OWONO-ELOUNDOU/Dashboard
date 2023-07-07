import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Link } from '../model/link';
import { Order } from '../model/order';
import { User } from '../model/user';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private readonly endPoint = 'https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(
    private http: HttpClient,
  ) { };

  /* =========== Function to get all Documents ========== */
  getFiles() {
    return this.http.get<{[key: string]: File}>(this.endPoint + 'document.json')
  };

  /* ========= Function to get all Links ========= */
  getLinks() {
    return this.http.get<{[key : string]: Link}>(this.endPoint + 'link.json')
  };

  /* ========= Function to get all Transactions =========== */
  getTasks() {
    return this.http.get<{[key : string]: Task}>(this.endPoint + 'demande.json')
  };

  getOrders() {
    return this.http.get<{[key : string]: Order}>(this.endPoint + 'Transaction.json')
  }

  /* ========= Function to get all Users =========== */
  getUsers() {
    return this.http.get<{[key : string]: User}>(this.endPoint + 'users.json');
  }


  // Post Functions
  // Add Docuument
  createDoc(data: any) {
    return this.http.post('https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/document.json', data, {
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  // Delete User with Id
  deleteUser(userId: string) {
    this.http.delete(this.endPoint + 'users.json' + userId)
  }

}
