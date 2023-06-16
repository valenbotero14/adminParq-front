import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParqManagmentComponent } from './parq-managment/parq-managment.component';
import { ParqStatusComponent } from './parq-status/parq-status.component';
import { ParqNotFoundComponent } from './parq-not-found/parq-not-found.component';

const routes: Routes = [
  { path: 'parq', component: ParqManagmentComponent},
  { path: 'status', component: ParqStatusComponent },
  { path: '', pathMatch: 'full', redirectTo: '/status' },
  { path: '**', component: ParqNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
