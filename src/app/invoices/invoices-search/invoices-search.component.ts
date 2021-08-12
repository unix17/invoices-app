import {
  ChangeDetectionStrategy,
  Component, EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-invoices-search',
  templateUrl: './invoices-search.component.html',
  styleUrls: ['./invoices-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoicesSearchComponent implements OnInit {
  @Output() public searchInvoice: EventEmitter<string> = new EventEmitter<string>();

  public searchIcon = faSearch;

  public searchControl: FormControl = new FormControl();

  public ngOnInit(): void {
    this.onInvoiceSearch();
  }

  public onInvoiceSearch(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap((invoiceNum: string) => this.searchInvoice.emit(invoiceNum)),
    ).subscribe();
  }
}
