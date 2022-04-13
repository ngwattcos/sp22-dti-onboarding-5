"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUser = void 0;
const impl_1 = require("./impl");
const getUser = (name) => impl_1.getUserByName;
exports.getUser = getUser;
const updateUser = (name, update) => {
    (0, impl_1.updateUserByName)(name, update);
};
exports.updateUser = updateUser;
//# sourceMappingURL=actions.js.map