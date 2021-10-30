/*
Consulta sin filtros
*/
const models = require("./models");
const usr = models.Usuario;

const query = () => {
    console.log("==> Inicio de query");

    usr.findAll()
        .then( (listado) => {
            // Mostrar los datos
            listado.forEach( elem => {
                jsonObject = elem.get( {raw: true} )
                console.log( jsonObject )
            })
        } )

        .catch( (error) => {
            console.log("Error en el acceso a BD")
        })

    console.log("==> Final de query");
}


// Invocar
const invoca = setTimeout(query, 1000);