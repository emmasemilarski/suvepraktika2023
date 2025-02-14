import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';
import { Observable } from 'rxjs';
import { Page } from '../../models/page';
import {Checkout} from "../../models/checkout";

@Component({
  selector: 'app-checkouts-list',
  templateUrl: './checkouts-list.component.html',
  styleUrls: ['./checkouts-list.component.scss']
})
export class CheckoutsListComponent implements OnInit {

  checkouts$!: Observable<Page<Checkout>>;

  constructor(
    private checkoutService: CheckoutService,
  ) {
  }

  ngOnInit(): Observable<Page<Checkout>> {
    this.checkouts$ = this.checkoutService.getCheckouts({});
    return this.checkouts$;
  }

  // Search bar was done with this tutorial: https://www.youtube.com/watch?v=vraUdaw5oes
  searchText: string = "";

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
  }

}
