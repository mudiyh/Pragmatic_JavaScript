//Objetos
//Creamos un Objeto
const object = {}
console.log(object);

//Otra manera de Crear un Objeto (Nadie la utiliza)
const object1 = new Object();
console.log(object1);

//Objeto con mis Datos
const PragmaticCoder = {
    Nombre : "Pragmatic Coder",
    Edad : 24,
    Github : "https://github.com/Zelechos",
    Stack : ["Java","Python","JavaScript","Html","Css","Git"],
    Contactos : {
        Email : "zelechos@hotmail.com",
        Cel : 78662983,
        Facebook : "https://www.facebook.com/PragmaticCodersGroup/",
        Twitter : "@CoderPragmatic",
        LinkedIn : "https://www.linkedin.com/in/alex-tumiri-huanca-6462851b0/"
    },
    Saludo : function(){
        alert("Welcome, Pragmatic!!!!!");
    },
    Portafolio : function(){
        document.write("<h2>My Stack :</h2>");
        document.write("<ul>");
        this.Stack.forEach(function(element,index){
            document.write(`<li>${index}.- ${element}</li>`);
        });
        document.write("</ul>");
    },
    ShowMe : function(){
        document.write(
            `<h1>Hola soy, ${this.Nombre}</h1>
                <h4>Sigueme en<a href="https://twitter.com/CoderPragmatic" target = "_blank">${this.Contactos.Twitter}</a></h4>
                <h4><a href="${this.Github}" target = "_blank">Mi GitHub</a></h4>
        `);
    }
}
//Manera de Acceder a los Atributos del Objeto
console.log(PragmaticCoder["Github"]);
console.log(PragmaticCoder["Nombre"]);
console.log(PragmaticCoder["Edad"]);

//La Manera mas Usada para Acceder a los Atributos de un Objeto
console.log(PragmaticCoder.Stack);
console.log(PragmaticCoder.Contactos);
console.log(PragmaticCoder.Contactos.Twitter);

PragmaticCoder.ShowMe();
PragmaticCoder.Saludo();
PragmaticCoder.Portafolio();

//Crea un Array con todos los Atributos de Tu Objeto
console.log(Object.keys(PragmaticCoder));

//Crea un Array con los valores de los Atributos del Objeto
console.log(Object.values(PragmaticCoder));

//Para verificar si el Objeto indicado tiene esa propiedad
console.log(PragmaticCoder.hasOwnProperty("Nombre"));
console.log(PragmaticCoder.hasOwnProperty("ether"));


