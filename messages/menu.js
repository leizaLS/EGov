let json = require ('../json/links.json')
const options = [1, 2, 3, 4, 5, 6, "avanzados", "ingresantes"]

const msg_default = "Hola, bienvenido al bot de la UNAJ👋. Para poder ver las opciones disponibles ingresa 'menu'."
const menu = "¿En qué puedo ayudarte?\n🟢*Para acceder a una opción ingrese el número.* Ejemplo: 3 para acceder a los horarios\n" +
            "1) _Calendario Académico_\n" +
            "2) _Planes de estudios_\n" +
            "3) _Horarios_\n" +
            "4) _Email de institutos_\n" +
            "5) _Mapa UNAJ/sedes_\n" +
            "6) _Carreras disponibles en la UNAJ_\n"

//1-calendario
//2-plan de estudios
//3-horarios (elegir opcion) -> avanzados/ingresantes
//4-email
//5-mapa unaj
//6-carreras disponibles

async function newMessage (client, message){
    //console.log("entré en a las opciones:" + message.body)
    var temp_msg = (message.body).replace(/\s/g, '').replace(/[^\w\s]/gi, '').toLowerCase().toString();

    let msg = ``;
 
    if (temp_msg === "menu"){
        msg += menu;
    }
    if (temp_msg === "1") {
        msg += `${json["1"]}`;
    }
    if (temp_msg === "2") {
        msg += `${json["2"]}`;
    }
    if (temp_msg === "3") {
        msg += `${json["3"]}`;
    }
    if (temp_msg === "ingresantes") {
        msg += `${json["ingresantes"]}`;
    }
    if (temp_msg === "avanzados") {
        msg += `${json["avanzados"]}`;
    }
    if (temp_msg === "5") {
        msg += `${json["5"]}`;
    }
    await client.sendMessage(message.from, msg);

    
    //let jsonlist = '{"1":"hola" , "2":"chau" , "3":"adios"}'
    //let msg = '1'
    //if (jsonlist.includes(msg)) {
    //    console.log("respuesta: " + JSON.parse(jsonlist)[msg]);
    //}
    //else {
    //    console.log("no entendi, intenta nuevamente");
    //    //pedir poner palabras claves o menu
    //}
}

module.exports = { newMessage }

