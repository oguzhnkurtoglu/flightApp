import data from "../../data/data.json"

const Index = () => {
  return (
    
        <ul className={`" bg-white rounded-xl w-[400px] h-[100px] overflow-y-scroll  text-slate-500 scroll-m-1`} >
            {data.map((item,Index)=> (<li className=" hover:text-black" key={Index}> {item.arrival_airport_name}</li>))}
        </ul>
      
  )
}

export default Index