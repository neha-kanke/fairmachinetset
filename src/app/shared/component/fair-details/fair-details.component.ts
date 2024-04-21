import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ifairs } from '../../model/fairs';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss']
})
export class FairDetailsComponent implements OnInit {
@Input() fairobj!:Ifairs
  constructor() { }

  ngOnInit(): void {
    

    

}
}
