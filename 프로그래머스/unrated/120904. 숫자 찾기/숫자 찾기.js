function solution(num, k) {
    var answer = 0;
    
    let tmp = [...String(num)].map(x=>+x)
    answer = tmp.indexOf(k)
    
    if (answer != -1){
        answer +=1 
    }
    return answer;
}