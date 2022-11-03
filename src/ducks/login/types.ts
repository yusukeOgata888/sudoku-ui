export type Users = {
  isSignedIn: boolean;
  userId: string;
  userName: string;
};

export interface UserState {
  userInfo: Users;
}
