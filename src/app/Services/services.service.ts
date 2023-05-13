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
    return this.http.get<{[key: string]: File}>('https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/document.json')
  };

  /* ========= Function to get all Links ========= */
  getLinks() {
    return this.http.get<{[key : string]: Link}>('https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/link.json')
  };

  /* ========= Function to get all Transactions =========== */
  getTasks() {
    return this.http.get<{[key : string]: Task}>('https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/demande.json')
  };

  getOrders() {
    return this.http.get<{[key : string]: Order}>('https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/Transaction.json')
  }

  /* ========= Function to get all Users =========== */
  getUsers() {
    return this.http.get<{[key : string]: User}>('https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/users.json')
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

}
