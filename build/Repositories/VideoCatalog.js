"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoCatalog = void 0;
const tslib_1 = require("tslib");
const Asset_1 = require("../Models/Asset");
const inversify_1 = require("inversify");
let VideoCatalog = class VideoCatalog {
    constructor() {
        this.videoList = new Array(new Asset_1.Asset(100, "Frozen", 2010, 93), new Asset_1.Asset(200, "Soul", 2020, 100), new Asset_1.Asset(300, "Master", 2021, 179), new Asset_1.Asset(400, "Captain Marvel", 2019, 123), new Asset_1.Asset(500, "Parasite", 2019, 132));
    }
    get() {
        return this.videoList;
    }
    add(asset) {
        return this.videoList.push(asset);
    }
    edit(id, asset) {
        var targetIndex = this.videoList.findIndex((asset => asset.AssetId == id));
        console.log("targetIndex is : " + targetIndex);
        if (targetIndex > -1) {
            this.videoList[targetIndex].Title = asset.Title;
            this.videoList[targetIndex].Duration = asset.Duration;
            this.videoList[targetIndex].ReleaseYear = asset.ReleaseYear;
            return this.videoList[targetIndex];
        }
        return null;
    }
    delete(id) {
        var targetIndex = this.videoList.findIndex((asset => asset.AssetId == id));
        return this.videoList.splice(targetIndex, 1)[0];
    }
};
VideoCatalog = tslib_1.__decorate([
    inversify_1.injectable()
], VideoCatalog);
exports.VideoCatalog = VideoCatalog;
