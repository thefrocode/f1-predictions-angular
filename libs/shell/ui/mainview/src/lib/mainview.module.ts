import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainviewComponent } from './mainview/mainview.component';
import { RouterModule} from '@angular/router'
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [MainviewComponent],
  exports: [MainviewComponent]
})
export class MainviewModule {}
