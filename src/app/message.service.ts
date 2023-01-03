import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message:string[]=[]
  

  constructor() { }

 

  async addMessage(message:string){
    this.message.push(message)
    this.message.push('how can I help you')
    
    
  
  }
}
