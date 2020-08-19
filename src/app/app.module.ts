import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule,MatInputModule,MatSelectModule,MatRadioModule,MatListModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';
import { NameFilterPipe } from './nameFilter.pipe';
import { MobileFilterPipe } from './mobileFilter.pipe';
import { CityFilterPipe } from './cityFilter.pipe';
import { RegisterComponent } from './register/register.component';
import { ServiceTypeFilterPipe } from './serviceTypeFilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    NameFilterPipe,
    MobileFilterPipe,
    CityFilterPipe,
    ServiceTypeFilterPipe,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatSelectModule,
    MatRadioModule,
    MatListModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
