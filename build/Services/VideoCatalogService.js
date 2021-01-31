"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoCatalogService = void 0;
class VideoCatalogService {
    constructor(repository) {
        this.repository = repository;
    }
    get() {
        return this.repository.get();
    }
    add(asset) {
        return this.repository.add(asset);
    }
    edit(id, asset) {
        return this.repository.edit(id, asset);
    }
    delete(id) {
        return this.repository.delete(id);
    }
}
exports.VideoCatalogService = VideoCatalogService;
