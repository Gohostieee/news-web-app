export function passCheck(pass) {
    console.log(pass.length)

    if(pass.length<6){
        return 1;
    }else if (!/\d/.test(pass)){
        return 2;
    }else if (!/[A-Z]/.test(pass)){
        return 3;
    }else if (!/[a-z]/.test(pass)) {
        return 4;
    }else{
        return 0;
    }
}