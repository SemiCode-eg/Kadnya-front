import { useReducer } from 'react';
import { useParams } from 'react-router-dom';
import useCourse from '../../../hooks/use-course';
import OutlineHeader from '../../../components/outlineHeader/OutlineHeader';
import Container from '../Container';
import MainButton from '../../../components/hainButton/MainButton';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import {
  formDataReducer,
  initailFormData,
  reducerKeys,
} from './formDataReducer';
import HandleErrorLoad from '../../../components/handleErrorLoad/index';

function CertificateTab() {
  const { id } = useParams();
  const { courseData, errorMsg, loading } = useCourse(id);
  const [formData, dispatchFormData] = useReducer(
    formDataReducer,
    initailFormData
  );

  const handleHasCertificate = (event) => {
    dispatchFormData({
      type: reducerKeys.setHasCertificate,
      payload: event.target.value,
    });
  };

  const handleLogoUpload = (image) => {
    dispatchFormData({
      type: reducerKeys.setLogo,
      payload: image,
    });
  };

  const handleCertificateTitle = (event) => {
    dispatchFormData({
      type: reducerKeys.setCertificateTitle,
      payload: event.target.value,
    });
  };

  const handleCourseSubtitle = (event) => {
    dispatchFormData({
      type: reducerKeys.setCourseSubtitle,
      payload: event.target.value,
    });
  };

  const handleCourseTitle = (event) => {
    dispatchFormData({
      type: reducerKeys.setCourseTitle,
      payload: event.target.value,
    });
  };

  const handleIncludeCompletionDate = (event) => {
    dispatchFormData({
      type: reducerKeys.setIncludeCompletionDate,
      payload: event.target.checked,
    });
  };

  const handleShowStudentName = (event) => {
    dispatchFormData({
      type: reducerKeys.setShowStudentName,
      payload: event.target.checked,
    });
  };

  const handleHasCustomField = (event) => {
    dispatchFormData({
      type: reducerKeys.setHasCustomField,
      payload: event.target.checked,
    });
  };

  const handleIncludeUniqueSerial = (event) => {
    dispatchFormData({
      type: reducerKeys.setIncludeUniqueSerial,
      payload: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <HandleErrorLoad loading={loading} errorMsg={errorMsg}>
      <OutlineHeader courseData={courseData} />
      <Container>
        <form onSubmit={handleSubmit} className="flex flex-col sm:gap-0 gap-6">
          <div className="flex sm:flex-row flex-col">
            <LeftSide
              hasCertificate={formData.hasCertificate}
              onCertificateSwitch={handleHasCertificate}
              onUploadLogo={handleLogoUpload}
            />
            <RightSide
              certificateTitle={formData.certificateTitle}
              onCertificateTitleInput={handleCertificateTitle}
              courseSubtitle={formData.courseSubtitle}
              onCourseSubtitleInput={handleCourseSubtitle}
              courseTitle={formData.courseTitle}
              onCourseTitleInput={handleCourseTitle}
              includeCompletionDate={formData.includeCompletionDate}
              onIncludeCompletionDateChecked={handleIncludeCompletionDate}
              showStudentName={formData.showStudentName}
              onShowStudentNameChecked={handleShowStudentName}
              hasCustomField={formData.hasCustomField}
              onHasCustomFieldChecked={handleHasCustomField}
              includeUniqueSerial={formData.includeUniqueSerial}
              onIncludeUniqueSerialChecked={handleIncludeUniqueSerial}
            />
          </div>

          <div className="flex items-center justify-center">
            <MainButton text="Save" type="submit" />
          </div>
        </form>
      </Container>
    </HandleErrorLoad>
  );
}

export default CertificateTab;
