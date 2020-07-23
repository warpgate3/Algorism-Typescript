export class RightBracket {
   public isWrong(targetText: string): boolean {
      let stack: string = "";
      for (let i = 0; i < targetText.length; i++) {
         let currentText = targetText.charAt(i);
         let pairText = this.isClose(currentText);
         if (pairText != '') {
           if (stack.substring(stack.length - 1, stack.length) != pairText) {
              return true;
           }
           stack = stack.substring(0, stack.length -1);
         } else {
            stack = stack + currentText;
         }
      }
      return false;
   }
   public isClose(inputText: string): string {
      let closeBrackets = ']})';
      let pairBrackets = '[{(';
      let idx = closeBrackets.indexOf(inputText);
      if (idx > -1) {
         return pairBrackets.charAt(idx);
      }
      return "";
   }
}