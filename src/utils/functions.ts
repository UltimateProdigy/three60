export const three60Env = {
	APPWRITE_BASE_URL: process.env.NEXT_PUBLIC_APPWRITE_URL || "",
	PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID || "",
	DATABASE_ID: process.env.NEXT_PUBLIC_DATABASE_ID || "",
	TASKS_COLLECTION_ID: process.env.NEXT_PUBLIC_COLLECTION_ID_TASKS || "",
};

export function formatDate(dateString: string) {
	const date = new Date(dateString);
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate().toString().padStart(2, "0");

	let hours = date.getHours();
	const ampm = hours >= 12 ? "PM" : "AM";
	hours = hours % 12;
	hours = hours ? hours : 12;
	const hoursStr = hours.toString().padStart(2, "0");

	const minutes = date.getMinutes().toString().padStart(2, "0");
	const seconds = date.getSeconds().toString().padStart(2, "0");

	return `${year}-${month}-${day} ${hoursStr}:${minutes}:${seconds} ${ampm}`;
}
