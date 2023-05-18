import { useEffect, useState } from 'react';
import teacherService from '../../service/TeacherService.js';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';

export default function Statistics() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
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
            });
    }

    return (
        <div className="font-serif py-6 mx-auto max-w-4xl">
            <div className="bg-white p-5 rounded-xl shadow-xl mx-5 pb-4 flow-root">
                <div className="text-center">
                    <h3 className=" font-bold text-2xl">Teacher's Table</h3>
                </div>
                <div className="overflow-x-auto">
                    <DataTable value={data} className="table-auto mx-auto border border-collapse">
                        <Column field="studentId" header="ID" />
                        <Column
                            field="fullName"
                            header="Full name"
                            body={(rowData) => (
                                <a className="hover:cursor-pointer underline"
                                   href={`/statistics/student?id=${rowData.studentId}`}
                                >
                                    {rowData.firstName} {rowData.lastName}
                                </a>
                            )}
                        />
                        <Column field="totalTasks" header="All Task Count" />
                        <Column field="solvedTasks" header="Submit Task Count" />
                        <Column field="totalPoints" header="Points" />
                    </DataTable>
                </div>
            </div>
        </div>
    )
}
