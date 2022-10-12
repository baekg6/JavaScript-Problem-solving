function solution(rsp) {
    var answer = '';
    let win = {2: 0, 0: 5, 5:2}
    
    for (v of rsp){
        answer += win[v]
    }
    return answer;
}