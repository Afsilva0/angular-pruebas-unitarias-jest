import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculateComponent } from './calculate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CalculateRoutingModule } from './calculate.routing.module';

@NgModule({
  declarations: [CalculateComponent],
  imports: [CommonModule, ReactiveFormsModule, CalculateRoutingModule],
  bootstrap: [CalculateComponent],
})
export class CalculateModule {}
