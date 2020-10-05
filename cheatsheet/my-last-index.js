function myLastIndexOf(arr, searchValue, startIdx) {    
    let i = startIdx === undefined ? arr.length-1 : startIdx;    
    
    /** ABOVE IS THE SAME AS:     
     * * if (startIdx === undefined) {     *      
     * i = arr.length-1;     * } else {     *      
     * i = startIdx     * }     */  

for(i; i >= 0; i--) {        if (arr[i] === searchValue) {            return i;        }    }    return -1;}