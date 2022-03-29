import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UpcomingBill } from '../types';
import { Expense } from 'src/assets/shared/expense';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  constructor(private httpClient: HttpClient) {}

  loadExpenses() {
    return this.httpClient.get<Expense[]>('/api/expenses');
  }

  getExpense(id: string | null) {
    return this.httpClient.get<Expense>(`/api/expenses/${id}`);
  }

  loadUpcomingBills() {
    return this.httpClient.get<UpcomingBill[]>('/api/upcomingBills');
  }
}
