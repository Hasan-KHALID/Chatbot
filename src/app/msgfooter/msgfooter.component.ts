import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-msgfooter',
  templateUrl: './msgfooter.component.html',
  styleUrls: ['./msgfooter.component.css']
})
export class MsgfooterComponent implements OnInit {

  enterMassage=''

  constructor(public mgs: MessageService) { }

  ngOnInit(): void {
  }
  onMassageType(){
    console.log(this.enterMassage)
    this.mgs.addMessage(this.enterMassage)
    this.enterMassage =''
    console.log(this.mgs.message)

  }

}
