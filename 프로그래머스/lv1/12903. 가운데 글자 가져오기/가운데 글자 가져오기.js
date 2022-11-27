function solution(s) {
    var answer = '';
    if(s.length%2){
        // 홀수
        return s[parseInt(s.length/2)]
    } else {
        return s.substr(s.length/2-1,2)
    }
        
}