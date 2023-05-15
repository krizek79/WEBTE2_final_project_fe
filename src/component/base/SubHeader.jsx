export default function SubHeader() {

    return (
        <>
            {localStorage.getItem("token") && (
                <div className="bg-azure w-full flex px-12 py-1.5 gap-x-3 items-center">
                    <span className="text-lg text-white">
                        {localStorage.getItem("firstName")} {localStorage.getItem("lastName")}
                    </span>
                        <span className="font-medium">
                        ({localStorage.getItem("role").toUpperCase()})
                    </span>
                </div>
            )}
        </>
    )
}