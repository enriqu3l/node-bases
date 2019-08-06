//Requires
const colors = require('colors');
const fs = require('fs');
//const fs = require('express'); //paquete no nativos
//const fs = require('./fs'); //archivos

let listarTabla = (base, limite = 10) => { //EMAC Script 6 ya permite poner valores por defecto, limite valdra 10 si este parametro no se envia!!
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`)
            return;
        }

        console.log('==========================='.green);
        console.log(` Tabla de ${base}`.green);
        console.log('==========================='.green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${ base } * ${ i } = ${ base*i }`);
        }

        /*
        fs.readFile(`./tablas/tabla-${ base }.txt`, (err, data) => {
            if (err)
                reject(err);
            else
                resolve(data);
        });*/
    });
}

let crearArchivo = ((base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`)
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base*i }\n`;
        }

        fs.writeFile(`./tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);
        });
    })
})

//module es un objeto que esta corriendo en node durante que la applicacion se ejecuta
module.exports = {
    //crearArchivo: crearArchivo //gracias a EMAC Script 6 ya no es necesario repetir la palabra
    crearArchivo,
    listarTabla
}