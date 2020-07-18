import {Algo} from './Algo';

export class SortManager {
    input: number[];
    temp: number[];
    constructor(input: number[]) {
        this.input = input;
        this.temp = [];
    }

    doSort(t: Algo): void {
        this.shuffleArray();
        switch (+t) {
            case Algo.BUBBLE:
                console.log('Running bubble sort');
                this.bubbleSort(0);
                break;
            case Algo.SELECTION:
                console.log('Running selection sort');
                this.selectionSort(0);
                break;
            case Algo.INSERT:
                console.log('Running insert sort');
                this.insertSort(0);
                break;
            case Algo.MERGE:
                console.log('Running MERGE sort');
                this.mergeSort(0, this.input.length - 1);
                break;
        }
        this.printArray();
    }

    private mergeSort(startIndex: number, endIndex: number) {
        if (startIndex < endIndex) {
           let middleIndex = Math.floor((endIndex + startIndex) / 2);

           this.mergeSort(startIndex, middleIndex);
           this.mergeSort(middleIndex + 1, endIndex);
           this.merge(startIndex, middleIndex, endIndex);
        }
    }
    private merge(startIndex: number, mid: number, endIndex: number) {
        for (let i = startIndex; i <= endIndex; i ++) {
           this.temp[i] = this.input[i] ;
        }
        let part1 = startIndex;
        let part2 = Math.floor((endIndex + startIndex) / 2) + 1;

        let index = startIndex;

        while (part1 <=mid && part2 <= endIndex) {
                if (this.temp[part1] <= this.temp[part2]) {
                    this.input[index] = this.temp[part1];
                    part1++;
                } else {
                    this.input[index] = this.temp[part2];
                    part2++
                }
                index++;
        }
       for (let i = 0; i <= mid - part1; i++) {
           this.input[index + i] = this.temp[part1 + i];
       }
    }
    private printArray(): void {
        console.log(this.input);
    }

    private shuffleArray(): void {
        for (let i = this.input.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.input[i], this.input[j]] = [this.input[j], this.input[i]];
        }
        this.printArray();
    }

    private swap(s: number, e: number): void {
        let temp = this.input[e];
        this.input[e] = this.input[s];
        this.input[s] = temp;
    }

    private bubbleSort(idx: number): void {
        if (idx == this.input.length) {
            return;
        }
        for (let i = 0; i < this.input.length - idx; i++) {
            if (this.input[i] > this.input[i + 1]) {
                this.swap(i, i + 1);
            }
        }
        const next = idx + 1;
        this.bubbleSort(next);
    }

    private selectionSort(idx: number): void {
        if (idx == this.input.length) {
            return;
        }
        let minIdx = idx;
        let minVal = this.input[minIdx];
        for (let i = idx; i < this.input.length; i++) {
            if (minVal > this.input[i]) {
                minIdx = i;
                minVal = this.input[i];
            }
        }
        this.swap(idx, minIdx);
        let next = idx + 1;
        this.selectionSort(next);
    }

    private insertSort(idx: number): void {
        if (this.input.length <= idx) {
            return;
        }
        let c = this.input[idx];
        for (let i = 0; i <= idx; i++) {
            if (this.input[i] > c) {
                this.shiftArray(i, idx);
                this.input[i] = c;
                break;
            }
        }
        let next = idx + 1;
        this.insertSort(next);
    }

    private shiftArray(start: number, end: number) {
        while (end > start) {
            this.input[end] = this.input[end - 1];
            end--;
        }
    }

}
