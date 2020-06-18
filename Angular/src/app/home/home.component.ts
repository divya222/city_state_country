import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  go_to_country(){
    this.router.navigate(['/country']);
  }
  go_to_state(){
    this.router.navigate(['/state']);
  }
  go_to_city(){
    this.router.navigate(['/city']);
  }
  go_to_continent(){
    this.router.navigate(['/continent']);
  }
  ngOnInit(): void {
  }

}
