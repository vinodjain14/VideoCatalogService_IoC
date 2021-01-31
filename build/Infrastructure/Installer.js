"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const Identifiers_1 = require("../Constants/Identifiers");
const VideoCatalog_1 = require("../Repositories/VideoCatalog");
let container = new inversify_1.Container();
container.bind(Identifiers_1.default.IVideoRepository).to(VideoCatalog_1.VideoCatalog);
exports.default = container;
