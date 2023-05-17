import { useEffect, useRef } from 'react';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import 'datatables.net';
import 'datatables.net-buttons/js/dataTables.buttons';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';

import $ from 'jquery';

    const StudentDetailsTable = () => {
        const tableRef = useRef(null);

        /*
    //variable to save and show data
    constructor(props) {
        super(props)
        this.state = {
            data: [],

        }}
    componentDidMount() {
        //Get all users details in table
        axios.get('http://localhost/getList.php').then(res =>
        {
            //Storing users detail in state array object
            this.setState({data: res.data});

        });
        */

        useEffect(() => {
            const table = $(tableRef.current).DataTable({
                responsive: true,
                dom: 'Bfrtip',
                buttons: [{
                    extend: 'csv',
                    className: 'mt-12 bg-dark text-white px-4 rounded-full py-3 hover:bg-azure',
                }],
            });

            return () => {
                table.destroy(); // Cleanup DataTable when component unmounts
            };
        }, []);


        //Datatable HTML
        return (
            <div className="font-serif max-w-4xl py-6 mx-auto">
                <div className="bg-wite p-5  rounded-xl shadow-xl mx-5 pb-4 flow-root">
                    <div className="text-center">
                        <h3 className="font-bold text-2xl">Student Detail Table</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table
                            id="example"
                            className="table-auto mx-auto border border-collapse"
                            ref={tableRef}
                        >
                            <thead>
                            <tr className="bg-light">
                                <th className="border px-4 py-2 w-32">File</th>
                                <th className="border px-4 py-2 w-16">Task</th>
                                <th className="border px-4 py-2 w-16">Answer</th>
                                <th className="border px-4 py-2 w-16">Solution</th>
                                <th className="border px-4 py-2 w-16">Correctness</th>
                                <th className="border px-4 py-2 w-16">Points</th>
                            </tr>
                            </thead>
                            <tbody className="mt-6">

                            {/* Data to table*/}
                            {/*{this.state.data.map((result) => {*/}
                            {/*    return (*/}
                            {/*        <tr className="bg-white">*/}
                            {/*                <td className="border px-4 py-2">{result.file_name}</td>*/}
                            {/*                <td className="border px-4 py-2">{result.task_id}</td>*/}
                            {/*                <td className="border px-4 py-2 items-center text-center">{result.student_answer}</td>*/}
                            {/*                <td className="border px-4 py-2 items-center text-center">{result.solution}</td>*/}
                            {/*                <td className="border px-4 py-2 items-center text-center">{result.correctness}</td>*/}
                            {/*                <td className="border px-4 py-2 items-center text-center">{result.points}</td>*/}
                            {/*        </tr>*/}
                            {/*    )*/}
                            {/*})}*/}

                            <tr className="bg-white">
                                <td className="border px-4 py-2">blokovka1</td>
                                <td className="border px-4 py-2">2</td>
                                <td className="border px-4 py-2 items-center text-center">10</td>
                                <td className="border px-4 py-2 items-center text-center">10</td>
                                <td className="border px-4 py-2 items-center text-center">correct</td>
                                <td className="border px-4 py-2 items-center text-center">2</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="border px-4 py-2 ">blokovka1</td>
                                <td className="border px-4 py-2">2</td>
                                <td className="border px-4 py-2 items-center text-center">10</td>
                                <td className="border px-4 py-2 items-center text-center">10</td>
                                <td className="border px-4 py-2 items-center text-center">correct</td>
                                <td className="border px-4 py-2 items-center text-center">2</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="border px-4 py-2 ">blokovka1</td>
                                <td className="border px-4 py-2">2</td>
                                <td className="border px-4 py-2 items-center text-center">10</td>
                                <td className="border px-4 py-2 items-center text-center">10</td>
                                <td className="border px-4 py-2 items-center text-center">correct</td>
                                <td className="border px-4 py-2 items-center text-center">2</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    };
export default StudentDetailsTable;

