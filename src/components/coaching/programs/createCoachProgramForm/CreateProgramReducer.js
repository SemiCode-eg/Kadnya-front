export const formReducerKeys = {
  setSessionType: 'SESSIONTYPE',
  setTitle: 'TITLE',
  setDescription: 'DESCRIPTION',
  setCoachName: 'COACHNAME',
  setSessionsCount: 'SESSIONSCOUNT',
  setScheduleType: 'SCHEDULETYPE',
  setScheduleURL: 'SCHEDULEURL',
  setLocation: 'LOCATION',
  setDuration: 'DURATION',
  setImage: 'IMAGE',
  setPrice: 'PRICE',
  setPricingType: 'PRICINGTYPE',
  setPaymentMethod: 'PAYMENTMETHOD',
  setError: 'ERROR',
  reset: 'RESET',
};

export const createProgramReducer = (state, action) => {
  switch (action.type) {
    case formReducerKeys.setSessionType:
      return {
        ...state,
        sessionType: action.payload,
      };
    case formReducerKeys.setTitle:
      return {
        ...state,
        title: action.payload,
      };
    case formReducerKeys.setDescription:
      return {
        ...state,
        description: action.payload,
      };
    case formReducerKeys.setCoachName:
      return {
        ...state,
        coachName: action.payload,
      };
    case formReducerKeys.setSessionsCount:
      return {
        ...state,
        sessionsCount: action.payload,
      };
    case formReducerKeys.setScheduleType:
      return {
        ...state,
        scheduleType: action.payload,
      };
    case formReducerKeys.setScheduleURL:
      return {
        ...state,
        scheduleURL: action.payload,
      };
    case formReducerKeys.setLocation:
      return {
        ...state,
        location: action.payload,
      };
    case formReducerKeys.setDuration:
      return {
        ...state,
        duration: action.payload,
      };
    case formReducerKeys.setImage:
      return {
        ...state,
        image: action.payload,
      };
    case formReducerKeys.setPrice:
      return {
        ...state,
        price: action.payload,
      };
    case formReducerKeys.setPricingType:
      return {
        ...state,
        pricingType: action.payload,
      };
    case formReducerKeys.setPaymentMethod:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case formReducerKeys.setError:
      return {
        ...state,
        error: action.payload,
      };
    case formReducerKeys.reset:
      return ProgramFormInitialState;
  }
};

export const ProgramFormInitialState = {
  sessionType: 'SINGLE',
  title: '',
  description: '',
  coachName: '',
  sessionsCount: 1,
  scheduleType: 'WEBSITE',
  scheduleURL: '',
  location: '',
  duration: 15,
  image: null,
  price: 0,
  pricingType: 'FREE',
  paymentMethod: '',
  error: '',
};
