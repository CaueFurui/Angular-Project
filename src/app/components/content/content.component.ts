import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoArrayEx(){
    this.router.navigateByUrl('/arrayEx')
  }
  gotoFrontEndEx(){
    this.router.navigateByUrl('/frontEndEx')
  }
  gotoLogicEx(){
    this.router.navigateByUrl('/logicEx')
  }
}
