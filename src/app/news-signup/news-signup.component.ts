import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
@Component({
  selector: 'app-news-signup',
  templateUrl: './news-signup.component.html',
  styleUrls: ['./news-signup.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class NewsSignupComponent implements OnInit {

  email: string;

  constructor(private afs: AngularFirestore) {
    afs.firestore.settings({ timestampsInSnapshots: true });
   }

  ngOnInit() {
  }

  subscribe() {
    this.afs.collection('emails').add({
      emailid: this.email
    }).then(() => {
      console.log('added');
    })
  }



}
