export type Role = 'client' | 'owner' | 'delivery' | ''
export type UserInterface = {
    email: String;
    password: String;
    role: Role,
}