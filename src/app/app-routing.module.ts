import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsonPickerComponent } from './json-picker/json-picker.component';
import { ReplayMessageComponent } from './replay-message/replay-message.component';


const routes: Routes = [
  { path: 'picker', component: JsonPickerComponent, pathMatch: 'full'},
  { path: 'messages', component: ReplayMessageComponent},
  {
    path: '',
    redirectTo: '/picker',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
