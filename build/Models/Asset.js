"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asset = void 0;
class Asset {
    constructor(assetId, title, releaseYear, duration) {
        this.AssetId = assetId;
        this.Title = title;
        this.ReleaseYear = releaseYear;
        this.Duration = duration;
    }
}
exports.Asset = Asset;
