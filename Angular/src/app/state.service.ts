import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class StateService {
getAll(){
  return this.http.get("http://localhost:3000/state");

}
add(s){
  return this.http.post("http://localhost:3000/state",s);
}
update(s){
  return this.http.put('http://localhost:3000/state',s);
}
delete(key){
  return this.http.delete('http://localhost:3000/state?key='+key);
}
getById(key){
  console.log(key);
  return this.http.get("http://localhost:3000/state/getById?key="+key);
}
  constructor(private http:HttpClient) { }
}
