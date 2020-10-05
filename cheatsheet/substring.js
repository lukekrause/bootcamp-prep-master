function myIndexOf(source, searchValue, startIdx){
  if(startIdx === undefined){
    startIdx = 0;
  }
  let searchValueLength = searchValue.length; // 3
  for(let i = startIdx; i <= source.length - searchValueLength; i++){
    let partOfSource = '';
    for(let j = 0; j < searchValueLength; j++){
      partOfSource += source[i+j];
    }
    // let partOfSource = source.substring(i, i+searchValueLength);
    if(partOfSource === searchValue){
      return i;
    }
  }
  return -1;
}
