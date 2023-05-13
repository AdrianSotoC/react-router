import axios from "axios";

const CustomersPage = () => {

    const handleCustomers = () => {
        console.log("Lista Obtenida")
    }

  return (
    <>
    <div className="row">
        <div className="col">
            <h1>Customers Page</h1>
        </div>
    </div>
    <section className="row">  
        <article className="col">  
            <button className="btn btn-info" onClick={handleCustomers}>Obtener Clientes </button>
        </article>
    </section>
    </>
  )
}

export default CustomersPage