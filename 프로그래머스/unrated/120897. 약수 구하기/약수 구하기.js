function solution(n) {
    var answer = [];
    let numbers = Array(n).fill(0).map((_,i)=>i+1)
    //console.log(numbers)
    answer = [...numbers.filter(i=>n%i==0)]
    
    return answer;
}