import SERVICE_IDENTIFIERS from "./Constants/Identifiers"
import { IVideoRepository } from "./Repositories/IVideoRepository"
import container from "./Infrastructure/Installer"
import { VideoCatalogService } from "./Services/VideoCatalogService"
import { Asset } from "./Models/Asset";

let videoRepo = container.get<IVideoRepository>(SERVICE_IDENTIFIERS.IVideoRepository);
let service = new VideoCatalogService(videoRepo);

console.log("#####Initial Video Movies Library####");
console.log(service.get());

console.log("#####Deleting one existing Movie####");
console.log(service.delete(400));

console.log("#####Adding one new record####");
console.log("Added at index : " + service.add(new Asset(600, "Joker", 2020, 109)));

console.log("#####Editing one of the existing record####");
console.log(service.edit(400, new Asset(600, "Joker_Edited", 2020, 109)));

console.log("#####Final Video Movies Library####");
console.log(service.get());