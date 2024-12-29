export default interface Product{
    id: number;
    Name: string;
    Price: number;
    Quantity: number;
    HasDiscount: boolean;
    Discount?: number;
}