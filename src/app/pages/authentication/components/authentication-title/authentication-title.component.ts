import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-authentication-title',
  templateUrl: './authentication-title.component.html',
  styles: []
})
export class AuthenticationTitleComponent implements OnInit {
  @Input()
  titleForm: string = '';

  constructor() { }

  ngOnInit() {
  }

}
