
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface ServiceInput {
    name: string;
    buildCommand: string;
    publishDirectory: string;
    branchName: string;
}

export interface UserInput {
    name: string;
    githubName: string;
    email: string;
}

export interface IMutation {
    createService(userId: string, serviceInput?: ServiceInput): Service | Promise<Service>;
    deployService(id: string): boolean | Promise<boolean>;
    createUser(userInput?: UserInput): User | Promise<User>;
}

export interface Service {
    id: string;
    name: string;
    buildCommand: string;
    publishDirectory: string;
    branchName: string;
}

export interface IQuery {
    user(id: string): User | Promise<User>;
    users(): User[] | Promise<User[]>;
}

export interface User {
    id: string;
    name: string;
    githubName: string;
    email: string;
    services: Service[];
}
