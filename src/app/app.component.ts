import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'SanguFinanceApp';
  ngOnInit(): void {}

}
