import { Component } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-login',
  imports: [MatInputModule, MatIcon, MatFabButton],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}
