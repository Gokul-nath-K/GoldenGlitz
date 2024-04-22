import React from 'react'

const DashboardCard = () => {
  return (
    <>
    <div class="relative flex w-72 p-4 flex-col min-w-0 mb-6 break-words bg-white border-black  border-[1px] shadow-lg rounded-2xl bg-clip-border">
        <div class="flex-auto p-4">
            <div class="flex flex-wrap -mx-3">
            <div class="flex-none w-2/3 max-w-full px-3">
                <div>
                <p class="mb-0 font-sans font-semibold leading-normal text-lg">Today's Money</p>
                <h5 class="mb-0 font-bold">
                    $53,000
                    <span class="leading-normal text-sm font-weight-bolder text-lime-500">+55%</span>
                </h5>
                </div>
            </div>
            <div class="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
                <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default DashboardCard