import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { CityService } from '../city.service';
import { StateService } from '../state.service'
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { CountryService } from '../country.service';
@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css']
})
export class AddcityComponent implements OnInit {
  states:any=[];
  name:string;
  key:string
  stateid:string="";
  displayStates:any=[];
  countries:any=[];
  countryid:string="";
  cityForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    key:new FormControl(),
    countryid:new FormControl(),
    stateid:new FormControl(),
    email: new FormControl('',[Validators.required,Validators.email]),
    myDate: new FormControl('',[Validators.required])
  
  })

  constructor(private act: ActivatedRoute,private router:Router,private citySer : CityService,private stateSer:StateService,private countrySer:CountryService) { }
  selectStatesForCountry()
  {
    console.log("changed")
    console.log(this.countryid)
    this.displayStates = this.states.filter(x => {
      if(x.countryid === this.cityForm.controls.countryid.value)
        return x;

    })
    console.log(this.displayStates);
  }
  add(){
    if(this.key==null){
      console.log(this.cityForm.value)
    this.citySer.add(this.cityForm.value).subscribe(success=>{
      console.log(success)
      this.router.navigate(['/city']);
    });
  }else{
    
      this.citySer.update(this.cityForm.value).subscribe(success=>{
        this.router.navigate(['/city']);
      }),error=>{
        console.log(error);
      }
  }
}
getstates(){
  this.stateSer.getAll().subscribe(success=>{
    this.states=success;
    console.log(this.states);
  })
}
getcountries(){
  this.countrySer.getAll().subscribe(success=>{
    this.countries=success;
    console.log(this.countries);
  })
}
reset(){
  this.cityForm.reset();
}
  ngOnInit():void {
    this.getcountries();
    this.act.queryParams.subscribe(params=>{
      console.log(params);
      if(params){
        this.key=params.key;
        this.cityForm.patchValue(params);
        console.log(this.cityForm.value);
      }
    })
    this.getstates();
  }

}
