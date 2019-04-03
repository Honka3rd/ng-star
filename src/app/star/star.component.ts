import { Component } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent{

  stared;
  className;

  constructor(){
    this.stared = false;
    this.className = "star outline icon";
  }

  onClick=()=>{
    this.stared = !this.stared;
    if(this.stared === true){
      this.className = "star icon";
    }else{
      this.className = "star outline icon";
    }
  }

}
