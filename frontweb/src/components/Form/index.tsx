export default function Form() {

  return (

    <form className='mt-8'>
      {/* Inputs */}
      <label className='sr-only'>Nome da sua conta</label>
      <input className="border border-gray-300 
      rounded-md
      mr-3
      px-5
      py-3
      focus:outline-none
      focus:ring-pink-500
      focus:border-pink-500
      w-full"
        type="text" placeholder="Nome da sua conta" required
      />
      <label className='sr-only'>Salário recebido</label>
      <input className='border border-gray-300 
      rounded-md
      px-5
      py-3
      focus:outline-none
      focus:ring-pink-500
      focus:border-pink-500
      w-full
      mt-3
      sm:mt-0'
        type="number" placeholder="Salário recebido" required />
      {/* Buttons Div */}
      <div className="mt-5
      flex
      sm:mt-5
      sm:ml-3
      sm:flex-shrink-0
      ">
        <button className="
      bg-red-500
      px-5 py-3 
      text-white 
      rounded-md 
       flex
      items-center 
      justify-center
      
      hover:bg-red-600
      focus:outline-none
      focus:ring-2
      focus:ring-offset-2
      focus:ring-red-500
      w-full
      ">Cancelar</button>
        <button className="
      bg-pink-500
      px-5 py-3 
      text-white 
      rounded-md 
      flex
      items-center 
      justify-center
      
      hover:bg-pink-600
      focus:outline-none
      focus:ring-2
      focus:ring-offset-2
      focus:ring-pink-500
      w-full
      ">Submeter</button>
      </div>
      {/* Another form */}

    </form>

  );
}
