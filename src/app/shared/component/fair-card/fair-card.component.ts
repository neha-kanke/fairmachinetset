import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ifairs } from '../../model/fairs';

@Component({
  selector: 'app-fair-card',
  templateUrl: './fair-card.component.html',
  styleUrls: ['./fair-card.component.scss']
})
export class FairCardComponent implements OnInit {
  @Input() fairarr!: Array<Ifairs>
  selesectfair !:string
  @Output() fairidemit: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  onacard(fairId:string) {
    this.fairidemit.emit(fairId)
    this.selesectfair=fairId
  
  }
  
}
