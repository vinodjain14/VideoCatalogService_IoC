import { IVideoRepository } from "../Repositories/IVideoRepository";
import { Asset } from "../Models/Asset";
export declare class VideoCatalogService {
    private repository;
    constructor(repository: IVideoRepository);
    get(): Asset[];
    add(asset: Asset): number;
    edit(id: number, asset: Asset): Asset;
    delete(id: number): Asset;
}
