function stringCompression(chars){
    let write = 0;
    let count =1;
    for(let i=1;i<=chars.length;i++){
        if(chars[i] !== chars[i-1]){
            chars[write] = chars[i-1];
            write++;
            if(count > 1){
                for(let c of count.toString()){
                    chars[write] = c;
                    write++;
                }
            }
            count=1;
        }else{
            count++;
        }
    }
    
    return write

}