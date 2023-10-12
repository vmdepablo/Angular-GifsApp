import { Component, OnInit } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  constructor( private gifsService:GifService) { }

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }

}
