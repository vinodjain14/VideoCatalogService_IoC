import {IVideoRepository} from "../Repositories/IVideoRepository"
import {Asset} from "../Models/Asset"

export class VideoCatalogService{
    private repository: IVideoRepository;

    constructor(repository: IVideoRepository) {
        this.repository = repository;
    }

    get(): Asset[] {
        return this.repository.get();
    }

    add(asset: Asset): number {
        return this.repository.add(asset);
    }

    edit(id: number, asset: Asset): Asset {
        return this.repository.edit(id, asset);
    }

    delete(id: number): Asset {
        return this.repository.delete(id);
    }
}



