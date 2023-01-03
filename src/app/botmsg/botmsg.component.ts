import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-botmsg',
  templateUrl: './botmsg.component.html',
  styleUrls: ['./botmsg.component.css']
})
export class BotmsgComponent implements OnInit {
  botMessage = 'How can i help you'

  constructor(public message: MessageService) { }

  ngOnInit(): void {
  }

}
