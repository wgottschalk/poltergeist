
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface UserInput {
    name: string;
    githubName: string;
    email: string;
}

export interface IMutation {
    createUser(userInput?: UserInput): User | Promise<User>;
}

export interface IQuery {
    user(id: number): User | Promise<User>;
}

export interface Team {
    id: number;
    name: string;
    mailingGroup: string;
}

export interface User {
    id: number;
    name: string;
    githubName: string;
    email: string;
    teams?: Team[];
}
