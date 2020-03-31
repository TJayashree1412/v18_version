import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-notice',
  templateUrl: './privacy-notice.component.html',
  styleUrls: ['./privacy-notice.component.css']
})
export class PrivacyNoticeComponent implements OnInit {

  constructor(private router:Router ) {}

  ngOnInit(): void {
  }

  privacyNotice(){
    this.router.navigate(['/Home']);
  }
}
