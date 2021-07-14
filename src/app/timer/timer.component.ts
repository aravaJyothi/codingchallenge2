import { Component, OnInit,Input } from '@angular/core';
import { Subscription,interval } from 'rxjs';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  subscription!:Subscription; 
  
  curr_date=new Date();
  @Input() target_date!:Date;

  numOfMilliSecs = 1000;
  numOfHrs = 24;
  numOfMins = 60;
  numOfSecs = 60;
  timeDiff=0;
  secsDiff!:Number;
  hoursDiff!:Number;
  minsDiff!:Number;
  daysDiff!:Number;
  secondsToDday=0;
  minutesToDday=0;
  hoursToDday=0;
  daysToDday=0;

  constructor() { }

  ngOnInit(): void {
    this.subscription= interval(1000).subscribe(val=>{this.findTimer(); });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
   findTimer(){
     this.timeDiff = this.target_date.getTime()-new Date().getTime();
     this.secsDiff = Math.floor((this.timeDiff)/this.numOfMilliSecs%this.numOfSecs);
     this.minsDiff = Math.floor((this.timeDiff)/(this.numOfMilliSecs*this.numOfMins)%this.numOfSecs);
     this.hoursDiff = Math.floor((this.timeDiff)/(this.numOfMilliSecs*this.numOfMins*this.numOfSecs)%this.numOfHrs);
     this.daysDiff = Math.floor((this.timeDiff)/(this.numOfMilliSecs*this.numOfMins*this.numOfSecs*this.numOfHrs));

     this.daysDiff = this.padZeroes(this.daysDiff);
     this.hoursDiff = this.padZeroes(this.hoursDiff);
     this.minsDiff = this.padZeroes(this.minsDiff);
     this.secsDiff = this.padZeroes(this.secsDiff);
    }
    padZeroes(x:any){
       return (x < 10) ? ("0" + x) : x;
    }


   
}
