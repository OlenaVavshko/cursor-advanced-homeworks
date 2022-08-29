//getting N number from user
let N;
//making sure the N number is a proper integer
N = +prompt("Please, enter an integer (N)");
while(!Number.isInteger(N) || N =="" || N == NaN || N < 0) {
    alert("Invalid value. Please, enter a proper integer");
    N = +prompt("Please, enter an integer (N)");
} 

//getting M number from user
let M;
M = +prompt("Please, enter an integer (M)");
//making sure the M number is a proper integer
while(!Number.isInteger(M) || M =="" || M == NaN || M < 0) {
    alert("Invalid value. Please, enter a proper integer");
    M = +prompt("Please, enter an integer (M)");
}

//making sure M is higher than N
while(N >= M) {
    M = +prompt("Invalid value. M must be higher than N");
}


//asking user whether even numbers should be skipped
let skipEven = confirm("Skip even numbers?")

//setting up counter from N to M
let result = 0;
for(let i = N; i <= M; i++) {
    if(skipEven) {
        !(i % 2) ? result : result += i;
    } else result += i;
}

console.log(result);