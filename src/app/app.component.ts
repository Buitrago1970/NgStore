import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgFather: string = 'https://www.w3schools.com/w3css/img_lights.jpg';

  constructor() { }

  loadedImage( img: string) {
    console.log('loadedImage padre', img);
  }
}
