import axios from "axios";
import { useEffect, useState } from "react"



export const useApi = (endpoint, params) => {
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/${endpoint}`, {
        params
      });
      setLoad(false);
      setData(response.data);
    } catch (err) {
      setLoad(false);
      setErr(err.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return [load, data, err];
}


