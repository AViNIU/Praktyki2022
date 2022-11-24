let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve("success");
    } else {
        reject("failed");
    }
});

p.then((value) => {
    setTimeout(() => {
        console.log("udalo sie");
    }, 5000);
}).catch((error) => {
    console.log("nie udalo sie sds");
});



let a = 1;
let b = "aha";
let p1 = new Promise((resolve, reject) => {

    if (typeof a == "number" && typeof b == "number") {
        resolve("success");
    } else {
        reject("failed");
    }
});

p1.then((value) => {
    console.log(a + b);
}).catch((error) => {
    console.log("jedna z zmiennych nie jest liczba");
});