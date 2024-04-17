export interface SignUpRequest {
    agreement: boolean;
    company: string;
    email: string;
    firstName: string;
    lastName: string;
    ownership: number;
    password: string;
    subscription?: boolean;
    surname?: string;
}