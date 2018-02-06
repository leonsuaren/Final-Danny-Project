import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ReHpThumbnailOneComponent } from '../re-hp-thumbnail-one/re-hp-thumbnail-one.component';
import { ReHpThumbnailTwoComponent } from '../re-hp-thumbnail-two/re-hp-thumbnail-two.component';
import { ReHpThumbnailThreeComponent } from '../re-hp-thumbnail-three/re-hp-thumbnail-three.component';

@Component({
  selector: 'app-re-hp-thumbnail',
  templateUrl: './re-hp-thumbnail.component.html',
  styleUrls: ['./re-hp-thumbnail.component.scss']
})
export class ReHpThumbnailComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  onOpenDialogThumbnailOne(){
    
    this.dialog.open(ReHpThumbnailOneComponent)
    
}
onOpenDialogThumbnailTwo(){
    
  this.dialog.open(ReHpThumbnailTwoComponent)
  
}
onOpenDialogThumbnailThree(){
    
  this.dialog.open(ReHpThumbnailThreeComponent)
  
}

  ngOnInit() {
  }

}
