import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, CommonModule, TranslateModule],
  declarations: [LoaderComponent],
  exports: [LoaderComponent, MaterialModule, CommonModule, FlexLayoutModule, TranslateModule]
})
export class SharedModule {}
