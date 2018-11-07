import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';

const routes: Route[] = [
  {
    path: 'signin',
    component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
