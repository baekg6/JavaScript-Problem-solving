function solution(n) {
    var answer = 0;
    function gcd(a, b) {
        if (a%b==0){
            return b
        } else {
            return gcd(b, a%b)
        }
    }
    
    answer = n/gcd(n, 6);
    return answer;
}