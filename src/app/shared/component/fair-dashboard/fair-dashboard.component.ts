import { Component, OnInit } from '@angular/core';
import { Ifairs } from '../../model/fairs';
import { fairsArr } from '../../const/fairs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fair-dashboard',
  templateUrl: './fair-dashboard.component.html',
  styleUrls: ['./fair-dashboard.component.scss']
})
export class FairDashboardComponent implements OnInit {
  fairobj !:Ifairs
fairarr:Array<Ifairs>=fairsArr
  constructor() { }

  ngOnInit(): void {
    this.fairobj=fairsArr[0]
  }
  onfaird(id:string){
    this.fairobj=this.fairarr.find((fair:Ifairs)=>fair.fairId===id)!
    console.log(this.fairobj);
    
    
    
  }

}