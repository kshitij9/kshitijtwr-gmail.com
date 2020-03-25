import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsonPickerComponent } from './json-picker/json-picker.component';
import { ReplayMessageComponent } from './replay-message/replay-message.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatSliderModule} from '@angular/material/slider';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { TimeFilterPipe } from './replay-message/time-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    JsonPickerComponent,
    ReplayMessageComponent,
    MessagesComponent,
    TimeFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSliderModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    PortalModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
