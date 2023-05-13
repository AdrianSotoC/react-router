const UseStatePage = () => {
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
          <button type="button" class="btn btn-primary">
          Users
          </button>
        </article>
      </main>
      <section className="row">
        <article className="col">
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
        </article>
      </section>
    </>
  )
}

export default UseStatePage