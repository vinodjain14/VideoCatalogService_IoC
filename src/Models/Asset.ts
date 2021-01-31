export class Asset {
    public AssetId : number;
    public Title : string;
    public ReleaseYear : number;
    public Duration : number;

    constructor(assetId: number, title: string, releaseYear: number, duration: number) {
        this.AssetId = assetId;
        this.Title = title;
        this.ReleaseYear = releaseYear;
        this.Duration = duration;
    } 
}