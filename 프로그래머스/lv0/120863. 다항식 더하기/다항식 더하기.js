function solution(polynomial) {
    let answer = []
    
    let arr = polynomial.split(' + ')
    let coef = arr.filter(v=>v.includes('x')).map(v=> (v==='x')?1 : +(v.replace('x',''))).reduce((a,c)=>a+c,0);
    let cons = arr.filter(v=>!v.includes('x')).map(v=>+v).reduce((a,c)=>a+c,0)
    
    if(coef){
        if(coef===1){
            // x의 계수가 1인 경우
            coef=''
        }
        answer.push(coef+'x')
        if(cons){
            // x항이 존재하면 cons가 0일때 입력할 필요X
            answer.push(cons)
        }
    } else {
        // x항이 존재하지 않을 때, cons 값이 필요
        answer.push(cons)
    }
    
    
    return answer.join(' + ')
}