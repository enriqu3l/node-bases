const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let commando = argv._[0];

switch (commando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ', colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log(`Commando '${commando}' no reconocido`);
        break;
}

//console.log(argv);

//Esta forma de leer parametros de la linea de comando es muy frajil
//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];