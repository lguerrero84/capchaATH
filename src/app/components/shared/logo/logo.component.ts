import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  public date=new Date();
   conplanOccidente:boolean;
  constructor() {
    this.conplanOccidente = false;
   }

  ngOnInit() {
    
  }

}
