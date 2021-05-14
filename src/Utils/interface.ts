export interface State {
  islogin: boolean;
}
export type Action = {
  type: "SET_LOGIN" | "SET_LOGOUT";
};

export interface StateProviderProps {
  children: React.ReactNode;
}
