// import { useEffect, useState } from "react";

// // Hook personalizado
// export const useFetch = (url) => {

//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null)

//   const getData = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(url);

//       if (!res.ok) {
//         throw {
//           msg: "Fallo el consumo de la API",
//           error: 404,
//         };
//       }

//       const db = await res.json();

//       setData(db);
//     } catch (error) {
//       console.log(error);
//       setError(error)
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return {
//     data,loading,error
//   };
// };


