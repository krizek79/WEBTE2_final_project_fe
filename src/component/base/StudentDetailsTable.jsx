import { useEffect, useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { CSVLink } from 'react-csv';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import teacherService from '../../service/TeacherService.js';
import TextWithLatex from '../../util/TextWithLatex.jsx';

export default function StudentDetailsTable() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const csvLinkRef = useRef(null);

    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        setLoading(true);
        teacherService
            .getStatisticsByStudentId(id)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    setData(response.data);
                    setTotalRecords(response.data.length);
                }
            })
            .catch((e) => {
                console.log(e);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const exportCSVData = () => {
        csvLinkRef.current.link.click();
    };

    const exportCSVHeaders = [
        { label: 'File', key: 'file_name' },
        { label: 'Task', key: 'task_id' },
        { label: 'Answer', key: 'student_answer' },
        { label: 'Solution', key: 'solution' },
        { label: 'Correctness', key: 'correctness' },
        { label: 'Points', key: 'points' },
    ];

    const renderTextWithLatex = (rowData) => {
        return <TextWithLatex text={rowData.solution} />;
    };

    const onPage = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    return (
        <div className="font-serif w-full py-6 flex justify-center">
            <div className="w-11/12 bg-white p-5 rounded-xl shadow-xl mx-5 pb-4 flow-root">
                <div className="text-center">
                    <h3 className="font-bold text-2xl py-3">Student Detail Table</h3>
                </div>
                <div className="overflow-x-auto">
                    <DataTable
                        value={data}
                        className="table-auto mx-auto border border-collapse"
                        loading={loading}
                        sortField="task_id"
                        sortOrder={1}
                        first={first}
                        rows={rows}
                        totalRecords={totalRecords}
                        onPage={onPage}
                    >
                        <Column field="file_name" header="File" sortable />
                        <Column field="task_id" header="Task" sortable />
                        <Column field="student_answer" header="Answer" sortable />
                        <Column field="solution" header="Solution" body={renderTextWithLatex} sortable />
                        <Column field="correctness" header="Correctness" sortable />
                        <Column field="points" header="Points" sortable />
                    </DataTable>
                </div>
                <div className="flex justify-end mt-4">
                    <Button
                        type="button"
                        icon="pi pi-file-o"
                        label="Export CSV"
                        className="text-white bg-dark hover:bg-azure"
                        onClick={exportCSVData}
                    />
                    <CSVLink
                        data={data}
                        headers={exportCSVHeaders}
                        filename="student_details.csv"
                        className="hidden"
                        ref={csvLinkRef}
                        target="_blank"
                    />
                </div>
            </div>
        </div>
    );
}
