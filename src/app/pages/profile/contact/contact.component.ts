import { Component, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  
  @ViewChild('phonePanel') phonePanel: MatExpansionPanel;
  @ViewChild('emailPanel') emailPanel: MatExpansionPanel;
  @ViewChild('addressPanel') addressPanel: MatExpansionPanel;

  phoneList = ['Phone 1', 'Phone 2', 'Phone 3', 'Phone 4'];
  emailList = ['Email 1', 'Email 2', 'Email 3', 'Email 4'];
  addressList = ['Address 1', 'Address 2', 'Address 3', 'Address 4'];

  constructor() { }

  ngOnInit(): void {
  }

  openPanel(panel: MatExpansionPanel) {
    panel.open();
  }

}
