import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';
import * as usersActions from '../actions/users.actions';

@Injectable()
export class UsersEffects {

    constructor(
        private actions$: Actions,
        private userService: UserService
    ){ }

    loadUsers$ = createEffect(
        () => this.actions$.pipe(
            ofType(usersActions.loadUsers),
            mergeMap(
                () => {
                    return this.userService.getUsers()
                        .pipe(
                            map(users => {
                                return usersActions.loadUsersSuccess({ users });
                            }),
                            catchError(error => {
                                return of(usersActions.loadUsersError({ payload: error }));
                            })
                        );
                }
            )
        )
    );
}