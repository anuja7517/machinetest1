import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StdformComponent } from './shared/components/stdform/stdform.component';
import { StdtableComponent } from './shared/components/stdtable/stdtable.component';
import { StudformComponent } from './shared/components/studform/studform.component';
import { StudtableComponent } from './shared/components/studtable/studtable.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StdformComponent,
    StdtableComponent,
    StudformComponent,
    StudtableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
