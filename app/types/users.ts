export type User = {
    id: string,
    login: string,
    password: string,
    age: number,
    isDeleted: boolean,
}

export type UserDAL = Map<string, User>
