import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faStore } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidnav',
  templateUrl: './sidnav.component.html',
  styleUrls: ['./sidnav.component.scss']
})
export class SidnavComponent implements OnInit {
  faStore = faStore;
  showFiller = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  navigateTo() {
    console.log('clicked');
    this.router.navigate(['/home']);
  }
}
