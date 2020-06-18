import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { StateService } from '../state.service';
import { CountryService } from '../country.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-addstate',
  templateUrl: './addstate.component.html',
  styleUrls: ['./addstate.component.css']
})
export class AddstateComponent implements OnInit {
  countries:any=[];
  name:string
  key:String
  countryid:string=""

  stateForm = new FormGroup({
    name:new FormControl('',[Validators.required]),
    key : new FormControl(),
    countryid: new FormControl()
  })

  constructor(private act:ActivatedRoute,private router:Router,private stateSer:StateService,private countrySer:CountryService ){ }
addstate(){
  if(this.key==null){
  console.log(this.stateForm.value)
  this.stateSer.add(this.stateForm.value).subscribe(success=>{
    console.log(success)
    this.router.navigate(['/state']);
  });
}else{
  
    this.stateSer.update(this.stateForm.value).subscribe(success=>{
      this.router.navigate(['/state']);
    }),error=>{
      console.log(error);
    }
}
}
getcountries(){
  this.countrySer.getAll().subscribe(success=>{
    this.countries=success;
    console.log(this.countries);
  })
}
reset(){
  this.stateForm.reset();
  
}

  ngOnInit(): void {
    this.getcountries();
    this.act.queryParams.subscribe(params=>{
      console.log(params);
      if(params){
        this.key=params.key;
        this.stateForm.patchValue(params);
        console.log(this.stateForm.value);
      }
    })
    this.getcountries();
  }

}
