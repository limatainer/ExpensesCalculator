import React from 'react'
import Form from '../../components/Form'
export default function FormPage() {
  return (
    <div className="flex flex-wrap -mx-px mt-3 text-center overflow-hidden sm:-mx-px md:-mx-1 lg:-mx-px xl:-mx-1">
      <div className="my-px px-px w-full overflow-hidden sm:my-px sm:px-px sm:w-full md:my-1 md:px-1 md:w-1/2 lg:my-px lg:px-px lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
        {/* <!-- Coluna Esquerda --> */}
        <br />
        <h1 className="
        inline
        text-3xl
        font-extrabold
        tracking-tight
        sm:text-4xl
        sm:block
        ">Expenses Calculator</h1>
        <br />
        <h3 className="
        inline
        text-3xl
        font-extrabold
        tracking-tight
        text-indigo-500
        sm:text-4xl
        sm:block
        ">Let us do the math and help you find your target to safe money</h3>
        <br />
        <Form />
      </div>
      {/* <!-- Coluna direita --> */}
      <div className="my-px px-px w-full 
      overflow-hidden sm:my-px sm:px-px sm:w-full md:my-1 
      md:px-1 md:w-1/2 lg:my-px lg:px-px lg:w-1/2 xl:my-1 xl:px-1 
      xl:w-1/2">
        <br />
        <h1 className='inline
        text-3xl
        font-extrabold
        tracking-tight
        sm:text-4xl
        sm:block'>Resultado da Análise</h1>
      </div>

    </div>
  )
}
