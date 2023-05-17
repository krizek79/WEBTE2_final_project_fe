import { useEffect, useRef } from 'react';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import 'datatables.net';
import 'datatables.net-buttons/js/dataTables.buttons';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';

import $ from 'jquery';

    const TeacherTable = () => {
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
            <div className="font-serif MainDiv mt-4 mx-auto max-w-4xl">
                <div className="bg-white p-5 rounded-xl shadow-xl  ml-10 mr-10 mb-0 pb-4 flow-root">
                    <div className="jumbotron text-center">
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
                                <th className="border px-4 py-2 w-24">Name</th>
                                <th className="border px-4 py-2 w-24">Surname</th>
                                <th className="border px-4 py-2 w-16">All Task Count</th>
                                <th className="border px-4 py-2 w-24">Submit Task Count</th>
                                <th className="border px-4 py-2 w-16">Points</th>
                            </tr>
                            </thead>
                            <tbody className="mt-6">

                            {/* Data to table*/}
                            {/*{this.state.data.map((result) => {*/}
                            {/*    return (*/}
                            {/*        <tr className="bg-white">*/}
                            {/*            <td className="border px-4 py-2 >{result.id}</td>*/}
                            {/*            <td className="border px-4 py-2 >{result.name}</td>*/}
                            {/*            <td className="border px-4 py-2 >{result.surname}</td>*/}
                            {/*            <td className="border px-4 py-2 items-center text-center">{result.allStudentTasks}</td>*/}
                            {/*            <td className="border px-4 py-2 items-center text-center">{result.allStudentSubmitTasks}</td>*/}
                            {/*            <td className="border px-4 py-2 items-center text-center">{result.allStudentPoints}</td>*/}
                            {/*        </tr>*/}
                            {/*    )*/}
                            {/*})}*/}

                            <tr className="bg-white">
                                <td className="border px-4 py-2 ">1</td>
                                <td className="border px-4 py-2">Janko</td>
                                <td className="border px-4 py-2 bold text-decoration-underline"><a href="">Mrkvička</a></td>
                                <td className="border px-4 py-2 items-center text-center">10</td>
                                <td className="border px-4 py-2 items-center text-center">7</td>
                                <td className="border px-4 py-2 items-center text-center">14</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="border px-4 py-2">1</td>
                                <td className="border px-4 py-2">Zdenko</td>
                                <td className="border px-4 py-2">ZPopradu</td>
                                <td className="border px-4 py-2 items-center text-center">5</td>
                                <td className="border px-4 py-2 items-center text-center">3</td>
                                <td className="border px-4 py-2 items-center text-center">6</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="border px-4 py-2">1</td>
                                <td className="border px-4 py-2">Jožo</td>
                                <td className="border px-4 py-2">Čučvara</td>
                                <td className="border px-4 py-2 items-center text-center">12</td>
                                <td className="border px-4 py-2 items-center text-center">10</td>
                                <td className="border px-4 py-2 items-center text-center">20</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    };
export default TeacherTable;

