function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function getGreeting(timeOfDay) {
    if(timeOfDay === 'morning') {
        return 'Good morning';
    }

    if(timeOfDay === 'evening') {
        return 'Good evening';
    }

    return 'Good afternoon';
}

function createGreeting(firstName, lastName, timeOfDay) {
    const greeting = getGreeting(timeOfDay)
    const name = formatName(firstName, lastName)

    return `${greeting} ${name}`;
}

console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));