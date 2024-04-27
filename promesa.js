// conversacion:

function Pregunta() {
    return new Promise((resolve, reject) => {
        const pregunta = "¿como hace el gato?";
        console.log("Profesor: " + pregunta);

        setTimeout(() => {
            const respuesta = "miau"; 

            if (respuesta.toLowerCase() === "miau") {
                resolve("Correcto");
            } else {
                reject("Incorrecto");
            }
            console.log("Estudiante: " + respuesta);

        }, 2000); 

    });
}

console.log("pere profe");


Pregunta()

    .then(respuesta => {
        console.log("Profesor: " + respuesta); 
    })

    .catch(error => {
        console.error("Profesor: " + error); 

    });

// ------------------------------------------------- con alert

function Pregunta() {
    return new Promise((resolve, reject) => {
        const pregunta = "¿Cómo hace el gato?";
        setTimeout(() => {
            alert("Profesor: " + pregunta);

            setTimeout(() => {
                const respuesta = prompt("Estudiante: "); 

                if (respuesta && respuesta.toLowerCase() === "miau") {
                    resolve("¡Correcto!");
                } else {
                    reject("¡Incorrecto!");
                }

            }, 1000); 

        }, 1000); 

    });
}

setTimeout(() => {
    alert("el profe pregunta");

    Pregunta()
        .then(respuesta => {
            alert("Profesor: " + respuesta); 
        })
        .catch(error => {
            alert("Profesor: " + error); 
        });
}, 1000);


