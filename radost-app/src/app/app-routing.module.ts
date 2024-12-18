import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorComponent } from './core/error/error.component';


const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'/home'},
  {path: 'home', component: HomeComponent},
  {path: 'auth',
    loadChildren: () => import('./user/user.module').then((module) => module.UserModule)
  },
  {path: 'about', component: AboutComponent},
  {path: 'error', component: ErrorComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule],
})
export class AppRoutingModule { }
