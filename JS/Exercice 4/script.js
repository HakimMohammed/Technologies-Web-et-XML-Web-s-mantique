const nbLines = +prompt("Un motif de taille : ")

const triangle1 = ( nbLines ) => {
    console.log('Triangle 1')
    var index = 1
    while( index <= nbLines ){
        console.log('*'.repeat(index))
        index++
    }
}

// triangle1( nbLines )

const triangle2 = (nbLignes) => {
    console.log('Triangle 2')
    for (let index = 1; index <= nbLignes; index++) {
        console.log('*'.repeat(index))
    }
}

triangle2( nbLines )