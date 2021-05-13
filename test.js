A=[2,3,4,6]
let min=1000
A=A.sort()
for(var i = 0; i < 3; i++){

    if(i - 1 >= 0){

        if(A[i] - A[i - 1] > 1){
            return A[i - 1] + 1;
        }
    }
}
console.log(min)