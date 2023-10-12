import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  //searchTag( newTag: string ){
  searchTag(){
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag( newTag );

    this.tagInput.nativeElement.value = '';

  }
  constructor( private gifsService: GifService){

  }
}
