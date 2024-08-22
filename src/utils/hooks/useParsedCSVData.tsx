import { useEffect, useState } from "react";
import { usePapaParse } from "react-papaparse";

import { columnsMapper } from "../helpers";

export const useParsedCSVData = () => {
  const { readString } = usePapaParse();
  const [isLoading, setIsLoading] = useState(true);
  const [parsedData, setParsedData] = useState<any>([]);
  const [columns, setColumns] = useState<any>([]);
  const [errors, setErrors] = useState<string[]>();

  useEffect(() => {
    const fetchData = async () => {
      const csv = await fetch(
        window.location.origin + "/FMSCA_records.csv"
      ).then((res) => res.text());
      setIsLoading(true);
      readString(csv, {
        delimiter: ",",
        worker: true,
        header: true,
        complete: (results) => {
          if (results.errors.length > 0) {
            setErrors(results.errors.map((errorObj) => errorObj.message));
          } else {
            setParsedData(results.data);
            const csvColumns = Object.keys(results.data[0] as any)
              .filter((key) => Object.keys(columnsMapper).includes(key))
              .map((key) => ({
                field: key,
                headerName: columnsMapper[key],
                width: 150,
                type: "string",
              }));

            setColumns(csvColumns);
          }
          setIsLoading(false);
        },
      });
    };

    fetchData();
  }, []);

  return { isLoading, parsedData, errors, columns };
};
