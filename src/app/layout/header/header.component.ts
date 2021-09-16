import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faStore, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faStore = faStore;
  loginIcon = faSignInAlt;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
