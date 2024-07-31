import EmptyState from "../emptystate";

export default function RightPage() {
	return (
        <div className="absolute h-[90vh] w-[700px] top-[80px] bg-white right-0">
            <EmptyState title="Oooops!!!, No Data" className="mt-[35vh]" />
        </div>
    )
}
