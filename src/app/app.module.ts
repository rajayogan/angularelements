import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { createCustomElement } from '@angular/elements';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NewsSignupComponent } from './news-signup/news-signup.component';

  const config = {
    apiKey: "<yourapikeyhere>",
    authDomain: "<yourauthDomainhere>",
    databaseURL: "<yourdatabaseURLhere>",
    projectId: "<yourprojectIdhere>",
    storageBucket: "<storageBuckethere>",
    messagingSenderId: "<messagingSenderIdhere>"
  }


@NgModule({
  declarations: [
    NewsSignupComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    FormsModule
  ],
  entryComponents: [
    NewsSignupComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { 
  constructor(private injector: Injector) { }
  
  ngDoBootstrap() {
    const element = createCustomElement(NewsSignupComponent, { injector: this.injector });
    customElements.define('app-news-signup', element);
  }
}
