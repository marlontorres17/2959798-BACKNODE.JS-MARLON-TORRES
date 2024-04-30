// // calback

// function usuario(callback){
//     setTimeout(() => {
//         var usuario = {id: 1, nombre: "Federico", apellido: "loco"};
//         callback(usuario);
//     }, 5000);
// }

// usuario(usuario => {
//     console.log('aca esta el usuario', usuario)
// });

// promesa

// function data(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             var data = [1, 2, 3, 4, 5];
//             resolve(data);
//         }, 5000)
//     });
// }

// data()
// .then(data => {
//     console.log("datos obtenidos", data);
// })
// .catch(error => {
//     console.error('asi no es', error);
// });

// promesa encadenada

// function data() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = [100, 20, 300, 54, 98];
//             resolve(data);
//         }, 2000);
//     });
// }

// data()
// .then(data => {
//        return data.map(item => item * 2);
//  })
//   .then(mData => {
//     console.log('Datos multiplicados x 2', mData);
//  })
//  .catch(error => {
//    console.error('Error:', error);
//  });


// Async Await
// async function subir() {
//     await new Promise(resolve => setTimeout(resolve, 3000));
//     return 'el señor subio';
// }

// async function main() {
//     try {
//         console.log('el señor esta subiendo');
//         const result = await subir();
//         console.log(result);
//     } catch (error) {
//         console.error('el señor no pudo subir =(', error);
//     }
// }

// main();

// callback aninado

// function usuario(usuarioId, callback) {
//     usuario(usuario=> {
//         fotos(usuario.id, fotos => {
//             callback(fotos);
//         });
//     });
// }

// function fotos(usuarioId, callback) {
//     setTimeout(() => {
//         var fotos = ['foto en la playa', 'foto con un dinosaurio', 'foto cenando'];
//         callback(fotos);
//     }, 2000);
// }

// fotos(1, fotos => {
//     console.log('fotos del usuario', fotos);
// });
 
// manejo erroros

// async function dividir (a, b) {
//     if (b === 0) {
//         throw new Error('no de divide por cero')
//     }

//     return a / b;


// }

// async function main(){
//     try{
//         var resultado = await dividir(10, 0);
//         console.log('resultado', resultado );
//     }catch (error){
//         console.error('error aprenda a dividir', error.message)
//     }

// }

// main();











