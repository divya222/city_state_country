import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-addcountry',
  templateUrl: './addcountry.component.html',
  styleUrls: ['./addcountry.component.css']
})
export class AddcountryComponent implements OnInit {
  name : string;
  key:string;
  countryForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    key:new FormControl()
  })
  constructor(private act:ActivatedRoute,private countrySer : CountryService,private router : Router) { }
  add(){
    if(this.key==null){
   console.log(this.countryForm.value)
    this.countrySer.add(this.countryForm.value).subscribe(success=>{
      console.log(success)
      this.router.navigate(['/country']);
    });
  }else
  {
    
    this.countrySer.update(this.countryForm.value).subscribe(success=>{
      this.router.navigate(['/country']);
    }),error=>{
      console.log(error);
    }
  }
  }
  go_to_country(){
    this.router.navigate(['/country']);
  }
  reset(){
    this.countryForm.reset();
  }
  ngOnInit(): void {
  
    this.act.queryParams.subscribe(params=>{
      console.log(params);
      if(params){
        this.key=params.key;
        this.countryForm.patchValue(params);
        console.log(this.countryForm.value);
      }
    })
  }

}
