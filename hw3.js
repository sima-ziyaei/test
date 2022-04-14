//Ex.1

/*function negPos(arr){
    for(let i of arr){
        if(arr.indexOf(-(i)) === -1){
            alert(i);
        }
    }
}
let array=[-9, -9, 105, -9, -9, -105];
negPos(array);*/

//Ex.2

/*function present(p, str){
    let arrStr=str.split('');
    let n=0;
    for( let i of arrStr){
        if(i === p){
            n++;
        }
    }
    alert(n);
}
present('s',"sima is going to sleep in her brother's bed!");*/

//Ex.3

/*function pattern(n){
    let str=" ";
    for (let i=0; i<=n; i++){
        for(let j=1; j<=i; j++){
            str+= j+ " ";

        }
        str+= "\n";
    }
    console.log(str);
}
pattern(8);*/

//Ex.4

/*function noDigit(n){
    let arr=n.toString();
    alert(arr.length);
}
noDigit(12343);*/


//Ex.5

/*function day(year, month){
    let y1= (year+38) * 31;
    let y2=y1 % 128;
    if (y2 < 31){
        year=true;
    }else{
        year= false;
    }
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            alert("the number of days in a month is 31");
        case 4:
        case 6:
        case 9:
        case 11:
            alert("the number of days in a month is 30");
        case 2:
            if(year){
                alert("the number of days in a month is 29");
            }else{
                alert("the number of days in a month is 28");
            }
        default:
            alert("invalid month");

    }
}
day(1366, 2);*/


//Ex.6

/*function forSort(arr){
    let temp=0;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[j]> arr[j+1]){
                temp= arr[j];
                arr[j]= arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    console.log(arr);
}
let array=[];
let len=+prompt("length of array?");
for(let i=0;i<len;i++){
    array[i]=+prompt(" enter element " + (i+1));
}
forSort(array);*/

//Ex.7

/*function mul(int){
    if(int == 0){
        return 0;
    }else{
        return 123+ mul(int-1);
    }
}
let n;
do{
    n=+prompt("enter an integer number:");
}while(n<0)
let a=mul(n);
alert(a);*/

//Ex.8

/*function grade(){
    let name=["bahar", "hasti", "negar", "sara", "parham"]
    let mark=[80, 77, 88, 95, 68];
    let sum=0;
    for(let i=0; i<mark.length; i++){
        sum+=mark[i];
    }
    let avg=sum/mark.length;
    console.log("average is: "+ avg);
    let g;
    for(let i=0; i<mark.length; i++){
        if(avg-mark[i]>=20){
            g='F';
        }else if(avg-mark[i]>=10){
            g='D';
        }else if(avg-mark[i]<=10 && avg-mark[i]>0){
            g='C';
        }else if(mark[i]-avg<=10){
            g='B';
        }else if(mark[i]-avg<=20){
            g='A';
        }
        console.log(name[i]+":"+g);
    }

}
grade();*/

//Ex.9

/*function separate(str){
    let separated=[];
    separated=str.split("-");
    alert(separated[1]);
}
let str=prompt("enter a sentence:");
separate(str);*/