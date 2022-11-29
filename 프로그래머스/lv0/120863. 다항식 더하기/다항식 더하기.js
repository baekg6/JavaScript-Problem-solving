function solution(polynomial) {
    let answer = []
    
    let arr = polynomial.split(' + ')
    let coef = arr.filter(v=>v.includes('x')).map(v=> (v==='x')?1 : +(v.replace('x',''))).reduce((a,c)=>a+c,0);
    let cons = arr.filter(v=>!v.includes('x')).map(v=>+v).reduce((a,c)=>a+c,0)
    
    if(coef){
        if(coef===1){
            coef=''
        }
        answer.push(coef+'x')
        if(cons){
            answer.push(cons)
        }
    } else {
        answer.push(cons)
    }
    
    
    return answer.join(' + ')
}