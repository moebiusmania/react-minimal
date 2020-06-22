"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lorem = void 0;
const react_1 = __importDefault(require("react"));
exports.Lorem = (props) => {
    const url = props.url || '';
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("p", null, "Welcome to your next project, let's get started! \uD83C\uDF89"),
        react_1.default.createElement("p", null,
            "For the few options please refer to the ",
            react_1.default.createElement("a", { target: "_blank", href: url, rel: "noopener" }, "readme file"),
            " on the project repo"),
        react_1.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien turpis, posuere vitae metus sed, pulvinar mollis nisl. Cras eu enim nec lacus faucibus laoreet. Phasellus sed commodo ipsum, vitae rutrum sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "),
        react_1.default.createElement("p", null,
            react_1.default.createElement("small", null, "(this is just a dummy element, please remove it \uD83D\uDE0E)"))));
};
//# sourceMappingURL=index.js.map