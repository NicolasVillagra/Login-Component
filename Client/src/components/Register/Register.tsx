import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

interface userData {
  name:string,
  lastname:string,
  email:string,
  password:any
}

const Register = () => {
  const initialSate:userData = {
    name:'',
    lastname:'',
    email:'',
    password:''
  }
  const navigate = useNavigate()


  const [formData, setFormData] = useState<userData>(initialSate)

  const handleInfo = (e:any)=>{
    const { name, value} = e.target;
    setFormData({ ...formData, [name]: value })
    }

  const createUser = async (e:any)=>{
    e.preventDefault()
    setFormData(initialSate)
    try {
      await axios.post("http://localhost:3001/api/usuarios",{
      nombre:formData.email,
      password:formData.password
    })
    navigate("/login")
    
    } catch (error) {
      console.log(error);
      
    }

  }
  console.log(formData);
  


  return (
    <div>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
     
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
       Register
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={createUser} className="space-y-6" method="POST">
        <div>
          <label htmlFor="email" className="flex block text-sm font-medium leading-6 text-gray-900">
            name
          </label>
          <div className="mt-2">
            <input
        
              id="name"
              name="name"
              type="text"
              placeholder="You name"
              onChange={handleInfo}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="flex block text-sm font-medium leading-6 text-gray-900">
            last name
          </label>
          <div className="mt-2">
            <input
        
              id="lastname"
              name="lastname"
              type="text"
              onChange={handleInfo}
              placeholder="You last name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>






        <div>
          <label  className="flex block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
        
              id="email"
              name="email"
              type="email"
              onChange={handleInfo}
              placeholder="You email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label  className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
          </div>
          <div className="mt-2">
            <input

              id="password"
              name="password"
              type="password"
              onChange={handleInfo}
              placeholder="You password"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Register