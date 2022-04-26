import { palavraJardimMedicinal } from "../content/XMLJardimMedicinal";


function Sorteio(doenca, level) {
    var questoes =[]
    const matriz =
        [[8, 10, 10, 9, 12],
        [11, 11, 10, 9, 10],
        [9, 9, 9, 7, 8],
        [11, 11, 11, 9, 11],
        [10, 10, 11 ,10, 11]]
    const max = matriz[doenca][level-1]
    
    for (let i = 0; i < level; i++) {
        let sorteio = Math.floor(Math.random() * (max - i));
        if (questoes.includes(sorteio) === false)
            questoes.push(sorteio)
        else {
            i--;
        }
    }
    return questoes
}  
    
export function RandomWord(level) { 
   
    var palavra = [2], indexQ = [], vet = [];
        let i = 0;    
        indexQ = Sorteio(1, level)
        while(i < level) {
            palavra = palavraJardimMedicinal(indexQ[i], level);
            vet.push(palavra)
            i++;
         }

    return vet
}