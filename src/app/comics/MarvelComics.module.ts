
import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MarvelComicsRoutingModule } from './MarvelComics-routing.module';
import { SeriesPageComponent } from './pages/series-page/series-page.component';
import { RouterModule } from '@angular/router';
import { PopupComponent } from './components/popup/popup.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    HomePageComponent,
    SearchPipe,
    NavBarComponent,
    SeriesPageComponent,
    PopupComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    MarvelComicsRoutingModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    HomePageComponent,
    SeriesPageComponent
  ],
  providers: [],
})
export class MarvelComicsModule { }
