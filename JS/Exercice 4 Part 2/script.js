const nbLines = +prompt("donnez taille du motif : ")

const pyramid = (nbLignes ) => {
    const totalStars = ( nbLignes - 1 ) * 2 + 1
    for (let index = 1; index <= nbLignes; index++) {
        console.log(" ".repeat(nbLignes - index)+'*'.repeat(totalStars - ( nbLignes - index ) * 2 ))
    }
}

pyramid(nbLines)