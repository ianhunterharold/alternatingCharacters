
function alternatingCharacters(s){

  let deleteCount = 0;
  for (let i=0, j=1; i < j, j <=s.length; i++, j++){
    if (s[i] === s[j]){
      deleteCount += 1;
    }
  }
  return deleteCount;
}

let strOne = 'ABABBBAABABA' ; 
alternatingCharacters(strOne)

// should expect to see 3 as the return