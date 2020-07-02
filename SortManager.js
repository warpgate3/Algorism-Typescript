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
        console.log('shuffling');
        for (var i = this.input.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [this.input[j], this.input[i]], this.input[i] = _a[0], this.input[j] = _a[1];
        }
        this.printArray();
    };
    SortManager.prototype.bubbleSort = function (idx) {
        if (idx == this.input.length) {
            return;
        }
        for (var i = 0; i < this.input.length - idx; i++) {
            if (this.input[i] > this.input[i + 1]) {
                this.swap(i, i + 1);
            }
        }
        var next = idx + 1;
        this.bubbleSort(next);
    };
    SortManager.prototype.swap = function (s, e) {
        var temp = this.input[e];
        this.input[e] = this.input[s];
        this.input[s] = temp;
    };
    return SortManager;
}());
exports.SortManager = SortManager;
