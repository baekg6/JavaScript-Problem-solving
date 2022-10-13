function solution(i, j, k) {
    var answer = 0;
    for (let index = i ; index < j+1 ;index++){
        answer += [...String(index)].filter(x=>x==k).length
    }
    
    
    
    return answer;
}