import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { movieGenres } from "../api/Api";

export const MovieGenres = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    const api = async () => {
      const data = await movieGenres();
      setData(data);
    };
    api();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ul>
        {data &&
          data.map((item, index) => {
            return item && <li key={index}>{item}</li>;
          })}
      </ul>
    </Box>
  );
};
