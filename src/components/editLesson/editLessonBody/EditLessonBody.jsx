/* eslint-disable react/prop-types */
import { FormLabel } from '@mui/material';
import { useEffect, useState } from 'react';
import useModule from '../../../hooks/use-module';
import SortSelect from '../../SortSelect';
import useModules from '../../../hooks/use-modules';
import TextField from '../../Forms/TextField';
import ImageField from '../../imageField/ImageField';
import 'quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useParams } from 'react-router-dom';
import useLesson from '../../../hooks/use-lesson';

function EditLessonBody() {
  const { lessonID } = useParams();
  const { id } = useParams();
  const { lessonData, errorMsg, loading } = useLesson(lessonID);

  const [title, setTitle] = useState('');
  const [titleErrorMsg, setTitleErrorMsg] = useState('');
  const [imageAsset, setImageAsset] = useState(null);
  const [submodulesSortKey, setSubmodulesSortKey] = useState('NONE');
  const [modulesSortKey, setModulesSortKey] = useState(lessonData?.module?.id);

  useEffect(() => {
    if (lessonData) {
      setTitle(lessonData.title);
      setSubmodulesSortKey(
        lessonData.sub_module !== null ? lessonData.sub_module?.id : 'NONE'
      );
      setModulesSortKey(lessonData.module?.id);
    }
  }, [lessonData]);

  const {
    modulesData,
    errorMsg: modulesErrorMsg,
    loading: modulesLoading,
  } = useModules(id);

  const setModulesSelectOption = () => {
    return modulesData?.map((module) => ({
      value: module.id,
      label: module.title,
    }));
  };

  const setSubmodulesSelectOption = () => {
    return lessonData.module?.submodules?.map((submodule) => ({
      value: submodule.id,
      label: submodule.title,
    }));
  };

  const handleProcedureContentChange = (content) => {
    console.log('content---->', content);
  };

  return (
    <div className="border-[1.5px] border-[#ddd] rounded-[10px] p-6">
      <p className="w-full mx-auto text-sky-950 font-[600] text-2xl tracking-[-0.25px] mb-8">
        Lesson Details
      </p>
      <form className="flex gap-[116px] flex-wrap items-center">
        <div className="flex flex-col gap-4 flex-[0.6]">
          <div className="flex flex-col gap-[7px] items-start w-full">
            <FormLabel className="!text-black !font-[400] !text-lg">
              Title
            </FormLabel>
            <TextField
              placeholder="What are the Different Ways to Earn Money?"
              value={title}
              handleChange={(e) => {
                setTitle(e.target.value);
                setTitleErrorMsg('');
              }}
            />
            <div className="text-red-500">{titleErrorMsg}</div>
          </div>
          <div className="flex flex-col gap-[10px] items-start w-full">
            <FormLabel className="!text-black !font-[400] !text-lg">
              Select module
            </FormLabel>
            <SortSelect
              label="Select Top-level Module"
              className="!w-full"
              options={setModulesSelectOption()}
              sortKey={modulesSortKey}
              onSelect={(e) => setModulesSortKey(e.target.value)}
              selectClasses="!rounded-xl !py-0"
            />
          </div>
          <div className="flex flex-col gap-[10px] items-start w-full">
            {setSubmodulesSelectOption()?.length > 0 && (
              <>
                <FormLabel className="!text-black !font-[400] !text-lg">
                  Select submodule
                </FormLabel>
                <SortSelect
                  label="Select Submodule"
                  className="!w-full"
                  options={[
                    { value: 'NONE', label: 'None' },
                    ...setSubmodulesSelectOption(),
                  ]}
                  sortKey={submodulesSortKey}
                  onSelect={(e) => setSubmodulesSortKey(e.target.value)}
                  selectClasses="!rounded-xl"
                />
              </>
            )}
          </div>
          <ImageField isVertical={false} setImageAsset={setImageAsset} />
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            placeholder="write your content ...."
            onChange={handleProcedureContentChange}
            style={{ height: '100px' }}
          ></ReactQuill>
        </div>
        <div className="flex flex-col gap-6"></div>
      </form>
    </div>
  );
}

export default EditLessonBody;

const modules = {
  toolbar: [
    [{ size: ['small', false, 'large', 'huge'] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote', 'undo', 'redo'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link'],
    [{ indent: '-1' }, { indent: '+1' }, { align: [] }],
  ],
};

const formats = [
  'header',
  'height',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'undo',
  'redo',
  'list',
  'color',
  'bullet',
  'indent',
  'link',
  'align',
];
