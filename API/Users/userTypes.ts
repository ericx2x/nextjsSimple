export type LoginCredentialsDTO = {
    email: string;
    password: string;
  };
  
export type AuthUser = {
    id: number;
    createdAt: number;
    email: string;
    password: string;
    displayName: string;
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: Date;
    role: string;
    disciplineId: number;
    isDisabled: boolean;
    mustChangePassword: boolean;
};
export type UserResponse = {
    data: {
        token: string;
        user: AuthUser;
    }
};