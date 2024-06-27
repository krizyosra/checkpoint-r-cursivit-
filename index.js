function year(a) {
    if (a%4 == 0 && a%100!==0 || a%400 ==0){
        return true
    }
    else return false;
    
}

function tickets(age) {
    
    switch (true) {
        case (age <= 12):
            return "10$"
            break;
        case (age >= 13 && age <17):
            return "15$"
            break;
        case (age >= 18):
                return "20$"
                break;    
    
        default:
            break;
    }
}

function weather(tmp,rain) {
    
    switch (true) {
        case (tmp>=25 && rain):
            return "il fait chaud mais il pleut"
            break;
        case (tmp>=25 && !rain):
            return "il fait chaud"
            break;
        case (tmp>=15 && tmp<25 && !rain):
            return "il fait tempére"
            break;
        case (tmp>=15 && tmp<25 && rain):
            return "il fait tempéré mais il pleut"
            break;
        case (tmp<15 && rain):
            return "il fait frais et il pleut"
            break;
        case (tmp<15 && !rain):
            return "il fait frais"
            break;
    
        default:
            break;
    }
}

function fibonnaci(n) {
    if (n<=1){
        return n
    }
    else
    return fibonnaci(n-1) + fibonnaci(n-2)
    
}

function palindrome(str) {
    if (str.length==1) return true;
    if (str.length==2) return str[0]==str[1];
    if(str[0]==str.slice(-1)) return palindrome(str.slice(1,-1))
        return false;

    
}
function pow(n, p) {
    if (p==0) {
        return 1;
    }
    return (pow(n,p-1)*n);
    
}