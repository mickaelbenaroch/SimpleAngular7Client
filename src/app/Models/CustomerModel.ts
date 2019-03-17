import { SubscriptionModel } from "./SubscriptionModel";

export class CustomerModel{

    public  FirstName: string;

    public  LastName :string;

    public  Address: string;

    public  IdentityNumber :string;

    public Subscriptions :SubscriptionModel[]= [];
}