import React from "react";

interface IEmpty {
	title: string;
	className?: any;
}

export default function EmptyState({ title, className }: IEmpty) {
	return (
		<div
			className={`flex flex-col justify-center items-center ${className}`}
		>
			<img className="w-[100px]" src="/images/empty_state.png" alt="" />
			<p className="flex items-center justify-center mt-4">{title}</p>
		</div>
	);
}
