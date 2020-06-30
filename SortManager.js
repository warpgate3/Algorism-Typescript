var SortManager = (function () {
    function SortManager(input) {
        this.input = input;
    }
    SortManager.prototype.printArray = function () {
        console.log(this.input);
    };
    SortManager.prototype.shuffleArray = function () {
        for (var i = this.input.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [this.input[j], this.input[i]], this.input[i] = _a[0], this.input[j] = _a[1];
        }
        var _a;
    };
    return SortManager;
})();
var s = new SortManager([1, 2, 3, 4, 5]);
s.printArray();
s.shuffleArray();
s.printArray();
