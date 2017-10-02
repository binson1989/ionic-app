import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from "../detail/detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[];

  constructor(public navCtrl: NavController) {
    this.items = [];
    for (var index = 0; index < 100; index++) {
      this.items.push({
        text: 'Item ' + index,
        id: index
      });
    }
  }

  itemSelected(item): void {
    this.navCtrl.push(DetailPage, { item: item });
  }
}
