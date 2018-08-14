import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  query: {
    onDate: {
      year: number,
      month: number,
      day: number
    }
  }

  constructor(
    private notification: ToastrService
  ) {}

  ngOnInit(): void {
    console.log(`Initialized on ${moment().toISOString()}`);
    this.query = { onDate: null };
    setTimeout(() => this.notification.success('Hey, did you see my pop, Clippy?', 'It has notifications too!'), 1000);
  }

}
