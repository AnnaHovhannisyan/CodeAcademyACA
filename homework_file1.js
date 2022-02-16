let path=require('path');
let fs=require('fs');
let map=new Map();
let map1=new Map();
let arr;

async function checkPath(par){

    let string =await path.normalize(par);
    let stats1= await fs.promises.stat(string);
    try {
        if(stats1.isFile()){
            let value=stats1.size;
            map.set(string, value);
            return [map,[value]];
        }
    }
    catch (e) {
        console.log(e)
    }

    if(path.isAbsolute(par)){
        string=par.slice(__dirname.length,);

    }



    let files= await fs.promises.readdir(path.join(__dirname,string));

    for await(let i of files) {

        let stats=await  fs.promises.stat(path.join(__dirname,string) + `/`+ i );

        if(stats.isDirectory()){

            let anotherString = path.join(__dirname,string ) + `/`+i ;

            await checkPath(anotherString);


        }
        else if(!stats.isDirectory()){

            let anotherString =string + '/'+ i ;
            let value=stats.size;
            map.set(anotherString, value);
            arr =  Array.from(map.values()).sort(function (a,b) {
                return b-a;
            });

        }


    }


    return [map,arr]
}


async  function sortMap(arr){
    try {

        let stats = await fs.promises.stat('./sorted_files.txt');
        if (stats.isFile()) {
            await fs.promises.unlink('./sorted_files.txt')
        }
    }catch (e) {
        console.log(e)

    }

    for await(let item of arr[1]){

        let obj=Object.fromEntries(arr[0]);
        for(let [key,value] of Object.entries(obj)){

            if(item === value){
                if( Number(value )/ 1024 > 1){
                    value = Number((Number(value) / 1024).toFixed(2))+` KB`
                }
                if( (Number(value) / 1024)/1024 > 1){
                    value = ((Number(value) / 1024)/1024).toFixed(2) + " MB"
                }
                if(Number(value) < 1024){
                    value +="  byte"
                }
                map1.set(key,value);

                async function lineBetween(par1,par2){
                    let str='';
                    let line='';
                    let lineLength = 100 - (par1.length + par2.length);
                    for (let j=0; j < lineLength; j++){
                        line+="-";

                    }

                    str +=` ${par1} ${line}${ par2}`;
                    return  str;
                }


                let answer= await lineBetween(`${path.normalize(key)}`, `${value}`);

                await fs.promises.appendFile('./sorted_files.txt', `${answer}\n`);

            }
        }

    }

    return map1;
}
checkPath(process.argv[2]).then((data)=>{

    return new Promise((resolve)=>{
        resolve( sortMap(data))
    })
}).then((value)=>{
    console.log('done',value);

}).catch((e)=>{
    if (e instanceof TypeError) {
        console.log('typeError')

    } else if (e instanceof RangeError) {
        console.log('rangeError')

    } else if (e instanceof EvalError) {
        console.log('EvalError')

    } else {

        console.log('other error');
    }
});
