import React from 'react';
import { Cell } from '../models/Cell';

interface CellProps {
  cell: Cell;
}

const CellComponent = () => {
  return (
    <div className={['cell', cell.color].join(' ')}>

    </div>
  );
};

export default CellComponent;