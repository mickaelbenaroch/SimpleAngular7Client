import { CustomerModel } from "./CustomerModel";

export class AuthModel{
        public  DoesExist: boolean

        public  Token :string;

        public  Message:string;

        public  customer: CustomerModel;
}