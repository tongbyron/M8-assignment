//STEP 1
let movies = ['Titanic', 'Top Gun', 'Meet the Parents', 'Forrest Gump', 'Schindlers List']
console.log(movies[1])

//STEP 2
let movies = new Array(5)
movies[0] = 'Titanic'
movies[1] = 'Top Gun'
movies[2] = 'Meet the Parents'
movies[3] = 'Forrest Gump'
movies[4] = 'Schindlers List'
console.log(movies[0])

//STEP 3
let movies = new Array(5)
movies[0] = 'Titanic'
movies[1] = 'Top Gun'
movies[2] = 'Meet the Parents'
movies[3] = 'Forrest Gump'
movies[4] = 'Schindlers List'
console.log(movies[0])
movies[movies.length] = 'Back to the Future'
console.log(movies.length)

//STEP 4
let movies = ['Titanic', 'Top Gun', 'Meet the Parents', 'Forrest Gump', 'Schindlers List']
delete movies[0]
console.log(movies)

//STEP 5
let movies = ['Titanic', 'Top Gun', 'Meet the Parents', 'Forrest Gump', 'Schindlers List', 'Back to the Future', 'Terms of Endearment']
for (let i in movies) {
    console.log(movies[i])
}

//STEP 6
let movies = ['Titanic', 'Top Gun', 'Meet the Parents', 'Forrest Gump', 'Schindlers List', 'Back to the Future', 'Terms of Endearment']
for (let i of movies) {
    console.log(i)
}

//STEP 7
let movies = ['Titanic', 'Top Gun', 'Meet the Parents', 'Forrest Gump', 'Schindlers List', 'Back to the Future', 'Terms of Endearment']
for (let i of movies.sort()) {
    console.log(i)
}

//STEP 8
let movies = ['Titanic', 'Top Gun', 'Meet the Parents', 'Forrest Gump', 'Schindlers List', 'Back to the Future', 'Terms of Endearment']
let leastFavMovies = ['The Passion of the Christ', 'The Joy Luck Club', 'The Killing Fields']
console.log('Movies I like:\n\n')
for (let i of movies) {
    console.log(i)
}
console.log('\nMovies I regret watching:\n\n')
for (let i of leastFavMovies) {
    console.log(i)
}

//STEP 9
let movies = ['Titanic', 'Top Gun', 'Meet the Parents', 'Forrest Gump', 'Schindlers List', 'Back to the Future', 'Terms of Endearment']
let leastFavMovies = ['The Passion of the Christ', 'The Joy Luck Club', 'The Killing Fields']
movies = movies.concat(leastFavMovies).sort().reverse()
for (let i of movies) {
    console.log(i)
}

//STEP 10
let movies = ['Titanic', 'Top Gun', 'Meet the Parents', 'Forrest Gump', 'Schindlers List', 'Back to the Future', 'Terms of Endearment']
let leastFavMovies = ['The Passion of the Christ', 'The Joy Luck Club', 'The Killing Fields']
movies = movies.concat(leastFavMovies).sort().reverse()
let lastItem = movies.find((value, index, array) => {
    return index == movies.length - 1
    })
console.log(lastItem)

//STEP 11
let movies = ['Titanic', 'Top Gun', 'Meet the Parents', 'Forrest Gump', 'Schindlers List', 'Back to the Future', 'Terms of Endearment']
let leastFavMovies = ['The Passion of the Christ', 'The Joy Luck Club', 'The Killing Fields']
movies = movies.concat(leastFavMovies).sort().reverse()
let firstItem = movies.find((value, index, array) => {
    return index == 0
    })
console.log(firstItem)

//STEP 12
let movies = ['Titanic', 'Top Gun', 'Meet the Parents', 'Forrest Gump', 'Schindlers List', 'Back to the Future', 'Terms of Endearment']
let leastFavMovies = ['The Passion of the Christ', 'The Joy Luck Club', 'The Killing Fields']
for (let i of leastFavMovies) {
    leastFavMovies[leastFavMovies.indexOf(i)] = movies[leastFavMovies.indexOf(i)];
}
console.log(leastFavMovies)

//STEP 13          
let movies = [["Titanic", 1], ["Top Gun", 2], ["Meet the Parents", 3], ["Forrest Gum", 4], ["Schindlers List", 5]];
movies.forEach((movie) => {
    let movieNames = movie.filter((item) => {
        return typeof item === 'string'
        })
        console.log(movieNames)
    })

//STEP 14
let employees = ['ZAK', 'JESSICA', 'MARK', 'FRED', 'SALLY']
const showEmployee = function(employees) {
    for (let i in employees) {
        console.log(employees[i])
    }
};
showEmployee(employees);

//STEP 15
const filterValues = function(values) {
    let filteredArray = values.filter((item) => {
        return (item != false && item !== null && item != 0 && item != '')
        })
        return filteredArray;
};
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

//STEP 16
const getRandomItem = function(numbers) {
    console.log(numbers[Math.round((numbers.length - 1) * Math.random())])
};
getRandomItem([0, 1, 2]);

//STEP 17
const getLargestNumber = function(numbers) {
    numbers = numbers.sort();
    console.log(numbers[numbers.length - 1])
};
getLargestNumber([0, 3, 2]);