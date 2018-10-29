import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from '../auth.service';
import { auth } from '../firebase';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {

  uid = '';
  lang = '';

  constructor(private route: ActivatedRoute, private router: Router, private auth: AuthService) { 
    this.route.params.subscribe( params => {
      this.uid = params.id;
      this.lang = params.lang;
    });
 }

 ngOnInit() {
  this.auth.getCustomToken(this.uid).subscribe(res => {
    console.log("getting custom Token ++++++++", res);
    auth.signInWithCustomToken(res['token']).then(resp => {
      console.log("Custom Token Authorization success ++++++++++++++++", resp);
      // save the authentication status on localstorage and navigate to welcome
      this.router.navigateByUrl(`/welcome/${this.lang}`);
    }).catch(err => {
      console.log("Custom Token Authorization error +++++++++", err);
    });
  })
 }

}
