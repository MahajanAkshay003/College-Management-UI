import React, { useEffect, useState } from 'react';
import { getBatchesByDepartmentId } from "../remoteMethods/Batch/batch";

const useGetBatchesByDepartment = departmentId => {
  const [ batches, setBatches ] = useState([]);
  useEffect(() => {
    if (departmentId !== "") {
      getBatchesByDepartmentId(departmentId).then(({ batch }) => {
        setBatches(batch.map(currentBatch => ({
          label: currentBatch.batchName,
          value: currentBatch.id
        })));
      })
    }
  }, [departmentId]);
  return batches;
}

export default useGetBatchesByDepartment;