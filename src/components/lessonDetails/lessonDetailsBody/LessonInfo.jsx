import TextField from '../../customFields/TextField'
import SortSelect from '../../SortSelect'
import HandleErrorLoad from '../../handleErrorLoad'
import ImageField from '../../imageField/ImageField'
import RichTextEditor from '../../richTextEditor/RichTextEditor'
import useModule from '../../../hooks/use-module'
import useModules from '../../../hooks/use-modules'

function generateModuleOptions(modulesData) {
  return (
    modulesData?.map(module => ({
      value: module.id,
      label: module.title,
    })) || []
  )
}

function generateSubmoduleOptions(moduleData) {
  return (
    moduleData?.submodules?.map(submodule => ({
      value: submodule.id,
      label: submodule.title,
    })) || []
  )
}

function LessonInfo({
  title,
  setTitle,
  titleErrorMsg,
  setTitleErrorMsg,
  description,
  setDescription,
  descriptionErrorMsg,
  setDescriptionErrorMsg,
  setImageAsset,
  modulesSortKey,
  setModulesSortKey,
  submodulesSortKey,
  setSubmodulesSortKey,
  image,
  courseId,
}) {
  const {
    modulesData,
    errorMsg: modulesErrorMsg,
    loading: modulesLoading,
  } = useModules(courseId)

  const {
    moduleData,
    errorMsg: submodulesErrorMsg,
    loading: submodulesLoading,
  } = useModule(modulesSortKey)

  return (
    <div className="flex flex-col gap-6 xl:w-[45%] w-full">
      <div className="flex flex-col gap-[7px] items-start w-full">
        <p className="font-[500] text-sky-950 text-md">Title</p>
        <TextField
          placeholder="What are the Different Ways to Earn Money?"
          value={title}
          handleChange={e => {
            setTitle(e.target.value)
            setTitleErrorMsg('')
          }}
        />
        <div className="text-red-500">{titleErrorMsg}</div>
      </div>
      <div className="flex flex-col gap-[10px] items-start w-full">
        <HandleErrorLoad loading={modulesLoading} errorMsg={modulesErrorMsg}>
          <p className="font-[500] text-sky-950 text-md">Select module</p>
          <SortSelect
            label="Select Top-level Module"
            className="!w-full"
            options={generateModuleOptions(modulesData)}
            sortKey={modulesSortKey}
            onSelect={e => setModulesSortKey(e.target.value)}
            selectClasses="!rounded-xl !py-0"
          />
        </HandleErrorLoad>
      </div>
      <div className="flex flex-col gap-[10px] items-start w-full">
        {generateSubmoduleOptions(moduleData)?.length > 0 && (
          <HandleErrorLoad
            loading={submodulesLoading}
            errorMsg={submodulesErrorMsg}>
            <p className="font-[500] text-sky-950 text-md">Select submodule</p>
            <SortSelect
              label="Select Submodule"
              className="!w-full"
              options={[
                { value: 'NONE', label: 'None' },
                ...generateSubmoduleOptions(moduleData),
              ]}
              sortKey={submodulesSortKey}
              onSelect={e => setSubmodulesSortKey(e.target.value)}
              selectClasses="!rounded-xl"
            />
          </HandleErrorLoad>
        )}
      </div>
      <ImageField
        isVertical={false}
        setImageAsset={setImageAsset}
        imageURL={image}
      />
      <div className="text-start">
        <p className="font-[500] text-sky-950 text-md mb-[10px]">Description</p>
        <RichTextEditor
          description={description}
          descriptionErrorMsg={descriptionErrorMsg}
          setDescription={setDescription}
          setDescriptionErrorMsg={setDescriptionErrorMsg}
        />
      </div>
    </div>
  )
}

export default LessonInfo
