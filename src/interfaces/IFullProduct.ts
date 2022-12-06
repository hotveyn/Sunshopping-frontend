import ICategory from "@/interfaces/ICategory";
import IImage from "@/interfaces/IImage";

export default interface IFullProduct{
    id: number
    title:string,
    image: IImage,
    category: ICategory,
    images: IImage[],
    to_price: number,
    cost_price: number,
    unit: string,
    stock: number,
    hot: boolean,
    describe: string,
    code: string,
    created_at: string;
    updated_at: string;
}