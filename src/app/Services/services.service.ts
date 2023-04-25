import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Link } from '../model/link';

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
    return this.http.get<{[key: string]: File}>(this.endPoint + '/Document.json')
  };

  /* ========= Function to get all Links ========= */
  getLinks() {
    return this.http.get<{[key : string]: Link}>(this.endPoint + '/Link.json')
  };

  /* ========= Function to get all Transactions =========== */
  getTasks() {
    return this.http.get<{[key : string]: Link}>(this.endPoint + '/demande.json')
  };

}
