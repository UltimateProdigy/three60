import React from "react";

interface IEmpty {
	title: string;
}

export default function EmptyState({ title }: IEmpty) {
	return (
		<div className="flex justify-center">
			<div>
				<div>
                    
                </div>
				<p className="flex items-center justify-center mt-4">{title}</p>
			</div>
		</div>
	);
}
