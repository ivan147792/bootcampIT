// function alerti() {
//     alert('Korak 1')
//     alert('Korak 2')
//     alert('Korak 3')
// }

// alerti()

// const cijenaKruha = 1.7
// let budzet = prompt('Unesi koliko novaca imas')

// function kolikoKruha(novac, kruh) {
//     let koliko = Math.floor(novac / kruh)
//     let change = (novac%(koliko*kruh)).toFixed(2)
    
//     return `Za ${novac} para ${koliko} kruhova po 
//         cijeni od ${kruh}. A ostalo je
//         ${change} para.`
// }

// console.log(kolikoKruha(budzet, cijenaKruha))


// let ime = prompt('Unesi ime')
const lista = ['Pero', 'Mika', 'Luka', 'Ana', 'Marija']
// let poruka = ''

// if (lista.includes(ime)) {
//     poruka = `Pozdrav ${ime}, dobrodosao/la nazad!`
// }
// else {
//     poruka = 'Nazalost, nismo vas prepoznali!'
// }

// alert(poruka)
// alert(`Prvo ime: ${lista[0]}, zadnje ime: ${lista[lista.length -1]}`)
const lista1 = []
function fizzBuzz(index) {
    if (index%3 === 0 && index%5 === 0) {
        lista1.push('FizzBuzz')
    }
    else if (index % 3 === 0) {
        lista1.push('Fizz')
    
    }
    else if (index % 5 === 0) {
        lista1.push('Buzz')
    }
    else {
        lista1.push(index)
    }
}

for (let i = 1; i < 101; i++) {
    // if (i%3 === 0 && i%5 === 0) {
    //     lista1.push('FizzBuzz')
    // }
    // else if (i % 3 === 0) {
    //     lista1.push('Fizz')
    
    // }
    // else if ( i % 5 === 0) {
    //     lista1.push('Buzz')
    // }
    // else {
    //     lista1.push(i)
    // }
    fizzBuzz(i)
}

console.log(lista1)