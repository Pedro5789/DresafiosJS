let est = [10,23,15,78]
    let vend = [3,20,10,13]
    let resul = []
    
    const rest = (est, vend)=>{
        for (i = 0;i<=3;i++){
            resul.push(est[i]- vend[i])
        }
        console.log(`Unidades restantes: [${resul}]`)
    }
    rest(est,vend)
