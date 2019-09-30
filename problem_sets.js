function display(name, address, telephone, major){
    return{ 
        name:name, 
        address: address, 
        telephone: telephone,
        major: major
    }
}

// console.log(display("kudzanayi", "wash heights", 91425746785, "history"))

function sales(sales, profit){
    return sales * profit
}

// console.log(sales(500, 0.23))

function land(land){
    return land / 43560
}

console.log(land(1000000))

// function total(...price){
//     let subtotal = 0
//     let tax = 0.6
//     let total = 0

//     subtotal += price
//     console.log(`Subtotal is ${subtotal}`)
//     console.log(`Tax: 6%`)
//     total = subtotal * tax
//     console.log(`Total is ${total}`)
// }

// console.log(total(1,2,3,4))

function distance(speed){

    let fiveHours = speed * 5
    let eightHours = speed * 8
    let twleveHours = speed * 12 

    console.log(fiveHours, eightHours, twleveHours)
}

distance(20)