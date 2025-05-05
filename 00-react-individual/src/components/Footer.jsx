
/**
 * @component
 * @description Футер.
 * @returns {JSX.Element}
 */
function Footer() {
  return (
    <div className="bg-gray-800 w-full h-16 text-sky-200 text-xl flex flex-col items-center justify-center gap-2 p-8">
      <div className="items-center justify-center flex flex-row gap-2">
        <h4> © {new Date().getFullYear()}</h4>
        <a className="text-sky-500 hover:underline text-lg" href="https://github.com/kilsler/USM_React/tree/main/05-api">
          https://github.com/kilsler/USM_React/tree/main/05-api
        </a>
      </div>
    </div>
  )
}

export default Footer