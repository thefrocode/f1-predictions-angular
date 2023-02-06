import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MainviewModule } from '@f1-predictions-angular/shell/ui/mainview';
import { TopbarModule } from '@f1-predictions-angular/shell/ui/topbar';

@NgModule({
  imports: [CommonModule, MainviewModule, TopbarModule],
  declarations: [LayoutComponent ],
  exports: [LayoutComponent]
})
export class LayoutModule {}
