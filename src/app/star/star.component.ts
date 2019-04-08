import { Component,Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class StarComponent{

  @Input('stared') stared:boolean;
  className:string;
  @Output() change = new EventEmitter();

  constructor(){
    if(this.stared == false)
      this.className = "star outline icon";
    else
      this.className = "star icon"
  }

  onClick=()=>{
    this.stared = !this.stared;
    this.change.emit({state: this.stared});
    if(this.stared === true){
      this.className = "star icon";
    }else{
      this.className = "star outline icon";
    }
  }
}

export interface starArgs{
  state: boolean;
}