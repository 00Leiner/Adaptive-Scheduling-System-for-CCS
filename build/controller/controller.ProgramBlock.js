"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReadProgramBlockController = (req, res) => {
    const { program, block } = req.params;
    res.send(`${program} ${block}`);
};
exports.default = {
    ReadProgramBlockController
};
