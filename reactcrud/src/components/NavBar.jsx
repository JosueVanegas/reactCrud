import { Link } from "react-router-dom"

export default function NavBar(){

    return(
        <div className="flex bg-gray-900 mb-10 w-full gap-20 ">
            <div className="pl-10 p-10">
                <img src="" alt="" />
                <h1 className="text-3xl transition-all text-gray-500 cursor-pointer hover:text-white hover:scale-110">ReactCrud</h1>
            </div>
            <div className="p-10"> 
                <nav >
                    <ul >
                        {
                        menuItemsLinks.map((item,index)=>(
                            <Link className="text-2xl p-5 transition-all text-gray-500 hover:text-white"
                            key={index} to={item.linkRoute}>
                            {item.Name}
                            </Link>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

const menuItemsLinks = [
    {Name :'Home',linkRoute : ''},
    {Name :'Users',linkRoute : '/users'},
    {Name :'Products',linkRoute : '/products'}
]