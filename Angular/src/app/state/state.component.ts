import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state.service';
import { CountryService } from '../country.service';
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  states :any =[];

  constructor(private router:Router,private stateSer:StateService,private countrySer:CountryService) { }
  getstates(){
    this.stateSer.getAll().subscribe(success=>{
      console.log(success);
      this.states=success;
      this.states.forEach(element => {
        console.log(element)
        if(element.countryid)
        {
        this.countrySer.getById(element.countryid).subscribe(success=>{
          console.log(success);
          let cntry:any=success;
          element.cname=cntry.name;
        })
      }
      });
    
    },error=>{
      console.log(error);
    }
    )
  }
  edit(s){
    this.router.navigate(['/addstate'],{queryParams:s});
  }
  delete(s){
    this.stateSer.delete(s.key).subscribe(success=>
      {
        this.getstates();
      })
    }
  addstate(){
    this.router.navigate(['/addstate']);
  }
  go_to_home(){
    this.router.navigate(['/home']);
  }
  ngOnInit():void {
    this.getstates();
  }

}