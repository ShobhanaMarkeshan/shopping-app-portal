import { Component, OnInit } from '@angular/core';
import { faStore, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faStore = faStore;
  loginIcon = faSignInAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
