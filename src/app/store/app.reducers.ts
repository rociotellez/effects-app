import { Action, ActionReducer, ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
    users: reducers.UsersState;
    user: reducers.UserState;
}

export const appReducers: ActionReducerMap<AppState> = {
    users: reducers.usersReducer as ActionReducer<reducers.UsersState, Action<string>>,
    user: reducers.userReducer as ActionReducer<reducers.UserState, Action<string>>
};