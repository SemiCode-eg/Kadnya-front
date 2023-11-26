/* eslint-disable react/prop-types */
import {
  DotsThree,
  Stack,
  FolderSimple,
  Folders,
  File,
  CheckSquareOffset,
} from '@phosphor-icons/react';
import imageSquare from '../../assets/images/courses/ImageSquare.png';
import MainButton from '../mainButton/MainButton';
import { Alert, Menu, Snackbar } from '@mui/material';
import { useMemo, useState } from 'react';
import MenuItems from '../menu/MenuItems';
import styled from '@emotion/styled';
import AddModule from '../../pages/course/addForms/AddModule';
import AddSubmodule from '../../pages/course/addForms/AddSubmodule';
import AddLesson from '../../pages/course/addForms/AddLesson';
import SettingMenu from '../menu';
import { useNavigate } from 'react-router-dom';
import { deleteCourse } from '../../utils/ApiCalls';

const MUIMenu = styled(Menu)(() => ({
  '& .MuiList-root': {
    padding: '0',
  },
  '& .MuiPaper-root': {
    width: 'auto',
    marginTop: '2px',
    borderRadius: '10px',
  },
  '& .MuiMenuItem-root': {
    padding: '15px',
    color: '#fff',
    fontSize: '17px',
    [`&#Module`]: {
      background:
        'linear-gradient(180deg, rgba(40,172,166,1) 38%, rgba(82,163,194,1) 93%)',
    },
    [`&#Submodule`]: {
      background:
        'linear-gradient(180deg, rgba(82,163,194,1) 38%, rgba(109,156,209,1) 93%)',
    },
    [`&#Lesson`]: {
      background:
        'linear-gradient(180deg, rgba(109,156,209,1) 35%, rgba(140,157,225,1) 93%)',
    },
    [`&#Quiz`]: {
      background:
        'linear-gradient(180deg, rgba(140,157,225,1) 30%, rgba(182,175,247,1) 85%)',
    },
    '&:hover': {
      opacity: '0.9',
    },
  },
}));

function OutlineHeader({ courseData, setRefetch, showContentBtn = true }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModuleForm, setOpenModuleForm] = useState(false);
  const [opensubModuleForm, setOpensubModuleForm] = useState(false);
  const [openLessonForm, setOpenLessonForm] = useState(false);
  const [openQuizForm, setOpenQuizForm] = useState(false);
  const [successSubmit, setSuccessSubmit] = useState('');
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteErrorMsg, setDeleteErrorMsg] = useState('');

  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const addMenuItems = useMemo(() => {
    if (courseData?.modules?.length > 0) {
      return [
        {
          Icon: FolderSimple,
          text: 'Module',
        },
        {
          Icon: Folders,
          text: 'Submodule',
        },
        {
          Icon: File,
          text: 'Lesson',
        },
        {
          Icon: CheckSquareOffset,
          text: 'Quiz',
        },
      ];
    } else {
      return [
        {
          Icon: FolderSimple,
          text: 'Module',
        },
      ];
    }
  }, [courseData?.modules?.length]);

  const handleMenuItemClick = (event) => {
    event.preventDefault();

    switch (event.target.id) {
      case addMenuItems[0].text: // Module
        setOpenModuleForm(true);
        break;
      case addMenuItems[1].text: // Submodule
        setOpensubModuleForm(true);
        break;
      case addMenuItems[2].text: // Lesson
        setOpenLessonForm(true);
        break;
      case addMenuItems[3].text: // Quiz
        setOpenQuizForm(true);
        break;
      default:
        break;
    }
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const previewedForm = () => {
    if (openModuleForm) {
      return (
        <AddModule
          open={openModuleForm}
          onClose={() => setOpenModuleForm(false)}
          title="New Module"
          setRefetch={setRefetch}
          setSuccessSubmit={setSuccessSubmit}
        />
      );
    } else if (opensubModuleForm) {
      return (
        <AddSubmodule
          open={opensubModuleForm}
          onClose={() => setOpensubModuleForm(false)}
          title="New Submodule"
          modules={courseData?.modules}
          setRefetch={setRefetch}
          setSuccessSubmit={setSuccessSubmit}
        />
      );
    } else if (openLessonForm) {
      return (
        <AddLesson
          open={openLessonForm}
          onClose={() => setOpenLessonForm(false)}
          title="New Lesson"
          modules={courseData?.modules}
          isMainBtn={true}
          setRefetch={setRefetch}
          setSuccessSubmit={setSuccessSubmit}
        />
      );
    } else if (openQuizForm) {
      navigate(`/products/courses/${courseData?.id}/quiz/add`);
    }
  };

  const handleDeleteCourse = (id) => {
    setDeleteErrorMsg('');
    setDeleteLoading(true);

    deleteCourse(id).then((data) => {
      console.log(data);
      setDeleteLoading(false);
      if (data.request.status === 200 || data.status === 204) {
        navigate(`/products/courses`);
      } else {
        setDeleteErrorMsg('Server error, try again later!');
      }
    });
  };

  return (
    <>
      {/* TODO make error show like popup also inside each form */}
      {previewedForm()}
      <div className="mb-2 flex gap-5 flex-col lg:flex-row">
        <div className="flex justify-between gap-[35px] flex-1 flex-col lg:flex-row flex-wrap">
          <div className="flex items-center flex-col sm:flex-row gap-[20px] flex-1">
            <div className="w-[140px] h-[114px] bg-white rounded-[10px] shadow-1">
              <img
                src={courseData?.image ? courseData?.image : imageSquare}
                alt="course image"
                className={`w-full h-full ${
                  courseData?.image ? 'object-cover' : 'object-contain'
                } rounded-[10px]`}
              />
            </div>

            <div className="text-gray-950 capitalize text-[20px] flex flex-col items-start">
              <p>{courseData?.title}</p>
              <p className="text-gray-400 font-normal text-sm">
                {courseData?.ReleaseDate}
              </p>
            </div>
          </div>
          {showContentBtn && (
            <div className="flex items-center gap-[20px] flex-1 justify-end">
              <SettingMenu
                id={courseData?.id}
                buttonIcon={<DotsThree size={35} weight="bold" />}
                isPreview={false}
                handleDelete={handleDeleteCourse}
                deleteErrorMsg={deleteErrorMsg}
                deleteLoading={deleteLoading}
              />
              <MainButton
                text="Add Content"
                icon={
                  <>
                    <Stack size={25} weight="fill" />
                  </>
                }
                reverse={true}
                className={`text-white hover:bg-teal-200 hover:text-sky-950 !px-5 !text-sm ${
                  anchorEl === null
                    ? 'bg-sky-950'
                    : 'bg-gradient-to-b from-[#28ACA6] to-[#28ACA6]'
                }`}
                handleClick={handleClickListItem}
              />
              <MUIMenu
                id="add-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'add-menu-button',
                }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <MenuItems
                  items={addMenuItems}
                  handlerFunction={handleMenuItemClick}
                  iconClasses="text-white"
                />
              </MUIMenu>
            </div>
          )}
        </div>
      </div>
      {!!successSubmit && (
        <Snackbar
          open={!!successSubmit}
          autoHideDuration={6000}
          onClose={() => setSuccessSubmit('')}
        >
          <Alert
            severity="success"
            sx={{ width: '100%' }}
            onClose={() => setSuccessSubmit('')}
          >
            {successSubmit} added successfully!
          </Alert>
        </Snackbar>
      )}
    </>
  );
}

export default OutlineHeader;
