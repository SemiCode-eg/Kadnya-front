import { Outlet, useLocation, useNavigate } from "react-router-dom";
import CustomCard from "../../components/customCard/CustomCard";
import GoBackBtn from "../../components/goBackBtn/GoBackBtn";
import MiniSide from "../../components/miniSide/MiniSide";
import { useEffect } from "react";

const tabs = [
  {
    title: "Dashboard",
    path: "dashboard",
  },
  {
    title: "Programs",
    path: "programs",
  },
  {
    title: "Sittings",
    path: "sittings",
  },
];

function Coaching() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/products/coaching") {
      navigate("dashboard");
    }
  }, [navigate, location.pathname]);

  return (
    <CustomCard>
      <div className="flex lg:flex-row flex-col lg:gap-5 gap-10 mt-5">
        <div className="flex lg:flex-col flex-row lg:justify-normal items-center justify-between gap-[60px]">
          <div className="flex items-center self-start gap-[9px]">
            <GoBackBtn path="/products/all" />
            <p className="text-sky-950 text-[31px]">Coaching</p>
          </div>
          <MiniSide tabs={tabs} />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </CustomCard>
  );
}

export default Coaching;
