import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { ReContactFormComponent } from '../re-contact-form/re-contact-form.component';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private dialog:MatDialog) { }


  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(ReContactFormComponent);
  }

}
