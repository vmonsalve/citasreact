import Paciente from "./Paciente"
function ListadoPacientes() {
  return (
    <div className="md:w-1/2 lg:w-3/5 ">
        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Administrar tus {''}
          <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        </p>
        <div className="md:h-screen overflow-y-scroll">

          <Paciente />
          <Paciente />
          <Paciente />
          <Paciente />
          <Paciente />
          <Paciente />
        </div>
    </div>
  )
}

export default ListadoPacientes