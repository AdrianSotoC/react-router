import { useState } from "react";
import axios from "axios";

const UseStatePage = () => {

  const [customers, setCustomers] = useState([]);

  const getUsers = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(resp.data)
    setCustomers(resp.data)
  }

  return (
    <>
      <header>
        <div className="row">
            <div className="col">
                <h1>Use State Page</h1>
            </div>
        </div>
      </header>
      <main className="row">
        <article className="col">
          <button type="button" class="btn btn-primary" onClick={getUsers}>
          Get Users
          </button>
        </article>
      </main>
      <section className="row">
        <article className="col">
        <ul className="list-group">
          {
            customers.map((customer) => (<li key={customer.id} className="list-group-item">{customer.name}</li>))
          }
        </ul>
        </article>
      </section>
    </>
  )
}

export default UseStatePage