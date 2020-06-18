import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CityService} from '../city.service';
import { StateService } from '../state.service';
import { CountryService } from '../country.service';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  cities : any=[];
  displayCities:any=[];
  search:string="";
  myDate=new Date();
  constructor(private router:Router,private citySer:CityService,private stateSer:StateService,private countrySer:CountryService) { }
  getcities(){
    this.citySer.getAll().subscribe(success=>{
      console.log(success);
      this.cities=success;
      this.cities.forEach(element => {
        let cid = element.countryid;
        console.log(cid)
        this.countrySer.getById(cid).subscribe(success=>{
          console.log(success);
          let ctry:any=success;
          if(ctry)
          {
            console.log(ctry.name);
            element.cname=ctry.name;

          }
          
        })
        
        });
        this.cities.forEach(element=>{
          let sid=element.stateid;
          console.log(sid);
          this.stateSer.getById(sid).subscribe(success=>{
            console.log(success);
            let state:any=success;
            if(state)
            {
              console.log(state.name);
            element.sname=state.name;
            }
          })
        });
        this.displayCities=this.cities;
  
    }, error=>{
      console.log(error);
    })
  }
  edit(c){
    this.router.navigate(['/addcity'],{queryParams:c});
  }
  delete(c){
    this.citySer.delete(c.key).subscribe(success=>
      {
        this.getcities();
      })
  }
  go_to_home(){
    this.router.navigate(['/home']);
  }
  searchCity(){
    console.log(this.search);
    console.log(this.cities);
    this.displayCities=this.cities.filter(x=>{
      console.log(x);
    if(x.name.toLowerCase().includes(this.search.toLowerCase()))
return x;
    })
  }
  ngOnInit(): void {
    this.getcities();
  }

}
