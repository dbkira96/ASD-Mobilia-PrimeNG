import { Identifiers } from "@angular/compiler";

export class Invoice {
    id: number;
    order_id: number;
    typeDocument: string;
    documentNumber: number;
    documentDate: Date;
    transmissionAddress: string;
    causal: string;  
    userName: string;
    userCF: string;
    userAddress: string;
    userCap: number;
    userCity: string;
    userProvince: string;
    vatCollectability: string;
    additionalCosts: string;
    stampData: string;
    discount: number;
    totalTaxable: number;
    totalTaxes: number;
    totalDocument: number;
    methodPayment: string;
    statusPayment: string;
    iban: string;
    bankName: string;
    expirationDate: Date;
    netToPay: number;

}