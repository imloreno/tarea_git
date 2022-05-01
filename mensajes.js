require("colors")

const mostrarMenu = () => {
	console.clear()
	console.log("=======================")
	console.log("Seleccione un número")
	console.log("=======================")
	const readline = require("readline").createInterface({
		input: process.stdin,
		output : process.stdout
	})
	readline.question('Ingrese su nombre: ', (opt)=>{
		console.log("Hola "+opt.green+", espero que tengas un buen día.");
		readline.close();
	})
}

module.exports ={mostrarMenu}

