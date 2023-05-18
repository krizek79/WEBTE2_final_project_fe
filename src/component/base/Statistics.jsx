import React, { useEffect, useState, useRef } from 'react';
import teacherService from '../../service/TeacherService.js';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { CSVLink } from 'react-csv';

export default function Statistics() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const csvLinkRef = useRef(null);

    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        setLoading(true);
        teacherService
            .getStatistics()
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    setData(response.data);
                }
            })
            .catch((e) => {
                console.log(e.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const exportCSVData = () => {
        csvLinkRef.current.link.click();
    };

    const exportCSVHeaders = [
        { label: 'ID', key: 'studentId' },
        { label: 'First name', key: 'firstName' },
        { label: 'Last name', key: 'lastName' },
        { label: 'All Task Count', key: 'totalTasks' },
        { label: 'Submit Task Count', key: 'solvedTasks' },
        { label: 'Points', key: 'totalPoints' },
    ];

    return (
        <div className="font-serif py-6 mx-auto max-w-4xl">
            <div className="bg-white p-5 rounded-xl shadow-xl mx-5 pb-4 flow-root">
                <div className="text-center py-3">
                    <h3 className="font-bold text-2xl">Teacher's Table</h3>
                </div>
                <div className="overflow-x-auto">
                    <DataTable
                        value={data}
                        className="table-auto mx-auto border border-collapse"
                        loading={loading}
                    >
                        <Column field="studentId" header="ID" sortable />
                        <Column field="firstName" header="First name" sortable/>
                        <Column field="lastName" header="Last name" sortable/>
                        <Column field="totalTasks" header="All Task Count" sortable />
                        <Column field="solvedTasks" header="Submit Task Count" sortable />
                        <Column field="totalPoints" header="Points" sortable />
                        <Column body={(rowData) => (
                            <a
                                className="hover:cursor-pointer underline"
                                href={`/statistics/student?id=${rowData.studentId}`}
                            >
                                Detail
                            </a>
                        )}/>
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
                        filename="teachers.csv"
                        className="hidden"
                        ref={csvLinkRef}
                        target="_blank"
                    />
                </div>
            </div>
        </div>
    );
}