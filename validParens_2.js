let validParens = (string) => {

    let parensStack = [];
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
    
    return parensStack.length === 0;
}
  