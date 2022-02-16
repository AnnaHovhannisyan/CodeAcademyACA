function flatArray(arr){
    if(Array.isArray(arr)){
    let newArray=[];
    let mainArray=[...arr];

    while(mainArray.length){

        let item = mainArray.pop();

        if(Array.isArray(item)){
            mainArray.push(...item)
        }else{
            newArray.push(item);
        }
    }
    return newArray.reverse();
}else{
      console.log("Enter an array");

    }
}

 let array=[1,[2,3,[4]],[[5,6],7]];
let array1=[5,7,[6],[6,7],[[8,7,9],7]];

console.log(flatArray(array));
console.log(flatArray(array1));



