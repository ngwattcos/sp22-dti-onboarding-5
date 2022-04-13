"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserByName = exports.getUserByName = void 0;
const state_1 = require("./state");
const getUserByName = (name) => state_1.users[name];
exports.getUserByName = getUserByName;
const updateUserByName = (name, update) => {
    const userBeforeUpdate = (0, exports.getUserByName)(name);
    state_1.users[name] = Object.assign(Object.assign({}, update), userBeforeUpdate);
};
exports.updateUserByName = updateUserByName;
//# sourceMappingURL=impl.js.map