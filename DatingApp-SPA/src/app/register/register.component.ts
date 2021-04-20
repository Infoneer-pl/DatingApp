import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private AuthService: AuthService) { }

  ngOnInit() {
  }

  register() {
    console.log(this.model);
    this.AuthService.register(this.model).subscribe(() => {
      console.log('registration successful');
    },
    error => {
      console.log(error);
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('registration cancelled');
  }
  
}
