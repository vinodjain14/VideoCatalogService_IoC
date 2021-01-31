import { Asset } from "../Models/Asset";
export interface IVideoRepository {
    get(): Asset[];
    add(asset: Asset): number;
    edit(id: number, asset: Asset): Asset;
    delete(id: number): Asset;
}
