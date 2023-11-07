import Link from 'next/link';
export function MyTickets() {
    return (
        <div>
            <section className="w-full flex-grow bg-zinc-200 flex items-center justify-center p-4">
		<div className="flex w-full max-w-3xl text-zinc-50 h-64">
			<div className="h-full bg-zinc-900 flex items-center justify-center px-8 rounded-l-3xl">
				<img src="https://cdn.qrplanet.com/img/kb/5b4352bb6d961556373d88d0/kb/attachments/QPwdrb2XKN.png" alt="" />
			</div>
			<div className="relative h-full flex flex-col items-center border-dashed justify-between border-2 bg-zinc-900 border-zinc-50">
				<div className="absolute rounded-full w-8 h-8 bg-zinc-200 -top-5"></div>
				<div className="absolute rounded-full w-8 h-8 bg-zinc-200 -bottom-5"></div>
			</div>
			<div className="h-full py-8 px-10 bg-zinc-900 flex-grow rounded-r-3xl flex flex-col">
				<div className="flex w-full justify-between items-center">
					<div className="flex flex-col items-center">
						<span className="text-4xl font-bold">BNE</span>
						<span className="text-zinc-500 text-sm">Brisbane</span>
					</div>
					<div className="flex flex-col flex-grow items-center px-10">
						<span className="font-bold text-xs">RS 11</span>
						<div className="w-full flex items-center mt-2">
							<div className="w-3 h-3 rounded-full border-2 border-zinc-900"></div>
							<div className="flex-grow border-t-2 border-zinc-400 border-dotted h-px"></div>
							<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.9949 4H6.99488C3.16488 4 2.09488 4.92 2.00488 8.5C3.93488 8.5 5.49488 10.07 5.49488 12C5.49488 13.93 3.93488 15.49 2.00488 15.5C2.09488 19.08 3.16488 20 6.99488 20H16.9949C20.9949 20 21.9949 19 21.9949 15V9C21.9949 5 20.9949 4 16.9949 4Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8.99316 4V7.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8.99316 16.5V20" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.025 9.32991L15.645 10.5799C15.705 10.6999 15.825 10.7899 15.955 10.8099L17.335 11.0099C17.675 11.0599 17.815 11.4799 17.565 11.7199L16.565 12.6899C16.465 12.7799 16.425 12.9199 16.445 13.0599L16.685 14.4299C16.745 14.7699 16.385 15.0299 16.085 14.8699L14.855 14.2199C14.735 14.1599 14.585 14.1599 14.465 14.2199L13.235 14.8699C12.925 15.0299 12.575 14.7699 12.635 14.4299L12.875 13.0599C12.895 12.9199 12.855 12.7899 12.755 12.6899L11.765 11.7199C11.515 11.4799 11.655 11.0599 11.995 11.0099L13.375 10.8099C13.515 10.7899 13.625 10.7099 13.685 10.5799L14.295 9.32991C14.435 9.01991 14.875 9.01991 15.025 9.32991Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
							<div className="flex-grow border-t-2 border-zinc-400 border-dotted h-px"></div>
							<div className="w-3 h-3 rounded-full border-2 border-zinc-900"></div>
						</div>
						<div className="flex items-center px-3 rounded-full bg-lime-400 h-8 mt-2">
							<span className="text-sm text-zinc-900">18h 35m</span>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<span className="text-4xl font-bold">ATH</span>
						<span className="text-zinc-500 text-sm">Athens</span>
					</div>
				</div>
				<div className="flex w-full mt-auto justify-between">
					<div className="flex flex-col">
						<span className="text-xs text-zinc-400">Date</span>
						<span className="font-mono">09/06/2023</span>
					</div>
					<div className="flex flex-col">
						<span className="text-xs text-zinc-400">Departure</span>
						<span className="font-mono">17:45</span>
					</div>
					<div className="flex flex-col">
						<span className="text-xs text-zinc-400">Passenger</span>
						<span className="font-mono">Rob Stinson</span>
					</div>
					<div className="flex flex-col">
						<span className="text-xs text-zinc-400">Gate/Seat</span>
						<span className="font-mono">A11/21C</span>
					</div>
				</div>
			</div>
		</div>
	</section>
        </div>
    )
}