import { default as Logo } from '../../assets/img/logo.svg'

export default function Navbar() {
  return (
    <nav className="px-2 sm:px-4 py-2.5 rounded text-micolor-500">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex items-center">
          <img src={Logo} className="mr-3 h-10 sm:h-20" alt="Lima.Codes Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-lime-700 hover:text-lime-500">Lima.Codes</span>
        </a>
        <div className="justify-between items-center text-center w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-lime-500 hover:text-micolor-500 rounded md:bg-transparent md:text-lime-500 hover:text-micolor-500 md:p-0 dark:text-lime-600" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-lime-500 hover:text-micolor-500 rounded md:bg-transparent md:text-lime-500 hover:text-micolor-500 md:p-0 dark:text-lime-600">Calcular</a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-lime-500 hover:text-micolor-500 rounded md:bg-transparent md:text-lime-500 hover:text-micolor-500 md:p-0 dark:text-lime-600">Gastos</a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-lime-500 hover:text-micolor-500 rounded md:bg-transparent md:text-lime-500 hover:text-micolor-500 md:p-0 dark:text-lime-600">Lista</a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-lime-500 hover:text-micolor-500 rounded md:bg-transparent md:text-lime-500 hover:text-micolor-500 md:p-0 dark:text-lime-600">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
