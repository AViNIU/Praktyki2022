function handleCalculatorForm(form) {
    let method = form.choose.value;
    let toDisplay = form.inputbox.value;
    let toDisplay2 = form.inputbox1.value;
    document.getElementById("calcResult").innerHTML = calculate(
        toDisplay,
        toDisplay2,
        method
    );
}

function handlePalindromeForm(form) {
    let formValue = form.inputbox2.value;
    document.getElementById("palindromeResult").innerHTML = palindrome(formValue);
}

function calculate(var1, var2, method) {
    var1 = parseFloat(var1);
    var2 = parseFloat(var2);
    if (method == "add") return var1 + var2;
    else if (method == "sub") return var1 - var2;
    else if (method == "mul") return var1 * var2;
    else if (method == "divi") {
        if (var2 == 0) return "nie dziel przez 0 xD"
        else return var1 / var2;
    }
}

function palindrome(var1) {
    let arr = var1.split("");
    let word = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        word += arr[i];
    }
    if (var1 == word) return true;
    else return false;


}

function bblSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

function bblSortString(array) {

    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {

            if (array[i].length > array[j].length) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }

        }
    }

    return array;
}

function checkString(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] != "string") {
            return false;
        }
    }

    return true;
}

function secondLast(arr1) {
    let arr2 = arr1
    if (checkString(arr2)) {
        console.log("aha")
        arr2 = bblSortString(arr2);
        return arr2[arr2.length - 2];
    } else {
        arr2 = bblSort(arr2);
        arr3 = [];
        for (let index = 0; index < arr2.length; index++) {
            let contain = false;
            for (let index2 = 0; index2 < arr3.length; index2++) {
                if (arr2[index] === arr3[index2]) {
                    contain = true;
                    break;
                }
            }
            if (!contain) arr3.push(arr2[index]);
        }

        return arr3[arr3.length - 2];
    }
}

function fibonacci(n) {
    let a = 0,
        b = 1,
        c = n;

    for (let index = 0; index < n; index++) {
        c = a + b;
        a = b;
        b = c;

    }
    return c;
}

function recurse(a, n) {
    console.log(a);
    let b = a + 1;
    if (b <= n) recurse(b, n)
    else return;
}
let arrayay1 = ["Anna","Maria"];
let arrayay2 = ["Tomek","Adam","Marek","Bartek"];

//zadanie 1
    let last = (arr1) => arr1[arr1.length-1]

//zadanie 2
    let joinArr = (arr1,arr2) => [...arr1,...arr2];
//zadanie 3
    let filter = (arrayay1,arrayay2) => {
        let arrayay3 = [...arrayay1,...arrayay2];
        let filterarrayay3 = arrayay3.filter(arrayay3 => arrayay3.length == 4)
        return filterarrayay3;
    }
    //zadanie 4

    let array12 = [1,2,3,4,5]

    let initialValue = 0;

    let subValue = array12.reduce((prevoiusValue, currentValue) => prevoiusValue + currentValue, initialValue)




    //zadanie 5
    let powerValue = (arr1) => {
        for (let i = 0; i < arr1.length; i++) {
           arr1[i] = Math.pow(arr1[i],2) + 3
        }
        return arr1;
    }
console.log(fibonacci(10))
console.log(secondLast(["aha","a","ahaha","aha_aha"]))
console.log(recurse(1, 2))
console.log(joinArr([2,3,4],[1,2,3]));


console.log(last(array12));
console.log(filter(arrayay1,arrayay2));
console.log(subValue);
console.log(powerValue(array12));