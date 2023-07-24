import { Component } from '@angular/core';
import { Comic } from '../../core/comics-interface';

interface MenuItem {
  title: string,
  route: string
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [
    `.bg-marvel {
      background-color: #EC1D24;
      font-family: action_manbold_italic;
      font-size: 18px
    }
    `
  ]
})
export class NavBarComponent {
  public ManuReactivo: MenuItem[] = [
    { title: 'Comics', route: './marvel/comics' },
    { title: 'Series', route: './marvel/series' },
  ]
}
