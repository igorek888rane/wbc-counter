import React, {FC} from 'react';
import Row from "./Row";
import {useMainContext} from "../context";


const Table: FC = () => {
    const {cells, setCells, total, setTotal, maxCount} = useMainContext()

    //Удаленин строки
    const deleteRow = (cell: string, count: number) => {
        setTotal(total - count)
        setCells([...cells.filter(row => row !== cell)])
    }
    return (
        <div className={'table'}>
            <div className={'head'}>
                <div className="row">
                    <span className={'cell'}>Cell</span>
                    <span className={'count'}>Count</span>
                    <span className={'relative'}>Relative</span>
                    <span className={'absolute'}>Absolute</span>
                </div>
            </div>
            <div className={'body'}>
                <Row cell={'Neutrophil'}
                     isSubCells={true}
                     deleteRow={deleteRow}/>

                {cells.map(el => <Row key={el}
                                      isSubCells={false}
                                      cell={el}
                                      deleteRow={deleteRow}/>)}
                <div className="row_block ">
                    <div className="row all">
                        <span>{total}/{maxCount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Table;



