import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { StateComponent } from './state/state.component';
import { CountryComponent } from './country/country.component';

import{ RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';

import {HttpClientModule} from '@angular/common/http';
import { AddcountryComponent } from './addcountry/addcountry.component';
import { ContinentComponent } from './continent/continent.component';
import { AddcityComponent } from './addcity/addcity.component';
import { AddstateComponent } from './addstate/addstate.component';
import { MysortPipe } from './mysort.pipe';
var routes:Routes=[
  { path :'city',component: CityComponent},
  { path:'state',component: StateComponent},
  {path:'country',component:CountryComponent},
  {path:'home',component:HomeComponent},
  { path:'continent',component:ContinentComponent},
  {path:'',redirectTo : 'home',pathMatch:'full'},
  { path:'add',component:AddcountryComponent},
  { path:'addcity',component:AddcityComponent},
  {path:'addstate',component:AddstateComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    StateComponent,
    CountryComponent,
    HomeComponent,
    ContinentComponent,
    AddcountryComponent,
    ContinentComponent,
    AddcityComponent,
    AddstateComponent,
    MysortPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
