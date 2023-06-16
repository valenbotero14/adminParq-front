import { Component } from '@angular/core';
import { HttpService } from '../service/http-service.service';

@Component({
  selector: 'app-parq-status',
  templateUrl: './parq-status.component.html',
  styleUrls: ['./parq-status.component.sass']
})
export class ParqStatusComponent {
  message = "";
  code = "";
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getStatus();
  }

  getStatus() {
    this.httpService.getStatus().subscribe((data: any) => {
      console.log(data);
      this.message = data.message;
      this.code = data.code;
    });

  }
}
