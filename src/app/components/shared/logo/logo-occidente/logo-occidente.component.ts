import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-occidente',
  templateUrl: './logo-occidente.component.html',
  styleUrls: ['./logo-occidente.component.css']
})
export class LogoOccidenteComponent implements OnInit {
  public date=new Date();
  constructor() { }

  ngOnInit() {
  }

}
