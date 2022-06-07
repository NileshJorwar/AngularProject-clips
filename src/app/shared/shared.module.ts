import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ModalComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class SharedModule { }
