import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

	items: FirebaseListObservable<any>;
	name:any;
	msgVal:string = '';
	constructor(public angularFire:AngularFire) {
		this.items =	angularFire.database.list('/messages', {
			query:{
				limitToLast:50
			}
		})

		this.angularFire.auth.subscribe(auth => {
			if (auth) {
				this.name = auth;
			}
		})
	}

  login(){
  	this.name = "ari fakhri"
  	// this.angularFire.auth.login({
  	// 	provider: AuthProviders.Anonymous,
  	// 	method: AuthMethods.Anonymous
  	// });
  	console.log("mantap pisan")
  }

  Send(desc:string){
  	this.items.push({message:desc});
  	this.msgVal = '';
  }
}
