import { UserSearch } from "./UserSearch"

export const Dashboard = ({firstName="Lakshay       ", lastName="Batra"}) => {
    return (
        <div>
            <div className="flex justify-between items-center h-15 border-[#cccccc] border-b-1">
                <div className="font-bold text-2xl ml-6">Payments App</div>
                <div className="flex justify-center gap-2 mr-8">
                    <div className="text-lg pt-1">Hello, {firstName} {lastName}</div>
                    <div className="rounded-full bg-[#eaeaea] h-10 w-10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="font-bold mt-6 ml-6 text-xl">Your Balance <span className="ml-2 text-xl">$5000</span></div>
            <div className="font-bold text-2xl mt-6 ml-6">Users</div>
            <div className="m-auto mt-6 text-md h-10 w-90/100 sm:w-97/100 flex items-center rounded border-1 border-[#a0a3a3]"><input type="text" placeholder="Search users..." className="pb-0.5 h-full w-full pl-3 focus:outline-hidden"/></div>
            <div className="mt-5">
                <UserSearch /> {/* Apply a map to make many entries */}
                <UserSearch /> {/* Apply a map to make many entries */}
                <UserSearch /> {/* Apply a map to make many entries */}
                <UserSearch /> {/* Apply a map to make many entries */}
            </div>
        </div>
    )
}