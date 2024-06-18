class usuario{
    constructor(nombre, documento, correo, telefono){
        this.nombre = nombre;
        this.documento = documento;
        this.correo = correo;
        this.telefono = telefono;
    }
    saludar(){
        return `Hola mi nombre es ${this.nombre}, mi documento es ${this.documento}, mi correo es ${this.correo} y mi telefono es ${this.telefono}`
    }
}
function agregar(){
    let nom = document.getElementById("nombre").value;
    let doc = document.getElementById("documento").value;
    let corr = document.getElementById("correo").value;
    let tel = document.getElementById("telefono").value;
    let user = new usuario(nom, doc, corr, tel)
    let ins = document.getElementById("insertar");
    ins.innerHTML = user.saludar();
    return console.log(user)
}


