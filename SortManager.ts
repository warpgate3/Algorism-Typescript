export class SortManager {
   input:number[];
   constructor(input:number[]) {
      this.input = input;
   }

   printArray():void {
      console.log(this.input);
   }

   shuffleArray(): void {
      for (let i = this.input.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [this.input[i], this.input[j]] = [this.input[j], this.input[i]];
      }
   }
}
