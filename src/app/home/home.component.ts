import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  targetDate = new Date('July 21 2021 17:59:00');
  constructor() { }

  ngOnInit(): void {
  }

}
