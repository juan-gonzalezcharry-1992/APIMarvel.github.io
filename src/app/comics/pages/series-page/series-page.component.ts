import { Component } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../components/popup/popup.component';

@Component({
  selector: 'app-series-page',
  templateUrl: './series-page.component.html',
  styleUrls: ['./series-page.component.scss']
})
export class SeriesPageComponent {
  title = 'Comics';
  public listSeries: any;
  public results: any[] = [];
  public loading = true;
  public searchText: any;

  constructor(private SeriesMarvel: MovieServiceService, private dialog: MatDialog) {
    this.getSeries();
  }



  getSeries() {
    this.SeriesMarvel.getSeries().subscribe((data: any) => {
      this.listSeries = data.data;
      this.results = this.listSeries.results;
      this.results.sort((a, b) => a.title.localeCompare(b.title));
      setTimeout(() => {
        this.loading = false;
      }, 1000);
      console.log('Data movies', this.listSeries);
      console.log('Data results', this.results);
    })
  }


  AbrirPop() {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: this.results,
    });
    console.log("Dialogo", dialogRef)
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log({ result });

      this.results;
    });
  }
}
