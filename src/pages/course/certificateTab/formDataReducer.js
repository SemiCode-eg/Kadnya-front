export const reducerKeys = {
	setHasCertificate: "setHasCertificate",
	setLogo: "setLogo",
	setCertificateTitle: "setCertificateTitle",
	setCourseSubtitle: "setCourseSubtitle",
	setCourseTitle: "setCourseTitle",
	setIncludeCompletionDate: "setIncludeCompletionDate",
	setShowStudentName: "setShowStudentName",
	setIncludeUniqueSerial: "setIncludeUniqueSerial",
};

export const formDataReducer = (state, action) => {
	switch (action.type) {
		case "INIT":
			return {
				hasCertificate: action.payload.hasCertificate,
				logo: action.payload.logo,
				certificateTitle: action.payload.certificateTitle,
				courseSubtitle: action.payload.courseSubtitle,
				courseTitle: action.payload.courseTitle,
				includeCompletionDate: action.payload.includeCompletionDate,
				showStudentName: action.payload.showStudnetName,
				includeUniqueSerial: action.payload.includeUniqueSerial,
			};
		case reducerKeys.setHasCertificate:
			return {
				...state,
				hasCertificate: action.payload,
			};
		case reducerKeys.setLogo:
			return {
				...state,
				logo: action.payload,
			};
		case reducerKeys.setCertificateTitle:
			return {
				...state,
				certificateTitle: action.payload,
			};
		case reducerKeys.setCourseSubtitle:
			return {
				...state,
				courseSubtitle: action.courseSubtitle,
			};
		case reducerKeys.setCourseTitle:
			return {
				...state,
				courseTitle: action.payload,
			};
		case reducerKeys.setIncludeCompletionDate:
			return {
				...state,
				includeCompletionDate: action.payload,
			};
		case reducerKeys.setShowStudentName:
			return {
				...state,
				showStudentName: action.payload,
			};
		case reducerKeys.setIncludeUniqueSerial:
			return {
				...state,
				includeUniqueSerial: action.payload,
			};
		default:
			throw Error("unhandled action");
	}
};

export const initailFormData = {
	hasCertificate: false,
	logo: null,
	certificateTitle: "",
	courseSubtitle: "",
	courseTitle: "",
	includeCompletionDate: false,
	showStudnetName: false,
	hasCustomField: false,
	includeUniqueSerial: false,
};
