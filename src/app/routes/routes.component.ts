import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {

  response: any;
  constructor(
    private api: BackendApiService
  ) { }

  ngOnInit(): void {
    this.api.getJSON().subscribe(data => {
      this.response = data;
      console.log(data);

    });
  }

}
