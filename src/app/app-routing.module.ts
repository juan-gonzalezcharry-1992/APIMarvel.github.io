import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'marvel',
    loadChildren: () => import('./comics/MarvelComics.module').then(m => m.MarvelComicsModule),
  },
  {
    path:'**',
    redirectTo:'marvel'
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
