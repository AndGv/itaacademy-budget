import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExpensesService } from '../services/expenses.service';
import { UpcomingBill } from '../types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  bills$: Observable<UpcomingBill[]> = of([]);
  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {
    this.bills$ = this.expensesService.loadUpcomingBills();
  }
}
