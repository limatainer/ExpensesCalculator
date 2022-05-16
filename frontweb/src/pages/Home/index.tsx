import { default as Calculator } from '../../assets/img/undraw_calculator_re_alsc.svg'
export default function Home() {
  return (
    <>

      <br />
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img src={Calculator} className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" alt="Lima.Codes Logo" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Expenses Calculator</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Making financial plans together with you</a>
            <p className="mt-2 text-slate-500">
              Wanna make plans for a future aquisition and need a tool to help you with the math?
              Go to Calculator up on the menu options and start planing right away
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
