import { Component } from '@angular/core';
import { starArgs } from './star/star.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title:'Star',
    isFavourite:true
  }

  onFavouriteChanged(isStared:starArgs){
    console.log('Stared:', isStared);
  }
}
