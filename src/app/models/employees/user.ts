export class User {
    id: number = 0;
    username: string = "";
    email: string = "";
    registration_number: number = 0;
    role: string = "USER";
    project: number = 0;
    is_active: boolean = false;
    is_staff?: boolean = false;
    is_superuser: boolean = false; 
    created_at: string = ""; 
    updated_at: string = "";
}
