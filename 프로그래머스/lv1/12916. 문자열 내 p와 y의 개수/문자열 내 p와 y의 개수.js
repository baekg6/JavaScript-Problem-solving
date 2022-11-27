function solution(s){
    var answer = true;
    
    let check = 0
    s.toLowerCase().split('').forEach(el=>{
        if(el==='p'){
            check+=1
        }else if(el==='y'){
            check-=1
        }
    })
    
    return !!!check;
}