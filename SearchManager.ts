export class SearchManager {
    input: number[];
    counter: number;
    constructor(input: number[]) {
        this.input = input;
        this.counter = 1;
    }

    public search(targetNum: number, startIndex: number, endIndex: number): number {
        let centerIndex = this.findCenterIndex(startIndex, endIndex);
        if (endIndex - startIndex == 1) {
            if (this.input[startIndex] == targetNum) {
                return startIndex;
            }
            if (this.input[endIndex] == targetNum) {
                return endIndex;
            }
            return -1;
        }

        if (targetNum < this.input[centerIndex]) {
            return this.search(targetNum, startIndex, centerIndex);
        }
        return this.search(targetNum, centerIndex, endIndex);
    }

    private findCenterIndex(startIndex: number, endIndex: number): number {
        // console.log('startIndex=>' + startIndex + ' endIndex=>' + endIndex + ' centerIndex=>' + Math.floor((startIndex + endIndex) / 2));
        console.log("retrieve count ::> ", this.counter );
        this.counter++;
        let centerIndex = Math.floor((startIndex + endIndex) / 2);
        return centerIndex;
    }
}
