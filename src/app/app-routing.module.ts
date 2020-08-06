import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { UnitsComponent } from './units/units.component';
import { UnitComponent } from './unit/unit.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'units/:id',component: UnitsComponent},
  {path: 'units/:unit/:id',component: UnitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
