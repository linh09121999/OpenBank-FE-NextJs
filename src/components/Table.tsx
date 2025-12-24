'use client'

import { MyConsentsInfo } from "@/types/Consent/response";
import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";

type TableProps = {
    isDark: boolean;
    datas: MyConsentsInfo[]
}

const Table: React.FC<TableProps> = ({ isDark, datas }) => {
    return (
        <></>
        // <div className="grid pt-5">
        //     <div className="w-full overflow-x-auto scroll-x">
        //         <CTable bordered hover align="middle" responsive className="w-full  " style={{ tableLayout: 'fixed' }}>
        //             <CTableHead color="light" className="">
        //                 <CTableRow>
        //                     <CTableHeaderCell className="text-center p-3 ">Consent Id</CTableHeaderCell>
        //                     <CTableHeaderCell className="text-center p-3 ">Consumer Id</CTableHeaderCell>
        //                     <CTableHeaderCell className="text-center p-3 ">Date</CTableHeaderCell>
        //                     <CTableHeaderCell className="text-center p-3 ">Status</CTableHeaderCell>
        //                     <CTableHeaderCell className="text-center p-3 ">Api Standard</CTableHeaderCell>
        //                 </CTableRow>
        //             </CTableHead>
        //             <CTableBody>
        //                 {datas.slice(0, 5).map((data) => (
        //                     <CTableRow className="table-body-row-mucluc"
        //                     //  key={data.consent_id}
        //                         // onClick={() => {
        //                         //     setSelectedRowConsent(data.consent_id);
        //                         // }} onKeyDown={(e) => {
        //                         //     if (e.key === 'Enter') {
        //                         //         e.preventDefault(); 
        //                         //         setSelectedRowConsent(null);
        //                         //     }
        //                         // }}
        //                         // style={{
        //                         //     border: data.consent_id === selectedRowConsent
        //                         //         ? isDark
        //                         //             ? '2px dashed var(--color-green-400)'
        //                         //             : '2px dashed var(--color-green-600)'
        //                         //         : '',
        //                         //     cursor: 'pointer'
        //                         // }}
        //                     >
        //                         <CTableDataCell className='text-center p-3 '>{data.consent_id}</CTableDataCell>
        //                         <CTableDataCell className='text-center p-3 '>{data.consumer_id}</CTableDataCell>
        //                         <CTableDataCell className='text-center p-3'>{data.last_usage_date}</CTableDataCell>
        //                         <CTableDataCell className='text-center p-3 '>{data.status}</CTableDataCell>
        //                         <CTableDataCell className='text-center p-3 '>{data.api_standard}</CTableDataCell>
        //                     </CTableRow>
        //                 ))}
        //             </CTableBody>
        //         </CTable>
        //     </div>
        // </div>
    )
}

export default Table