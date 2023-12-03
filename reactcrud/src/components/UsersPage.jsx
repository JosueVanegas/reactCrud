import Input from './Input'
import { useState } from 'react'
function UsersPage(){
    const [inputs,setInputs] = useState({})
    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value;
        setInputs(() => ({...inputs,[name]:value}))
    }
    const handleSummit = (event)=> {
        event.preventDefault();
        console.log(inputs)
    }
    return(
        <div className="flex flex-col bg-gray-500 m-20 w-150 h-200 p-1 justify-center ">
           <div className="text-3xl ">
           <h1>Register user</h1>
           </div>
           <div className="flex text-whiter">
           <form onSubmit={handleSummit}>
                 <Input placeholder={'write your dni'} event={handleChange} name={'dni'} type={'text'}  header={'DNI'}></Input>
                 <Input placeholder={'write your email'} event={handleChange} name={'email'} type={'email'}  header={'email'}></Input>
                 <button>subir</button>
            </form>
           </div>
        </div>
    )
}
export default UsersPage