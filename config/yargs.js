//YARGS
//Esta libreria nos ayuda a mandar comandos y parametros a travez de la consola y crear documentacion sobre su uso.

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('crear', 'Crea un archivo con la tabla de multiplicar', opts)
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}