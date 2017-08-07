import {IProduct} from './product';

export interface IProduct{
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: Date;
    price: number;
    calculateDiscount(percent: number): number;  
}