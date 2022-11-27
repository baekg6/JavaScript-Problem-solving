function solution(s) {
    const arr = [...s]
    
    let undup = []
    let dup = []
    arr.forEach(el=>{
        if(!dup.includes(el)){
            if(undup.includes(el)){
                undup.splice(undup.indexOf(el),1)
                dup.push(el)
            }else{
                undup.push(el)
            }
        }
    })
    
    return undup.sort().join('')
    
}