/* Crea una lista con los siguientes elementos:

- Tu nombre (string)
- Tu apellido (string)
- Tu edad (number)
- ¿Eres desarrollador de aplicaciones web? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
- Tu pasatiempos favoritos (Array)
- Declara una funcion miActividadFavorita la cual retorne un string con la accion que mas te guste realizar */

var nombre = "Danuil"
var apellido = "Santiago"
var edad = 48
Desarrollador = true
FechaDeNacimiento = new Date ("09/04/1974")
MiLibroFavorito = {
    Título: "La Biblia",
    Autor: "Jehová",
    Fecha: "desde siempre",
    url: "https://www.jw.org/es/biblioteca/biblia/biblia-estudio/libros/"
}
Pasatiempos = ["Leer", "Bailar", "Montar bici", "escuchar música"]
function miActividadFavorita() {
    console.log ("Mi actividad favorita es la lectura")
}

console.log (nombre)
console.log (apellido)
console.log (edad)
console.log (Desarrollador)
console.log (FechaDeNacimiento)
console.log (MiLibroFavorito)
console.log (Pasatiempos)
miActividadFavorita()