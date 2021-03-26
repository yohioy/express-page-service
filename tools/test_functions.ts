
const foreach = () => {
    let ratings = [5, 4, 5]
    let sum = 0

    let sumFunction = async function (a, b)
    {
        return a + b
    }

    ratings.forEach(async function(rating) {
        sum = await sumFunction(sum, rating)
    });
    console.log(sum);
};

const forloop = async () => {
    let ratings = [5, 4, 5]
    let sum = 0

    let sumFunction = async function (a, b)
    {
        return a + b
    }

    let generator = async () => {
        for(let i=0; i < ratings.length; i++) {
            sum = await sumFunction(sum, ratings[i])
        }
        console.log(sum);
    }

    await generator();
};

const findIndex = () => {
    function isPrime(num) {
        for (let i = 2; num > i; i++) {
            if (num % i == 0) {
                return false
            }
        }
        return num > 1
    }

    //[4, 6, 8, 9, 12].findIndex(isPrime);
    console.log([4, 6, 8, 9, 12].findIndex(isPrime))
    console.log([4, 6, 7, 9, 12].findIndex(isPrime))
}

const sort = () => {
    let items = [
        { name: 'Edward', value: 21 },
        { name: 'Sharpe', value: 37 },
        { name: 'And', value: 45 },
        { name: 'The', value: -12 },
        { name: 'Magnetic', value: 13 },
        { name: 'Zeros', value: 37 }
    ];

// sort by value
    const a = items.sort(function (a, b) {
        return a.value - b.value;
    });
    console.log(a);


// sort by name
    const b = items.sort(function(a, b) {
        let nameA = a.name.toUpperCase(); // ignore upper and lowercase
        let nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });
    console.log(b);
}

//foreach();
//forloop();
//findIndex();
sort();
