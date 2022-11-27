function solution(n, m) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);    
    
    const result = gcd(n,m)
    return [result, n*m/result]
    
}