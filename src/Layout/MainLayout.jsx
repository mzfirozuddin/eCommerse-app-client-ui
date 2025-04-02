import Navbar from "@/custom-component/Navbar";
import { Outlet } from "react-router-dom";

// const getSelf = async () => {
//   const { data } = await self();
//   // console.log(data);
//   return data;
// };

const MainLayout = () => {
  /* const { setUser } = useAuthStore();
  const { data, isLoading } = useQuery({
    queryKey: ["self"],
    queryFn: async () => {
      const { data } = await self();
      // console.log("Data", data);
      return data;
    },
  });

  useEffect(() => {
    // console.log("Data: ", data);
    if (data) {
      setUser(data);
    }
  }, [data, setUser]); */

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
