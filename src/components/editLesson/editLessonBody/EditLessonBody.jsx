/* eslint-disable react/prop-types */
import { FormLabel } from '@mui/material';
import { useEffect, useState } from 'react';
import SortSelect from '../../SortSelect';
import useModules from '../../../hooks/use-modules';
import TextField from '../../forms/TextField';
import ImageField from '../../imageField/ImageField';
import { useNavigate, useParams } from 'react-router-dom';
import useLesson from '../../../hooks/use-lesson';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import MainButton from '../../MainButton/MainButton';
import {
  CheckFat,
  Eye,
  EyeClosed,
  EyeSlash,
  Link,
  LinkSimple,
  VideoCamera,
} from '@phosphor-icons/react';
import EditLessonLinkCard from '../editLessonLinkCard/editLessonLinkCard';
import DraftBtn from '../../draftBtn/DraftBtn';
import AddFile from '../addFile/AddFile';
import HandleErrorLoad from '../../HandeErrorLoad/index';
import { updateLesson } from '../../../utils/ApiCalls';
import useModule from '../../../hooks/use-module';

const toolbar = [
  'heading',
  '|',
  'undo',
  'redo',
  'bold',
  'italic',
  'link',
  'codeblock',
  'bulletedList',
  'numberedList',
  'blockQuote',
  'insertTable',
  'indent',
  'outdent',
];

const visibleMenuItems = [
  {
    Icon: EyeSlash,
    text: 'Hide',
  },
  {
    Icon: Eye,
    text: 'Visible',
  },
];

