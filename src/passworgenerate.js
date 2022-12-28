export  function generate(alphabets,number,specialcharacters,length){
    const wanted = [alphabets,number,specialcharacters]
    function gendigits(){
        const dig = '0123456789'
        const ran = Math.floor(Math.random()*dig.length)
        return dig[ran]

    }
    function genalphabets(){
      const alp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const ran = Math.floor(Math.random()*alp.length)
        return alp[ran]

    }
    function gensplcharacter(){
        const ch1 = '!@#$%^&*()-_=+[]{}|;:,.<>/?';
        const ran = Math.floor(Math.random()*ch1.length)
        return ch1[ran]
    }

    const funct = [genalphabets,gendigits,gensplcharacter]
    let selfunct = []
    for (let i =0;i<wanted.length;i++){
        if(wanted[i]=== true){
            selfunct.push(funct[i])
        }
    }

    let password = ''
    for( let i =0;i<length;i++){
        const ran = selfunct[Math.floor(Math.random()*selfunct.length)]
        password= password + ran()

    }
   return password

}