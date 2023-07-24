import { Component } from '@angular/core';
import { MovieServiceService } from 'src/app/comics/services/movie-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent {
  title = 'Comics';
  public listComics: any;
  public results: any[] = [];
  public loading = true;
  public searchText: any;

  constructor(private movieService: MovieServiceService) {
    this.getComics();
  }

  getComics() {
    this.movieService.getComics().subscribe((data: any) => {
      this.listComics = data.data;
      this.results = this.listComics.results;
      this.results.sort((a, b) => a.title.localeCompare(b.title));
      setTimeout(() => {
        this.loading = false;
      }, 1000);
      console.log('Data movies', this.listComics);
      console.log('Data results', this.results);
    })
  }
}
