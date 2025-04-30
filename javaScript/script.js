let name = prompt('unesi ime').trim()
let limit = 140
if (name.length> limit) {
    alert('Hej covjece, previse toga')
}
else if (!name) {
    alert('Nemozemo dalje, nista nije uneseno')
}
else {
    alert(`You have writen ${name.length} characters, you have ${limit-name.length} characters left!`)
}

