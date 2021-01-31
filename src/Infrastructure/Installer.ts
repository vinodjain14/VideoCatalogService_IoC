import "reflect-metadata"
import { Container } from "inversify"

import SERVICE_IDENTIFIERS from "../Constants/Identifiers"
import { IVideoRepository } from "../Repositories/IVideoRepository"
import { VideoCatalog } from "../Repositories/VideoCatalog"

let container = new Container();
container.bind<IVideoRepository>(SERVICE_IDENTIFIERS.IVideoRepository).to(VideoCatalog);

export default container;