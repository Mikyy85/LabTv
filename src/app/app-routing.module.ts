import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PopupMovieComponent } from './popup-movie/popup-movie.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: '',
    component: PopupMovieComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
