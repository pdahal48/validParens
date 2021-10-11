let validParens = (string) => {

    let parensStack = new Stack();
      let parens = {
        '(': ')',
        '{': '}',
        '[': ']'
      };
    
    //run time to look up a key value in an object should be O(1) because its hashed
    for (let i=0; i<string.length; i++) {
        let char = string[i];
        if (parens[char]) {
            parensStack.push(parens[char]);
        } else if (char !== parensStack.pop()) {
            return false;
        }
    }
    
    return parensStack.isEmpty();
}
  
//runtime of this algorithm is O(n)  
class Stack {
constructor() {
    this.stringArray = [];
}

//push a value at the end: O(n)
push(val) {
    this.stringArray.push(val);
}

//peeking the val at the end: O(n)
peek() {
    return this.stringArray[this.stringArray.length-1]
}

//delete from the end O(n)
pop() {
    if (this.stringArray.length === 0) return false;
    return this.stringArray.pop();
}

//check to see if stack is empty O(n)
isEmpty(){
    return this.stringArray.length === 0;
}

}
  