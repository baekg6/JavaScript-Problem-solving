function solution(n) {
//     1보다 큰 n에서 소수가 아닐 때 합성수이다.
    let answer = []
    for (let i = 2 ; i<=n ;i++){
        for (let j =2; j<i;j++)
            if(i%j===0){
                answer.push(i)
                break
            }
    }
    return answer.length;
}

