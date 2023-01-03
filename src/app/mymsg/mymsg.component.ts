import { Component, OnInit, OnChanges } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-mymsg',
  templateUrl: './mymsg.component.html',
  styleUrls: ['./mymsg.component.css']
})
export class MymsgComponent implements OnInit {
  showMessage!:number

  constructor(public message: MessageService) {
    
   }

  ngOnInit(): void {
    
  }

}
