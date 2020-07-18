"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var metadataKeys_1 = require("./metadataKeys");
function use(middleware) {
    return function (target, key, desc) {
        var middlewares = Reflect.getMetadata(metadataKeys_1.MetadataKeys.middleware, target, key) || [];
        Reflect.defineMetadata(metadataKeys_1.MetadataKeys.middleware, __spreadArrays(middlewares, [middleware]), target, key);
    };
}
exports.use = use;