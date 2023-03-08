import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {

  @Input() img: string = '';
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();

  imgDefault : string = 'https://www.m2crowd.com/core/i/placeholder.png';

  constructor() { }

  ngOnInit(): void {
    console.log(this.img);

  }

  imgError() {
    this.img = this.imgDefault;
  }
  loadedImage() {
    this.loaded.emit(this.img);
  }
}
