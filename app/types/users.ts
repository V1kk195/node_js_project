export type User = {
    id: string,
    login: string,
    password: string,
    age: number,
    isDeleted: boolean,
}

export type UserCreateRequestBody = Omit<User, 'id' | 'isDeleted'>

export type UsersDAL = Map<string, User>
