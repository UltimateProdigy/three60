export function getStatusColor(status: any) {
	let statusColor;
	switch (status) {
		case "IN-PROGRESS":
			statusColor = "blue";
			break;
		case "COMPLETED":
			statusColor = "green";
			break;
		case "OVERDUE":
			statusColor = "orange";
			break;
		case "BACKLOG":
			statusColor = "black";
			break;
		case "TRASH":
			statusColor = "red";
			break;
		default:
			statusColor = "rgba(0,0,0,0.1)";
			break;
	}
	return statusColor;
}
