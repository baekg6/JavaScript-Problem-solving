function solution(denum1, num1, denum2, num2) {
    
    function gcd(a, b){
        // 유클리드 알고리즘
        if (a%b){
            return gcd(b, a%b);
        } else{
            return b
        }
    }
    
    var answer = [];
    
    let denum = denum1 * num2 + denum2 * num1;
    let num = num1 * num2;
    
    let divNum = gcd(denum, num);
    answer = [denum/divNum, num/divNum]
    
    
    
    return answer;
}
