import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculateComponent } from './calculate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CalculateRoutingModule } from './calculate.routing.module';
import { CalculateService } from 'src/app/core/service/calculate.service';

@NgModule({
  declarations: [CalculateComponent],
  imports: [CommonModule, ReactiveFormsModule, CalculateRoutingModule],
  providers: [CalculateService],
  bootstrap: [CalculateComponent],
})
export class CalculateModule {}
