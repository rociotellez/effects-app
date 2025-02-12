import { Action, createReducer, on } from "@ngrx/store";
import { User } from "../../models/user.model";
import { loadUser, loadUserError, loadUserSuccess } from "../actions";

export interface UserState {
    id: string | null;
    user: User | null;
    loading: boolean;
    loaded: boolean;
    error: any;
}

export const userInitialState: UserState = {
    id: null,
    user: null,
    loading: false,
    loaded: false,
    error: null
};

const _userReducer = createReducer(userInitialState,
    on(loadUser, (state, { id }) => ({ 
        ...state, 
        id: id,
        loading: true 
    })),

    on(loadUserSuccess, (state, { user }) => ({
        ...state,
        loading: false,
        loaded: true,
        user: { ...user }
    })),
    
    on(loadUserError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    }))
);

export function userReducer(state: UserState, action: Action<string>) {
    return _userReducer(state, action);
}
