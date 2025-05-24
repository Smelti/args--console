const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')


const argv = yargs(hideBin(process.argv))
    .command('current', 'Показать текущую дату/время', (yargs) => yargs
        .option('year', {
            alias: "y",
            type: "boolean",
            description: "Текущий год"
        })
        .option('month', {
            alias: "m",
            type: "boolean",
            description: "Текущий месяц"
        })
        .option('date', {
            alias: "d",
            type: "boolean",
            description: "Текущая дата"
        }))
    .command('add', 'Добавить', (yargs => {
        yargs.option('days', {
            alias: 'd',
            type: 'number',
            describe: 'Добавить Количество дней'
        })
        yargs.option('months', {
            alias: 'm',
            type: 'number',
            describe: 'Добаить Количество месяцев'
        })
    }))
    .command('sub', 'Вычесть', (yargs => {
        yargs.option('days', {
            alias: 'd',
            type: 'number',
            describe: 'Вычесть Количество дней'
        })
        yargs.option('months', {
            alias: 'm',
            type: 'number',
            describe: 'Вычесть Количество месяцев'
        })
    })).argv

const command = argv._[0]
const now = new Date()

if (command === 'current') {
    if (argv.year) {
        console.log(now.getFullYear())
    } else if (argv.month) {
        console.log(now.getMonth() + 1)

    } else if (argv.date) {
        console.log(now.getDate())

    } else { console.log(now.toISOString().split('T')[0]) }
}

if (command === 'add') {
    if (argv.days) {
        now.setDate(now.getDate() + argv.days)
    }
    if (argv.months) {
        now.setMonth(now.getMonth() + argv.months)
    }
    console.log(now.toISOString().split('T')[0])
}

if (command === 'sub') {
    if (argv.days) {
        now.setDate(now.getDate() - argv.days)
    }
    if (argv.months) {
        now.setMonth(now.getMonth() - argv.months)
    }
    console.log(now.toISOString().split('T')[0])
}
