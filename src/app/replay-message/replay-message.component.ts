import { Component, OnInit, Inject } from '@angular/core';
import { messageservice } from './services/ReplayMessage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-replay-message',
  templateUrl: './replay-message.component.html',
  styleUrls: ['./replay-message.component.scss']
})
export class ReplayMessageComponent implements OnInit {
  messages: any;
  fileName: { [k: string]: any; };
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  selectedTimestamp;
  constructor(@Inject(messageservice)private messageservice: messageservice,
              @Inject(Router)private router: Router) { 
                this.fileName = this.router.getCurrentNavigation().extras.state;
              }

  ngOnInit(): void {
    //Get all messages from the JSON
    this.messageservice.getAllMessages(this.fileName.file.name).subscribe(data => {
      this.messages = data.data;
    })
  }

  /**
   * Desc:: set the timestamp for filtering the messages
   * @param value 
   */
  timeStampChanged(value) {
    this.selectedTimestamp = value.value; 
  }

}
