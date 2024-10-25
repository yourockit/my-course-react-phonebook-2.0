import { PersistPartial } from "redux-persist/es/persistReducer";

export interface User {
  name: string | null;
  email: string | null;
}

export interface AuthState {
  user: User;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

export interface RootState {
  auth: AuthState & PersistPartial;
}
