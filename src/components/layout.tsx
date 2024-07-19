import React, { ReactNode } from "react";
import Navbar from "./navbar";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div>
			<Navbar />
			<main>{children}</main>
		</div>
	);
}
