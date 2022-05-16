export default function Form() {

  return (

    <form className='mt-8 w-full'>
      {/* Inputs */}
      <label className='sr-only'>Nome da sua conta</label>
      <input className="border border-indigo-500 
      rounded-md
      my-3
      px-5
      py-3
      focus:outline-none
      focus:ring-indigo-300
      focus:border-purple-700
      "
        type="text" placeholder="Nome da sua conta" required
      />
      <label className='sr-only'>Salário recebido</label>
      <input className='border border-indigo-500 
      rounded-md
      px-5
      py-3
      focus:outline-none
      focus:ring-indigo-300
      focus:border-purple-700
      
      m-3
      sm:mt-0'
        type="number" placeholder="Salário recebido" required />
      <label className='sr-only'>Despesas Fixas</label>
      <input className='border border-indigo-500 
      rounded-md
      px-5
      py-3
      focus:outline-none
      focus:ring-indigo-300
      focus:border-purple-700
      
      m-3
      sm:mt-0'
        type="number" placeholder="Despesas Fixas" required />
      <label className='sr-only'>O que quer comprar</label>
      <input className='border border-indigo-500 
      rounded-md
      px-5
      py-3
      focus:outline-none
      focus:ring-indigo-300
      focus:border-purple-700
      
      m-3
      sm:mt-0'
        type="number" placeholder="Valor" required />
      {/* Buttons Div */}
      <div className="
      flex
      sm:mt-5
      sm:ml-3
      sm:flex-shrink-0
      ">
        <button className="
        mx-3
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
      bg-indigo-500
      px-5 py-3 
      text-white 
      rounded-md 
      flex
      items-center 
      justify-center
      mx-3
      hover:bg-pink-600
      focus:outline-none
      focus:ring-2
      focus:ring-offset-2
      focus:ring-indigo-500
      w-full
      ">Submeter</button>
      </div>
    </form>

  );
}
