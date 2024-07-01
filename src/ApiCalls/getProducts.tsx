import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { useSelector } from "react-redux";

// interface AuthState {
//   auth: {
//     user: {
//       token: string;
//     } | null;
//   };
// }

export function useGetProducts() {
  // const token = useSelector((state: AuthState) => state.auth.user?.token);
  const getProducts = () => {
    return axios.get(`https://sowo-backend.onrender.com/api/products/available`, 
    //   {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${token}`,
    //   },
    // }
  );
  };
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    // enabled: false, // to prevent it from  fetching the data or for it to run when maybe a function above returns a data eg, !!id
    staleTime: 60000,
    // retry: 4
    // refetchInterval: 2000
  });
}
