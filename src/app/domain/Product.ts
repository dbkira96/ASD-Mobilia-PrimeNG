import { Place } from "./Place";
import { Subcategory } from "./Subcategory";
import { Vendor } from "./Vendor";

export class Product {
    id?: number;
    name?: string;
    brand?: string;
    price?: number;
    color?: string;
    size?: string;
    subcategory?: Subcategory;
    vendor?: Vendor;
    place?: Place;
    stock?: number;

}