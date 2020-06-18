import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContinentService } from  '../continent.service';
@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.css']
})
export class ContinentComponent implements OnInit {
  continent:any = [{"name":"Asia"},
  {"name":"America"},
  {"name":"europe"},
  {"name":"Europe"}];
  constructor(private router:Router,private continentSer: ContinentService) { }
  getcontinents(){
    this.continentSer.getAll().subscribe(success=>{
      console.log(success);
      this.continent = success;
    },error=>{
      console.log(error);
    })
  }
  ngOnInit(){
    this.getcontinents();
  }
  go_to_home(){
    this.router.navigate(['/home']);
  }
}
