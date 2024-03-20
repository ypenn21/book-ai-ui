import { Component, OnInit } from '@angular/core';
import { AnalysisService } from './analysis.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './app.component.html',
  standalone: true
})
export class AppComponent implements OnInit {
  bookTitle = '';
  bookAuthor = '';
  keywords = '';
  analysisResults: any = null;

  constructor(private analysisService: AnalysisService) {}

  ngOnInit() {}

  submitAnalysis() {
    const bookData = {
      book: this.bookTitle,
      author: this.bookAuthor,
      keyWords: this.keywords.split(',')
    };

    this.analysisService.analyzeBook(bookData)
      .subscribe(results => {
        this.analysisResults = results;
      });
  }
}
