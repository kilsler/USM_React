
/**
 * 
 * @component
 * @description Компонент заголовка приложения.
 * @returns {JSX.Element}
 */
function Header() {
  return (
    <>
      <nav className="navbar bg-body-tertiary bg-success bg-opacity-10 border-bottom border-danger border-3 border-opacity-75">
        <div className="container-fluid m-1 justify-content-around">
          <a className="navbar-brand " href="#">
            <img src="src\assets\pizza-logo.png" alt="" width="50" height="50" class="d-inline-block align-text-top"/>
            <span className="align-middle font-monospace fs-4">Pizza la Luigi</span>
          </a>
          <form className="d-flex" >
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </>
  )
}

export default Header