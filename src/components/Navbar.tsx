'use client';

import Link from "next/link";

export default function NavBar() {
	return (
		<div>
			<div className="bg-[#343333] h-10 flex justify-around">
				<div className="px-5 bg-[#4e4e4e] flex items-center">
					<Link href="/shell">Shell</Link>
				</div>

				<div className="px-5 bg-[#4e4e4e] flex items-center">
					<Link href="/History">History</Link>
				</div>
			</div>
		</div>
	);
}
