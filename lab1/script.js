// function printDay(num){
//     var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     return days[num];
// }


// function lastElement(arr){
//     return arr.pop()
// }


// var arr = [2, 3, 4];//create array
// arr.unshift(1)
// arr.unshift(0)
//using push add  numbers to end of array 

// arr.push(5)
// arr.push(6)
// arr.push(7)
//using unshift add numbers to front of array numbers

// var arr = [0,1,2,3,4,5,6,7]

function withoutFirst(arr){
    return arr.slice(1)
}

function stringCompare(str1, str2){
    if(str1.length > str2.length){
        return 'First is longer'
    }
    else if(str2.length > str1.length){
        return 'Second is longer'
    }
    else {
        return 'Same length'
    }
}

function theLastofUs(arr){
    return arr.slice(0, arr.length -1)
}

function theFlip(arr){
    return arr.slice().reverse()
}

var food = ['burgers', 'fries', 'onion rings'];

function printToScreen(arr){

    for(var i = 0; i < arr.length; i++){
        document.write(
            `<p style="color: green">${arr[i]}</p>`
        )
    }
}
printToScreen(food)

var food = ['onion rings', 'fries', 'burgers', 'chili', 'hot dogs'];

function checker(arr){
    //create new array 
    var newArr = []
    //check every element to see if they are longer tahn 5 char
    for(var i = 0; i < arr.length; i++){
        if(arr[i].length > 5){
            newArr.push(arr[i])
        }
    }

    return newArr
}





function beerType(){
    var beer = prompt("Which beer you idiot?");
    alert("Here is your pint of " + beer);
}

