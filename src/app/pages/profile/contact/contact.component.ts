import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  phoneFormGroup!: FormGroup;
  emailFormGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.buildPhoneForm()
    this.buildEmailForm()
  }

  buildPhoneForm() {
    this.phoneFormGroup = new FormGroup({
      idcompany_contact_phone: new FormControl(),
      phone_number: new FormControl(),
      phone_type: new FormControl("2"),
      usFormat: new FormControl(true),
      isprimary: new FormControl(true),

    });
  }

  buildEmailForm() {
    this.emailFormGroup = new FormGroup({
      idcompany_contact_email_address: new FormControl(),
      email_address: new FormControl('', Validators.email),
      isprimary: new FormControl(true),
    });
  }

  openPanel(panel: MatExpansionPanel) {
    panel.open();
  }

}
