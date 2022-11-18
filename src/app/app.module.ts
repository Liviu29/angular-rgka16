import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LogComponent } from './log-component/log.component';
import { ListComponent } from './list-component/list.component';
import { KioskService } from './servicies/kiosk.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [KioskService],
  declarations: [AppComponent, HelloComponent, LogComponent, ListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
