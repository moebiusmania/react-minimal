"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importDefault(require("react"));
const style_module_scss_1 = __importDefault(require("./style.module.scss"));
const lorem_1 = require("../lorem");
const package_json_1 = __importDefault(require("./../../../package.json"));
exports.App = (props) => {
    const name = props.name || package_json_1.default.name;
    return (react_1.default.createElement("section", null,
        react_1.default.createElement("h1", { className: style_module_scss_1.default.title },
            "Hello, ",
            name),
        react_1.default.createElement("article", { className: style_module_scss_1.default.content },
            react_1.default.createElement(lorem_1.Lorem, { url: package_json_1.default.homepage }))));
};
//# sourceMappingURL=index.js.map