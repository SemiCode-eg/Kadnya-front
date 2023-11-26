import { useNavigate, useParams } from "react-router-dom";
import ProgramDetails from "../../../components/coachPrograms/settings/ProgramDetails";
import HandleErrorLoad from "../../../components/handleErrorLoad";
import useCoachProgram from "../../../hooks/use-coach-program";
import Scheduling from "../../../components/coachPrograms/settings/Scheduling";
import useProgramReducer from "../../../hooks/use-program-reducer";
import ProgramSettingsFooter from "../../../components/coachPrograms/settings/ProgramSettingsFooter";

function ProgramSettings() {
  // const [deleteErrMsg, setDeleteErrMsg] = useState("");
  const { programID } = useParams();
  const { programData, loading, errorMsg } = useCoachProgram(programID);
  const { dispatchFormData, formReducerKeys } = useProgramReducer();
  const navigate = useNavigate();

  const handleDelete = () => {
    // TODO delete functionality from api
    dispatchFormData({ type: formReducerKeys.RESET });
    navigate("/products/coaching/programs");
  };

  const handleSubmit = (e) => {
    // TODO Validation
    // TODO Submit Functionality
    e.preventDefault();
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <HandleErrorLoad loading={loading} errorMsg={errorMsg}>
        <ProgramDetails programData={programData} />
        <Scheduling programData={programData} />
        <ProgramSettingsFooter handleDelete={handleDelete} />
      </HandleErrorLoad>
    </form>
  );
}

export default ProgramSettings;
