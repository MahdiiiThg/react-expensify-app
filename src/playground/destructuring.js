const person = {
    name: 'Lana',
    age: 26,
    location: {
        city: 'philidelphia',
        temp: 43
    }
}


const {name: Firstname = "Mahdi" , age} = person

console.log(`${Firstname} is ${age}`)

const {city , temp} = person.location

console.log(`in ${city} the temp is ${temp}`)
