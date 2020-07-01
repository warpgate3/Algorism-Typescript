"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortManager = void 0;
var SortManager = /** @class */ (function () {
    function SortManager(input) {
        this.input = input;
    }
    SortManager.prototype.printArray = function () {
        console.log(this.input);
    };
    SortManager.prototype.shuffleArray = function () {
        var _a;
        for (var i = this.input.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [this.input[j], this.input[i]], this.input[i] = _a[0], this.input[j] = _a[1];
        }
    };
    return SortManager;
}());
exports.SortManager = SortManager;
