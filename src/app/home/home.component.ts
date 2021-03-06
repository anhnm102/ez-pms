import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: string;
  isLoading: boolean;

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.isLoading = true;
    this.quoteService
      .getRandomQuote()
      .pipe(
        finalize(() => {
          setTimeout(() => (this.isLoading = false), 1000);
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }
}
