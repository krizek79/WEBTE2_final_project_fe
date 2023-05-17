import {useEffect, useRef, useState} from 'react';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import 'datatables.net';
import 'datatables.net-buttons/js/dataTables.buttons';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';

import $ from 'jquery';
import teacherService from "../../service/TeacherService.js";

export default function Statistics() {

    const tableRef = useRef(null)
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
        const table = $(tableRef.current).DataTable({
            responsive: true,
            dom: 'Bfrtip',
            buttons: [{
                extend: 'csv',
                className: 'mt-12 bg-dark text-white px-4 rounded-full py-3 hover:bg-azure',
            }],
        })

        return () => {
            table.destroy()
        }
    }, [])

    function fetchData() {
        teacherService.getStatistics()
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                    setData(response.data)
                }
            })
            .catch(e => {
                console.log(e.message)
            })
    }

    return (
        <div className="font-serif py-6 mx-auto max-w-4xl">
            <div className="bg-white p-5 rounded-xl shadow-xl mx-5 pb-4 flow-root">
                <div className="text-center">
                    <h3 className=" font-bold text-2xl">Teacher`s Table</h3>
                </div>
                <div className="overflow-x-auto">
                    <table
                        id="example"
                        className="table-auto mx-auto border border-collapse"
                        ref={tableRef}
                    >
                        <thead>
                            <tr className="bg-light">
                                <th className="border px-4 py-2 w-16">ID</th>
                                <th className="border px-4 py-2 w-24">Full name</th>
                                <th className="border px-4 py-2 w-16">All Task Count</th>
                                <th className="border px-4 py-2 w-24">Submit Task Count</th>
                                <th className="border px-4 py-2 w-16">Points</th>
                            </tr>
                        </thead>
                        <tbody className="mt-6">
                            {data.map((result) => {
                                return (
                                    <tr className="bg-white">
                                        <td className="border px-4 py-2">
                                            {result.studentId}
                                        </td>
                                        <td className="border px-4 py-2">
                                            {result.firstName} {result.lastName}
                                        </td>
                                        <td className="border px-4 py-2 items-center text-center">
                                            {result.totalTasks}
                                        </td>
                                        <td className="border px-4 py-2 items-center text-center">
                                            {result.solvedTasks}
                                        </td>
                                        <td className="border px-4 py-2 items-center text-center">
                                            {result.totalPoints}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}