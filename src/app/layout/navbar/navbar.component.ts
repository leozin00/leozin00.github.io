import { Component, OnInit } from '@angular/core';
import { faAngular, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  iconGithub = faGithub;
  iconLinkedin = faLinkedin;
  iconInstagram = faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}
