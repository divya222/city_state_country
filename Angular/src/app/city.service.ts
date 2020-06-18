import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CityService {
  getAll(){
    return this.http.get('http://localhost:3000/city');
    
  }
  add(c)
  {
    return this.http.post('http://localhost:3000/city',c);
  }
  update(c){
    return this.http.put('http://localhost:3000/city',c);
  }
  delete(key){
    return this.http.delete('http://localhost:3000/city?key='+key);
  }
  constructor(private http : HttpClient) { }
}
