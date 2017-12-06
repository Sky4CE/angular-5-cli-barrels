import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import * as Core from './';
import * as CoreServices from './services';

@NgModule({
	imports: [
		CommonModule
	],
	exports: [
		HttpModule
	],
	providers: [
		// Core.Services.AuthService,
		CoreServices.AuthService // <<<--- THIS DECLARATION WOULD WORK WITH AOT
	]
})
export class CoreModule {
	// forRoot allows to override providers
	// https://angular.io/docs/ts/latest/guide/ngmodule.html#!#core-for-root
	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: CoreModule,
			providers: [

			]
		};
	}
	constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error('CoreModule is already loaded. Import it in the AppModule only');
		}
	}
}
