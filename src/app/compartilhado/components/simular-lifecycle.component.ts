/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, filter, tap } from 'rxjs/operators';

@Component({
    template: ''
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export abstract class SimularLifecycle implements OnDestroy {

    private ngUnsubscribe: Subject<void> = new Subject();

    constructor(router: Router, route: ActivatedRoute) {
        router.events.pipe(
            takeUntil(this.ngUnsubscribe),
            filter(event => event instanceof NavigationEnd),
            filter(_ => this._isComponentActive(
                router.routerState.snapshot.root.pathFromRoot,
                route.snapshot.component
            ))
        ).subscribe(_ => this.onEnter());
    }

    private _isComponentActive(path: ActivatedRouteSnapshot[], component: any): boolean {
        let isActive = false;
        path.forEach((ss: ActivatedRouteSnapshot) => {
            if (ss.component === component) {
                isActive = true;
            } else {
                isActive = this._isComponentActive(ss.children, component);
            }
        });
        return isActive;
    }

    abstract onEnter(): void;

    public ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
