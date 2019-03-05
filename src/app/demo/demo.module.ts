import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { MaterialModule } from '../shared/material.module';
// import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { FlexboxComponent } from './flexbox/flexbox.component';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule, FormsModule, MaterialModule
  ],
  declarations: [ButtonsComponent, FlexboxComponent]
})
export class DemoModule { }
