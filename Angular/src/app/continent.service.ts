import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContinentService {
  getAll(){
    return this.http.get("http://localhost:3000/continent");
  }
  add(cnt){
    return this.http.post("http://localhost:3000/continent",cnt);
  }
  constructor(private http : HttpClient) { }
}
