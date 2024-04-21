import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ifairs } from '../../model/fairs';

@Component({
  selector: 'app-fair-card',
  templateUrl: './fair-card.component.html',
  styleUrls: ['./fair-card.component.scss']
})
export class FairCardComponent implements OnInit {
  @Input() fairobj!: Ifairs
  selesectfair !:string
  @Output() fairidemit: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
  oncard(fairobj: any) {
    console.log(fairobj);
  }
  onacard() {
    this.fairidemit.emit(this.fairobj.fairId)
    this.selesectfair=this.fairobj.fairId
  }
}
