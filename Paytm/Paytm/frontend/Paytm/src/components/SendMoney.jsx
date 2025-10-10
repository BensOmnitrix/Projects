export const SendMoney = ({recieverFirstName="Nandika", recieverLastName="Batra"}) => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#fbfbfb]">
            <div className="shadow-xl/30 w-100 rounded-md bg-white">
                <div className="flex justify-center font-bold text-4xl mt-5 mb-3">Send Money</div>
                <div className="mt-10 flex items-center ml-9 gap-3">
                    <div className="rounded-full bg-[#eaeaea] h-12 w-12 flex items-center justify-center text-xl">{recieverFirstName[0].toUpperCase()}{recieverLastName[0].toUpperCase()}</div>
                    <div className="text-xl">{recieverFirstName} {recieverLastName}</div>
                </div>
                <div className="mt-6 ml-10">
                    <div className="font-semibold mb-2">Amount (in Rs)</div>
                    <div className="w-87/100 text-md h-10 flex items-center rounded border-1 border-[#a0a3a3] mb-3"><input type="email" placeholder="Enter Amount" className="pb-0.5 h-full w-full pl-3 focus:outline-hidden"/></div>
                </div>
                <div className="bg-gray-900 mb-7 w-785/1000 mt-6 ml-10 text-md h-10 flex items-center justify-center rounded border-1 border-[#a0a3a3] cursor-pointer active:bg-gray-500"><div className="flex text-[#eaeaea] items-center justify-center h-full w-full">Initiate Transfer</div></div>
            </div>
        </div>
    )
}