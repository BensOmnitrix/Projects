import { useNavigate } from "react-router-dom"

export const Signup = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#fbfbfb]">
            <div className="shadow-xl/30 w-100 rounded-md bg-white">
                <div className="flex justify-center font-bold text-4xl mt-5 mb-3">Sign Up</div>
                <div className="flex justify-center text-gray-500">Enter your information to create an</div>
                <div className="flex justify-center text-gray-500">account</div>
                <div className="mt-6 ml-10">
                    <div className="font-semibold mb-2">First Name</div>
                    <div className="w-87/100 text-md h-10 flex items-center rounded border-1 border-[#a0a3a3] mb-3"><input type="text" placeholder="First Name" className="pb-0.5 h-full w-full pl-3 focus:outline-hidden"/></div>
                    <div className="font-semibold mb-2">Last Name</div>
                    <div className="w-87/100 text-md h-10 flex items-center rounded border-1 border-[#a0a3a3] mb-3"><input type="text" placeholder="Last Name" className="pb-0.5 h-full w-full pl-3 focus:outline-hidden"/></div>
                    <div className="font-semibold mb-2">Email</div> { /*username == email */}
                    <div className="w-87/100 text-md h-10 flex items-center rounded border-1 border-[#a0a3a3] mb-3"><input type="email" placeholder="Email" className="pb-0.5 h-full w-full pl-3 focus:outline-hidden"/></div>
                    <div className="font-semibold mb-2">Password</div>
                    <div className="w-87/100 text-md h-10 flex items-center rounded border-1 border-[#a0a3a3] mb-3"><input type="password" placeholder="Password" className="pb-0.5 h-full w-full pl-3 focus:outline-hidden"/></div>
                </div>
                <div className="bg-gray-900  w-785/1000 mt-6 ml-10 text-md h-10 flex items-center justify-center rounded border-1 border-[#a0a3a3] cursor-pointer active:bg-gray-500"><div className="flex text-[#eaeaea] items-center justify-center h-full w-full">Sign up</div></div>
                <div className="flex justify-center mt-5 mb-7 pr-2">
                    <div>
                        Already have an account ? 
                    </div>
                    <div onClick={() => {
                        navigate("/signin");
                    }} className="ml-1 underline cursor-pointer active:text-gray-500">Sign in</div></div>
            </div>
        </div>
    )
}