import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from '../services/modal.service';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';



@NgModule({
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ModalComponent,
    TabsContainerComponent,
    TabComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  // providers: [ModalService] //array of services

})
export class SharedModule { }
