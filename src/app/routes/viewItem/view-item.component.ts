import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendApiService } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent implements OnInit {

  subCatId;
  items = [];
  constructor(
    private api: BackendApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      console.log('ide =>', data);
      this.subCatId = data['id'];
      this.getItems();
    })
  }

  getItems() {
    this.api.getJSON().subscribe(response => {
      response.forEach((mainCat) => {
        mainCat['sub-category'].forEach(subCat => {
          if (subCat['id'] == this.subCatId) {
            console.log('subCat => ', subCat['category-item']);
            this.items = subCat['category-item'];
          }
        });
      });
    });
  }
}
