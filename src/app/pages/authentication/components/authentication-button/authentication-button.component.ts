import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-authentication-button',
  templateUrl: './authentication-button.component.html'
})
export class AuthenticationButtonComponent implements OnInit {
  @Input()
  name: string = '';

  constructor() { }

  ngOnInit() {
  }

}
