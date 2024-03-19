export type Role = 'client' | 'owner' | 'delivery' | ''
export type UserInterface = {
    email: String;
    password: String;
    nickName: String;
    name: String;
    passwordCheck: String
    role?: Role,
}