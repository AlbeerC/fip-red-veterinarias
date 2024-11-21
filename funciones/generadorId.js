"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarId = void 0;
// Genera un ID aletatorio entre 1 y 1000.
function generarId() {
    return Math.floor(Math.random() * 1000) + 1;
}
exports.generarId = generarId;
