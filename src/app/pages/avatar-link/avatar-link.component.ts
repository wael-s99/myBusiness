import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-avatar-link',
  templateUrl: './avatar-link.component.html',
  styleUrls: ['./avatar-link.component.scss']
})
export class AvatarLinkComponent implements OnInit {
  avatars: {}[];

  constructor( public dialogRef: MatDialogRef<AvatarLinkComponent>,
               public firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.firebaseService.getAvatars()
    .subscribe(data => this.avatars = data);
  }

  close(avatar) {
    this.dialogRef.close(avatar);
  }

}
