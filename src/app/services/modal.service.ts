import { Injectable } from '@angular/core';

interface IModal{
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = [];
  
  constructor() { }

  register(id: string){
      this.modals.push({
        id, visible: false
      });
  }

  isModalOpen(id: string) : boolean
  {
    // Boolean(this.modals.find(elememt => elememt.id === id)?.visible);
    return !!this.modals.find(elememt => elememt.id === id)?.visible;
  }

  toggleModal(id: string){
    const modal  = this.modals.find(elememt => elememt.id === id);
    if(modal){
      modal.visible = !modal.visible;
    }
  }
}
