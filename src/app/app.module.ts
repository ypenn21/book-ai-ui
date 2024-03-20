import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component';
// Import other components and modules as needed

@NgModule({
  declarations: [
    AppComponent,
    // other components
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Include it in the imports array
    // other modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
