import { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import teacherService from '../../service/TeacherService.js'
import TextWithLatex from '../../util/TextWithLatex.jsx'

export default function StudentDetailsTable() {

    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id')
    const [data, setData] = useState([])

    useEffect(() => {
        teacherService
            .getStatisticsByStudentId(id)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data)
                    setData(response.data)
                }
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    return (
        <div className="font-serif w-full py-6 flex justify-center">
            <div className="w-11/12 bg-wite p-5  rounded-xl shadow-xl mx-5 pb-4 flow-root">
                <div className="text-center">
                    <h3 className="font-bold text-2xl">Student Detail Table</h3>
                </div>
                <div className="overflow-x-auto">
                    <DataTable value={data} className="table-auto mx-auto border border-collapse">
                        <Column field="file_name" header="File" />
                        <Column field="task_id" header="Task" />
                        <Column field="student_answer" header="Answer" />
                        <Column field="solution" header="Solution"
                                body={(rowData) => <TextWithLatex text={rowData.solution}/>}
                        />
                        <Column field="correctness" header="Correctness" />
                        <Column field="points" header="Points" />
                    </DataTable>
                </div>
            </div>
        </div>
    );
}
