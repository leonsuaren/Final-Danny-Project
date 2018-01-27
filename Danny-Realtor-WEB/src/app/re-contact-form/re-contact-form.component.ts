import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { ContactComponent } from '../contact/contact.component';



@Component({
  selector: 'app-re-contact-form',
  templateUrl: './re-contact-form.component.html',
  styleUrls: ['./re-contact-form.component.css']
})

export class ReContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
