// This file is the root module of the application
// It is the first module to be loaded when the app starts
// It is the only module that is bootstrapped
// It is the only module that is imported into the main.ts file
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [
    BrowserModule,
  ],
})

export class AppModule { }
