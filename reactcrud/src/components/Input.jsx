function Input({name,header,placeholder,type,event}){
    return(
        <div className="bg-white m-5 rounded-lg  justify-center focus:shadow-lg focus:shadow-white">
            <label
            for="input"
            className="block overflow-hidden rounded-md border border-gray-200px-3 py-2  p-10 ">
            <span className="text-xs font-medium text-gray-700"> {header} </span>

            <input
                type={type} onChange={event} id="input"placeholder={placeholder} name={name} className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"/>
            </label>
        </div>
    )
}
export default Input