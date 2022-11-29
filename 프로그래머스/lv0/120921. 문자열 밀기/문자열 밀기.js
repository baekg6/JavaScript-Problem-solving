function solution(A, B) {
    let answer = A.repeat(2).indexOf(B)
    
    if(A===B){
        answer = 0
    } else if(answer !== -1) {
        answer = A.length - answer
    }
    
    return answer
}