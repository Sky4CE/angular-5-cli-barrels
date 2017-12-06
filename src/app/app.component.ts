import { Component } from '@angular/core';
import * as Core from './core';
import * as CoreServices from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    // private readonly authService: Core.Services.AuthService,
    private readonly authService: CoreServices.AuthService // <<<--- THIS DECLARATION WOULD WORK WITH AOT
) {
    this.authService.test();
}
  title = 'app';
}
