function solution(s) {
    if(s.length===4 || s.length===6 ){
        const intS = s.replace(/[^0-9]/g,'');
        return s.length===intS.length;
    } 
    return false
}