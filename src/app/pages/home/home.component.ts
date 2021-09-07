import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tecnologias = [
    {icon: 'assets/images/dev/angular.svg', tooltip: 'Angular'},
    {icon: 'assets/images/dev/html.svg', tooltip: 'HTML'},
    {icon: 'assets/images/dev/css.svg', tooltip: 'CSS'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
