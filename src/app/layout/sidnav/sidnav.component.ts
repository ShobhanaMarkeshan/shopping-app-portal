import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { BackendApiService } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-sidnav',
  templateUrl: './sidnav.component.html',
  styleUrls: ['./sidnav.component.scss']
})
export class SidnavComponent implements OnInit {
  faStore = faStore;
  showFiller = false;
  panelOpenState = false;
  response = [];
  constructor(
    private readonly router: Router,
    private readonly api: BackendApiService
  ) {
    console.log(this.response.length);
  }

  ngOnInit(): void {
    this.api.getJSON().subscribe(data => {
      this.response = data;
      console.log(this.response.length);
      console.log("in sidenav ", data);
    });
  }

  viewItem(subCat: any) {
    console.log('clicked');
    this.router.navigate(['/item/', subCat['id']]);
  }
}
