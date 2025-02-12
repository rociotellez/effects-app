import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';
import * as usersActions from '../actions';

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private userService: UserService
    ){ }

    loadUser$ = createEffect(
        () => this.actions$.pipe(
            ofType(usersActions.loadUser),
            mergeMap(
                ( action ) => {
                    return this.userService.getUserById( action.id )
                        .pipe(
                            map(user => {
                                return usersActions.loadUserSuccess({ user });
                            }),
                            catchError(error => {
                                return of(usersActions.loadUserError({ payload: error }));
                            })
                        );
                }
            )
        )
    );
}