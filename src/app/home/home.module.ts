import {NgModule} from '@angular/core';
import {SharedModule} from '@sharedmodule/shared.module';

import {HomeComponent} from './components';
import {HomeRoutingModule} from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports:[
    SharedModule,
    HomeRoutingModule
  ],
  exports: []
})
export class HomeModule {}
