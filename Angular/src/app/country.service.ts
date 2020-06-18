import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  getAll(){
    return this.http.get("http://localhost:3000/country");
  }
  add(cn){
    return this.http.post('http://localhost:3000/country',cn);
  }
  update(c){
    return this.http.put('http://localhost:3000/country',c);
  }
  delete(key){
    return this.http.delete('http://localhost:3000/country?key='+key);
  }

  getById(key){
    return this.http.get("http://localhost:3000/country/getById?key="+key);
  }
  constructor(private http : HttpClient) { }
}
