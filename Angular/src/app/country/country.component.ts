import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CountryService } from '../country.service';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries:any = [];
  constructor(private countrySer : CountryService,private router :Router) { }
getcountries(){
  this.countrySer.getAll().subscribe(success=>{
    console.log(success);
    this.countries=success;
  },error=>{
    console.log(error);
  }
  )
}
add(){
  this.router.navigate(['/addcountry']);
}
edit(c){
  this.router.navigate(['/add'],{queryParams:c})
}
delete(c){
  this.countrySer.delete(c.key).subscribe(success=>
    {
      this.getcountries();
    })
}
  go_to_home(){
    this.router.navigate(['/home']);
  }
  ngOnInit():void {
    this.getcountries();
  }

}

