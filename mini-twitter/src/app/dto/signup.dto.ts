export class SignUpDto{
    username : string;
    email : string;
    password : string;
    code : string;

    constructor(username : string, password : string, email : string){
        this.username = username;
        this.email = email;
        this.password = password;
        this.code ="UDEMYANDROID";
    }
}