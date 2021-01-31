import {IVideoRepository} from "./IVideoRepository"
import {Asset} from "../Models/Asset"
import { injectable } from "inversify"

@injectable()
export class VideoCatalog implements IVideoRepository {
    private videoList : Asset[] = new Array(
        new Asset(100, "Frozen", 2010, 93),
        new Asset(200, "Soul", 2020, 100),
        new Asset(300, "Master", 2021, 179),
        new Asset(400, "Captain Marvel", 2019, 123),
        new Asset(500, "Parasite", 2019, 132),
    );

    get(): Asset[] {
        return this.videoList;
    }

    add(asset : Asset): number {
        return this.videoList.push(asset);
    }

    edit(id: number, asset: Asset): Asset {
        var targetIndex = this.videoList.findIndex((asset => asset.AssetId == id));

        console.log("targetIndex is : " + targetIndex);
        if(targetIndex > -1) {
            this.videoList[targetIndex].Title = asset.Title;
            this.videoList[targetIndex].Duration = asset.Duration;
            this.videoList[targetIndex].ReleaseYear = asset.ReleaseYear;
            return this.videoList[targetIndex];
        }
        return null!;
    }

    delete(id: number) : Asset {
        var targetIndex = this.videoList.findIndex((asset => asset.AssetId == id));
        return this.videoList.splice(targetIndex, 1)[0];
    }
}