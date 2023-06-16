import { Component } from '@angular/core';
import { HttpService } from '../service/http-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parq-managment',
  templateUrl: './parq-managment.component.html',
  styleUrls: ['./parq-managment.component.sass']
})
export class ParqManagmentComponent {
  constructor(private httpService: HttpService){}

  vehicleForm = new FormGroup({
    plate: new FormControl(""),
    electric: new FormControl(""),
    wheels: new FormControl(""),
    vehicleType: new FormControl("")
  })

  onSubmit() {
    console.log(this.vehicleForm.value);
    this.httpService.createVehicle(this.vehicleForm.value).subscribe((data:any) => {
      console.log(data);
    })
  }
}
