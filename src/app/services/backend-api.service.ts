import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  private mainCategoryList = [];
  constructor(private readonly http: HttpClient) {

    // creating observale
    let observe = Observable.create((obs: any) => {
      console.log('Text inside an observable');
      obs.next('Hello world!');
      obs.complete();
    })
    console.log('Before subscribing an Observable');
    observe.subscribe((message: any) => console.log(message));
    // end of creating and calling an observale

    // creating promise
    const promise = new Promise((resolve, reject) => {
      console.log('Text inside promise');
      resolve('Hello world!');
    });
    console.log('Before calling then method on Promise');
    promise.then(message => console.log(message));
    // end of creating and calling an promise
  }

  getJSON(): Observable<any> {
    return this.http.get("./../assets/responseData.json");
  }

  getMainCategory() {
    this.getJSON().subscribe(response => {
      console.log('response = ', response);
      this.mainCategoryList = response;
    });
  }

  getItemBySubCatId(id: any) {
    this.getJSON().subscribe(response => {
      console.log('response = ', response);
      this.mainCategoryList = response;
      if (this.mainCategoryList) {
        this.mainCategoryList.forEach(mainCat => {
          if (mainCat[id]) {
            return mainCat[id];
          } else {
            return "No items found";
          }
        });
      }
    });
  }

}
