/**
 * 
 * @component
 * @description Компонент футера приложения.
 * @returns {JSX.Element}
 */
function Footer() {
  return (
    <div className="container text-center mt-5">
      <h4> © {new Date().getFullYear()}</h4>
      <a href="https://github.com/kilsler/USM_React/tree/main/03-hooks-render-list"> 
        https://github.com/kilsler/USM_React/tree/main/03-hooks-render-list
      </a>
    </div>
  )
}

export default Footer