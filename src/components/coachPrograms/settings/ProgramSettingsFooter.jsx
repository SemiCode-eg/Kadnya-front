/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import { Trash } from "@phosphor-icons/react";
import MainButton from "../../mainButton/MainButton";

function ProgramSettingsFooter({ handleDelete = () => {} }) {
  return (
    <div className="w-full flex justify-between gap-5">
      <Button
        className="!capitalize !gap-0 !text-red-500 hover:!bg-red-500/5"
        variant="text"
        startIcon={<Trash weight="bold" />}
        onClick={handleDelete}
      >
        Delete program
      </Button>

      <MainButton text="Save" type="submit" />
    </div>
  );
}

export default ProgramSettingsFooter;
