export const RevenueCard = ({ amount = "2,312.23", orders = 23 }) => {
  return (
    <div className="text-white rounded-md hover:bg-[#0E4F82] bg-[#146EB4]">
      <div className="p-5">
        <div className="flex">
          <div className="mb-5">Next Payout</div>
          <div className="ml-2">
            <svg
            className="shrink-0 inline w-4 h-4 mb-0.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-3xl font-lg">₹{amount}</div>
          <div className="flex justify-center">
            <div className="p-2 underline text-md">{orders} Orders</div>
            <div className="pt-3">
              <svg
                className="w-3.5 h-3.5 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-[#0E4F82] rounded-md  h-10 items-center pl-8 pr-8">
        <div>Next Payment Date:</div>
        <div>Today,4:00PM</div>
      </div>
    </div>
  );
};
