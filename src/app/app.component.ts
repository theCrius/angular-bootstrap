import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private notification: ToastrService
  ) {}

  title: string;
  timestamp: moment.Moment;

  ngOnInit(): void {
    setTimeout(() => this.notification.success('Hey, did you see my pop, Clippy?', 'It has notifications too!'), 1000);
  }
}
