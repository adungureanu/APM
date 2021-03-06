export interface IProduct{
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    startRating:number;
    imageURL: string;
     
}

export class Product implements IProduct{

    constructor(public productId: number,
                public productName: string,
                public productCode: string,
                public releaseDate: string,
                public price: number,
                public description: string,
                public startRating: number,
                public imageURL: string){

                }
    calculateDiscount(percent: number): number{
        return this.price - (this.price * percent / 100);
    }
}