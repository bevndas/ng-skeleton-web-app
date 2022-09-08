import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { HeaderComponent, SearchBarComponent, NoPageComponent } from './components';

@NgModule({
  declarations: [
    NoPageComponent,
    HeaderComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    HeaderComponent,
    SearchBarComponent,
    NoPageComponent
  ]
})
export class SharedModule {}
