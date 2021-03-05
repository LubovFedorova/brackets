module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for (let current of str) {
    if (isOpenBracket(current,bracketsConfig)) {
      stack.push(current);
    }
    if (isClosedBracket(current,bracketsConfig)) {
      if(stack.length===0){
        return false;
      }
      let prev = stack.pop();
      if (isPairBracket(prev, current,bracketsConfig)) {
        continue;
      }
      return false
    }
  }
  if (stack.length === 0) {
    return true
  }
  return false
}


function isOpenBracket(symbol,config) {
  for (const brackets of config) {
      let open = brackets[0];
      if (symbol === open)  {
        return true
      }  
  }
  return false
}

function isClosedBracket(symbol,config) {
  for (const brackets of config) {
    let close = brackets[1];
    if (symbol === close) {
      return true
    }
  }
  return false
}

function isPairBracket (openSymbol, closeSymbol,config) {
  for (const brackets of config) {
    let open = brackets[0];
    let close = brackets[1];
    if (openSymbol === open && closeSymbol === close) {
      return true
    }

  }
  return false
}

