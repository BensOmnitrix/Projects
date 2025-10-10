import { useNavigate } from "react-router-dom"

export const UserSearch = ({firstName = "Lakshay", lastName="Batra"}) => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between items-center my-5">
            <div className="flex justify-center gap-3 ml-6 items-center">
                <div className="rounded-full bg-[#eaeaea] h-10 w-10 flex items-center justify-center">{firstName[0].toUpperCase()}{lastName[0].toUpperCase()}</div>
                <div className="font-semibold text-xl">{firstName} {lastName}</div>
            </div>
            <div onClick={() => {
                navigate("/transaction")
            }} className="bg-gray-900 w-30 mr-6 text-md h-10 flex items-center justify-center rounded-lg border-1 border-[#a0a3a3] cursor-pointer active:bg-gray-500"><div className="flex text-[#eaeaea] items-center justify-center h-full w-full">Send Money</div></div>
        </div>
    )
}