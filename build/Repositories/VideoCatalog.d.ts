import { IVideoRepository } from "./IVideoRepository";
import { Asset } from "../Models/Asset";
export declare class VideoCatalog implements IVideoRepository {
    private videoList;
    get(): Asset[];
    add(asset: Asset): number;
    edit(id: number, asset: Asset): Asset;
    delete(id: number): Asset;
}
