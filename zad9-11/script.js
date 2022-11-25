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




const multiplyAsync = (x, y) => new Promise((resolve, reject) =>
{
	if (typeof x !== "number" || typeof y !== "number")
		return reject("nie jest liczba");
	resolve(x * y);
})
multiplyAsync(1, 3).then(console.log);
multiplyAsync(1, "123").then(console.log);
