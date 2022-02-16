function arrSlice(array,start= 0,end= 0){

    if(Array.isArray(array)  &&  (((!(isNaN(start)) && !(isNaN(end)))   ||  ( end === undefined || start === undefined) ))) {
        let outputArray = [];
        let last = array.length - 1;
        if (start === undefined && end === undefined) {
            return outputArray;
        }
        if ((start < 0) && (end < start)) {

            return [];
        }
        if(start === end){
          return [];
        }

        if (end !== undefined && ( end > 0 ) && (end > start) && !(end > (array.length))) {
            last = end - 1;
        }else if(end !== undefined && ( end > 0 ) && (end > start) && (end > (array.length))){
            return [];
        }

        if (start < 0 ) {
            start = start + array.length;
        }

       if(((start > 0 || start === 0) && ((end < 0) && (!((end * (-1)) > array.length)  && (((start < (array.length+end)) || (start === (array.length + end)))))))){
         last = last+end;

       }else if(((start > 0) && ((end < 0) && (!((end * (-1)) > array.length)  && (((start > (array.length + end)))))))){
           return [];
       }else if((start > 0)  && (end > 0) && (start > end)){
           return [];
       }

        for (let i = start; i <= last; i++) {
            let item = array[i];
            outputArray.push(item);
        }
        return outputArray;
    }
}
let arr1=[1,2,3,4,5,6,7,8,9];

console.log(arrSlice(arr1,5,5));


/*
function arrMap(arr,cb){
    if(Array.isArray(arr)){
    let resultArray=[];
    for(let index=0;index < arr.length; index++){
        resultArray.push(cb(arr[index],index,arr))
    }
    return resultArray;
}else{
        console.log('enter an array')
    }
}

let array1=[1,2,3,4,5,6];
console.log(arrMap(array1,function (num) {
    console.log('some')
}));
*/
