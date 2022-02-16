let firstObj = {
    dream:"Hero",
    person:{age:6},
    month:5,
    age:54,
    country: {
        republic:"Armenia",
        city:"Yerevan",
        region:[1,2,3,4],
        name:"John",
        surname:{
            name:"John",
            firstName:"Aram",
            lastName:"Haroyan",
        }
    },
    business:undefined,
};


function forObjects(par){

    let mainObj={};

    let elemKey;
    let elemValue;

    try{



        for(let [key,value] of Object.entries(par)){
            elemKey=key;
            elemValue=value;

            if( typeof value === 'undefined'  && !(mainObj.hasOwnProperty(`${elemKey}`))){
                Object.defineProperty(mainObj, `${elemKey}`, {
                    value: value,
                    enumerable: true,
                });

            }

            if(typeof value !== 'object' && ((typeof value === 'number') || (typeof value === 'string')) && !(mainObj.hasOwnProperty(`${elemValue}`)) && (typeof value !== 'function') && !(typeof value ==='object' && !value)) {

                Object.defineProperty(mainObj, `${elemValue}`, {
                    value: `${elemKey}`,
                    enumerable: true,
                });

            }


            else if((typeof value === 'object') && !(mainObj.hasOwnProperty(`${elemValue}`)) && !(typeof value ==='object' && !value) && !(Array.isArray(value))){

                let  obj1=forObjects(value);

                Object.defineProperty(mainObj, `${elemKey}`, {
                    value: {...obj1},
                    enumerable: true,
                });

            }
            else if(typeof value === 'object' && !(typeof value === 'object' && !value) && (Array.isArray(value)) ){
                Object.defineProperty(mainObj, `${elemKey}`, {
                    value: value,
                    enumerable: true,
                });

            }


        }



    }catch (e) {
        if (e instanceof TypeError) {
            console.log('typeError')

        } else if (e instanceof RangeError) {
            console.log('rangeError')

        } else if (e instanceof EvalError) {
            console.log('EvalError')

        } else {

            console.log('other error');
        }
    }
    return {...mainObj};


}


console.log(firstObj);
console.log(forObjects(firstObj));