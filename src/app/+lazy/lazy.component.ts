import { Component } from '@angular/core';
import * as Core from '../core';
import * as CoreServices from '../core/services';

@Component({
    selector: 'app-lazy',
    templateUrl: './lazy.html'
})
export class LazyComponent {
    private test = 'test';
    constructor(
        private readonly authService: Core.Services.AuthService,
        // private readonly authService: CoreServices.AuthService // <<<--- THIS DECLARATION WOULD WORK WITH AOT
    ) {
        this.authService.test();
    }

}
