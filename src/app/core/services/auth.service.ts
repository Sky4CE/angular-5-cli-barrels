import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Response, Headers, RequestOptions, RequestOptionsArgs, Http, ResponseContentType } from '@angular/http';

@Injectable()
export class AuthService {

	constructor(
		private readonly http: Http,
		private readonly router: Router,
		private readonly sanitizer: DomSanitizer
	) {
	}

	test() {
		console.log('test AuthService');
	}

}
