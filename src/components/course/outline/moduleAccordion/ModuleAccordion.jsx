/* eslint-disable react/prop-types */
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { CaretDown } from '@phosphor-icons/react'
import { useCallback, useState } from 'react'
import AddModule from '../addForms/AddModule'
import AddSubmodule from '../addForms/AddSubmodule'
import AddLesson from '../addForms/AddLesson'
import SummaryBody from './SummaryBody'

function ModuleAccordion({
  children,
  title,
  description,
  image,
  Icon,
  summaryClasses = '',
  paperClasses = '',
  iconClasses = '',
  moduleID,
  modules,
  isSubmodule = false,
  submodule = [],
  parentModuleID,
  setRefetch = () => {},
}) {
  const [isClicked, setIsClicked] = useState(false)
  const [isEditModule, setIsEditModule] = useState(false)
  const [isAddSubmodule, setIsAddSubmodule] = useState(false)
  const [isAddLesson, setIsAddLesson] = useState(false)

  const refactoredSubmodule = useCallback(() => {
    return submodule.length > 0
      ? [{ value: submodule[0].id, label: submodule[0].title }]
      : []
  }, [submodule])

  const previewedForm = () => {
    if (isEditModule) {
      return (
        <AddModule
          isEdit={true}
          moduleTitle={title}
          moduleDescription={description}
          moduleImage={image}
          moduleID={moduleID}
          open={isEditModule}
          onClose={() => setIsEditModule(false)}
          popupTitle="Edit Module"
          submitBtnTitle="Update Module"
          isSubmodule={isSubmodule}
          parentModuleID={parentModuleID}
          setRefetch={setRefetch}
        />
      )
    } else if (isAddSubmodule) {
      return (
        <AddSubmodule
          open={isAddSubmodule}
          onClose={() => setIsAddSubmodule(false)}
          modules={modules}
          setRefetch={setRefetch}
        />
      )
    } else if (isAddLesson) {
      return (
        <AddLesson
          open={isAddLesson}
          onClose={() => setIsAddLesson(false)}
          modules={modules}
          submodules={refactoredSubmodule(submodule)}
          setRefetch={setRefetch}
        />
      )
    }
  }

  return (
    <>
      {previewedForm()}

      <Accordion className={paperClasses}>
        <AccordionSummary
          expandIcon={<CaretDown size={20} weight="bold" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={() => setIsClicked(prev => !prev)}
          className={summaryClasses}>
          <SummaryBody
            isClicked={isClicked}
            Icon={Icon}
            iconClasses={iconClasses}
            setIsEditModule={setIsEditModule}
            setIsAddSubmodule={setIsAddSubmodule}
            setIsAddLesson={setIsAddLesson}
            title={title}
            isSubmodule={isSubmodule}
          />
        </AccordionSummary>
        <AccordionDetails className="!bg-gray-50 !border-t-[0.5px] !border-t-[#DDD]">
          {children}
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default ModuleAccordion
