import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Grid } from "@material-ui/core";
import VestigingCard from "./VestigingCard";

function VestigingenTabel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios("http://localhost:5050/api/department");
      setData(result.data[0]);
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={3}>
      {data.map((department, index) => (
        <VestigingCard data={department} />
      ))}
    </Grid>
  );
}

export default VestigingenTabel;
