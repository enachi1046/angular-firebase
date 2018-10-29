import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TokenComponent } from './token/token.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: 'token/:id/:lang',
    component: TokenComponent
  },
  {
    path: 'welcome/:lang',
    component: WelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
