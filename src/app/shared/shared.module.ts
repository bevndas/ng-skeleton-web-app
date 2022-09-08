import {NgModule} from '@angular/core';
import {NoPageComponent} from '@sharedmodule/components';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    NoPageComponent,
    HeaderComponent
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
    NoPageComponent
  ]
})
export class SharedModule {}
