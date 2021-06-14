import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {User} from '../models';
import {Router} from '@angular/router';
import {routes} from '../../../consts';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public routers: typeof routes = routes;
    private readonly AUTH_ENDPOINT = '/auth';

    constructor(private router: Router,
                private http: HttpClient) {
    }

    public login(authCred): void {
        this.http.post(this.AUTH_ENDPOINT, authCred, {observe: 'response'}).subscribe(res => {
            console.log(res);
            console.log(res.headers);
            console.log(res.headers.get('Authorization'));
            console.log(res.status);
            if (res.status === 200) {
                localStorage.setItem('token', res.headers.get('Authorization'));
                this.router.navigate([this.routers.DASHBOARD]).then();

            }
        });

    }

    public sign(): void {
        localStorage.setItem('token', 'token');
    }

    public signOut(): void {
        localStorage.removeItem('token');
    }

    public getUser(): Observable<User> {
        return of({
            name: 'John',
            lastName: 'Smith'
        });
    }
}
