import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-authentication-link',
  templateUrl: './authentication-link.component.html',
  styles: []
})
export class AuthenticationLinkComponent implements OnInit {
  @Input()
  name: string = '';

  constructor() { }

  ngOnInit() {
  }

}
