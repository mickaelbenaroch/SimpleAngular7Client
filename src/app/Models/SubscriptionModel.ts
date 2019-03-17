import { PackageModel } from "./PackageModel";

export class SubscriptionModel{

    public  SubscriptionName: string;

    public  SubscriptionNumber : string;

    public  PackageList:PackageModel[] = [];
}