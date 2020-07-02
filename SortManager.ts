export class SortManager {
   input:number[];
   constructor(input:number[]) {
      this.input = input;
   }

   printArray():void {
      console.log(this.input);
   }

   shuffleArray(): void {
      console.log('shuffling');
      for (let i = this.input.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [this.input[i], this.input[j]] = [this.input[j], this.input[i]];
      }
      this.printArray();
   }
   
   swap(s:number, e:number): void {
    let temp = this.input[e];
    this.input[e] = this.input[s];
    this.input[s] = temp;
   }

   bubbleSort(idx:number): void {
	if (idx == this.input.length) {
		return;
	}
	for (let i = 0; i < this.input.length-idx; i++) {
		if (this.input[i] > this.input[i+1]) {
			this.swap(i, i+1);
		}
	}
	var next = idx + 1;
	this.bubbleSort(next);
   }

   selectionSort(idx:number): void {
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
}
