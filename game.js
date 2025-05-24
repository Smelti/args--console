const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const min = 0
const max = 100
const number = Math.floor(Math.random() * (max - min + 1)) + min

console.log(`Загадано число в диапазоне от ${min} до ${max}`)

function ask() {
  rl.question('> ', (input) => {
    const guess = Number(input)

    if (isNaN(guess)) {
      console.log("Пожалуйста, введите число.")
      ask()
    } else if (guess < number) {
      console.log("Больше")
      ask()
    } else if (guess > number) {
      console.log("Меньше")
      ask()
    } else {
      console.log(`Отгадано число ${number}`)
      rl.close()
    }
  })
}

ask()