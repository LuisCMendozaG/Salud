const PacienteModel = require("../schemas/Paciente.schema");

module.exports.getById = async function(id){
    const usuario = await UsuarioModel.findById(id);
    return usuario;
}

module.exports.get = async function(){
    const result = await UsuarioModel.find();
    return result;
}
//unamamadacualquiera

module.exports.save = async function (paciente) {
    const newPaciente = PacienteModel(paciente);
    const result = newPaciente.save();
    return result;
}