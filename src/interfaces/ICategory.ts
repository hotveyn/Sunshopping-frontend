import IProduct from "@/interfaces/IProduct";

export default interface ICategory {
    id: number;
    children?: IProduct[];
    hot: boolean;
    name: string;
    created_at: string;
    updated_at: string;
    parent_id: number;
}