function EditLessonBody({
  isDraft,
  setIsDraft,
  formRef,
  setSubmitError,
  setSubmitLoading,
}) {
  const { id, lessonID } = useParams();
  const { lessonData, errorMsg, loading } = useLesson(lessonID);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [titleErrorMsg, setTitleErrorMsg] = useState('');
  const [description, setDescription] = useState(lessonData?.description);
  const [descriptionErrorMsg, setDescriptionErrorMsg] = useState('');
  const [imageAsset, setImageAsset] = useState(lessonData?.image);
  const [isCommentHidden, setIsCommentHidden] = useState(true);
  const [fileName, setFileName] = useState('');

  const [submodulesSortKey, setSubmodulesSortKey] = useState('NONE');
  const [modulesSortKey, setModulesSortKey] = useState(1);

  const [isVideo, setIsVideo] = useState(false);
  const [openAddFile, setOpenAddFile] = useState(false);

  useEffect(() => {
    if (lessonData) {
      setTitle(lessonData.title);
      setDescription(lessonData.description);
      setImageAsset(lessonData.image);
      setModulesSortKey(
        lessonData.module
          ? lessonData.module?.id
          : lessonData.sub_module?.module?.id
      );
      setSubmodulesSortKey(
        lessonData.sub_module !== null ? lessonData.sub_module?.id : 'NONE'
      );
      setIsCommentHidden(lessonData?.hide);
      setIsDraft(lessonData?.draft);
    }
  }, [lessonData, setIsDraft]);

  const {
    modulesData,
    errorMsg: modulesErrorMsg,
    loading: modulesLoading,
  } = useModules(id);

  const { moduleData } = useModule(modulesSortKey);

  const setModulesSelectOption = () => {
    return modulesData?.map((module) => ({
      value: module.id,
      label: module.title,
    }));
  };

  const setSubmodulesSelectOption = () => {
    return moduleData?.submodules?.map((submodule) => ({
      value: submodule.id,
      label: submodule.title,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (title === '') {
      setTitleErrorMsg('This field is required!');
      return;
    }

    if (description === '') {
      setDescriptionErrorMsg('This field is required!');
      return;
    }

    setSubmitError(false);
    setSubmitLoading(true);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', JSON.stringify(description));

    if (submodulesSortKey === 'NONE') {
      formData.append('module', modulesSortKey);
      formData.append('sub_module', '');
    } else {
      formData.append('module', '');
      formData.append('sub_module', submodulesSortKey);
    }

    formData.append('course', id);
    formData.append('hide', isCommentHidden);
    formData.append('draft', isDraft);
    imageAsset && formData.append('image', imageAsset);

    updateLesson(lessonID, formData).then((data) => {
      setSubmitLoading(false);
      if (data.status === 200 || (data.status === 201 && data.data)) {
        setSubmitError(false);
        navigate('/products/courses');
      } else {
        setSubmitError(true);
      }
    });
  }

  return (
    <HandleErrorLoad loading={loading} errorMsg={errorMsg}>
      <HandleErrorLoad loading={modulesLoading} errorMsg={modulesErrorMsg}>
        <div className="border-[1.5px] border-[#ddd] rounded-[10px] p-6">
          <p className="w-full mx-auto text-sky-950 font-[600] text-2xl tracking-[-0.25px] mb-8">
            Lesson Details
          </p>
          {errorMsg ? (
            <p className="text-xl text-red-500 font-bold">{errorMsg}</p>
          ) : (
            <form
              className="flex xl:gap-[90px] gap-8 flex-wrap items-end"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-6 xl:w-[45%] w-full">
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
                <ImageField
                  isVertical={false}
                  setImageAsset={setImageAsset}
                  imageURL={lessonData?.image}
                />
                <div>
                  <CKEditor
                    editor={ClassicEditor}
                    data={
                      description?.length > 0
                        ? description
                        : '<p>Add a description for your lesson</p>'
                    }
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setDescription({ data });
                      setDescriptionErrorMsg('');
                    }}
                    config={{
                      toolbar,
                    }}
                  />
                  <div className="text-red-500 mt-[7px]">
                    {descriptionErrorMsg}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 xl:w-[40%] w-full">
                <div className="flex flex-col gap-[7px] items-start w-full">
                  <p className="text-sky-950 font-[600] text-2xl tracking-[-0.25px]">
                    Media
                  </p>
                  <div className="flex items-end gap-4">
                    <MainButton
                      icon={<EyeClosed size={30} />}
                      text="None"
                      isPrimary={false}
                      isForm={!isVideo}
                      className={
                        isVideo
                          ? 'border-[1.5px] border-neutral-400/75 rounded-[5px]'
                          : null
                      }
                      handleClick={() => setIsVideo(false)}
                    />
                    <MainButton
                      icon={<VideoCamera size={30} weight="fill" />}
                      text="Video"
                      isPrimary={false}
                      isForm={isVideo}
                      className={
                        !isVideo
                          ? 'border-[1.5px] border-neutral-400/75 rounded-[5px]'
                          : null
                      }
                      handleClick={() => setIsVideo(true)}
                    />
                  </div>
                </div>
                {isVideo ? (
                  <EditLessonLinkCard
                    text="add link"
                    icon={<Link size={30} className="text-neutral-400" />}
                  />
                ) : (
                  <div className="my-[120px] lg:block hidden" />
                )}
                <div className="flex gap-5">
                  <p className="capitalize font-[500] text-xl text-sky-950">
                    Comment
                  </p>
                  <DraftBtn
                    draftMenuItems={visibleMenuItems}
                    draftState={isCommentHidden}
                    setDraftState={setIsCommentHidden}
                  />
                </div>
                <div className="flex items-start flex-col gap-[22px]">
                  <p className="capitalize font-[500] text-xl text-sky-950 flex items-end gap-1">
                    Downloads
                    <span className="text-zinc-400 font-normal text-sm">
                      (.pdf)
                    </span>
                  </p>
                  {!fileName ? (
                    <>
                      <EditLessonLinkCard
                        text="Add Files"
                        icon={
                          <LinkSimple size={30} className="text-neutral-400" />
                        }
                        handleClick={() => setOpenAddFile(true)}
                      />
                      <AddFile
                        open={openAddFile}
                        onClose={() => setOpenAddFile(false)}
                        setFileName={setFileName}
                        lessonID={lessonID}
                      />
                    </>
                  ) : (
                    <EditLessonLinkCard
                      text={
                        <>
                          {fileName}
                          <p className="mt-1 text-teal-500">
                            Saved on the server Successfully
                          </p>
                        </>
                      }
                      icon={
                        <CheckFat
                          size={56}
                          weight="fill"
                          className="text-teal-500"
                        />
                      }
                      handleClick={() => setOpenAddFile(true)}
                    />
                  )}
                </div>
              </div>
              <button ref={formRef} hidden type="submit" />
            </form>
          )}
        </div>
      </HandleErrorLoad>
    </HandleErrorLoad>
  );
}

export default EditLessonBody;
