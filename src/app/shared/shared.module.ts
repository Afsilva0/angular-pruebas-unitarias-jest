import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveEspaceTextPipe } from './pipe/remove-espace-text.pipe';

@NgModule({
  declarations: [RemoveEspaceTextPipe],
  imports: [CommonModule],
})
export class SharedModule {}
