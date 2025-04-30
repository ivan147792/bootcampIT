let name = prompt('unesi ime').trim()
let limit = 20
if (name.length >= limit) {
    alert(name.slice(0, 20))
}
else if (!name) {
    alert('Nemozemo dalje, nista nije uneseno')
}
else {
    alert(`You have writen ${name.length} characters, you have ${limit-name.length} characters left!`)
}
