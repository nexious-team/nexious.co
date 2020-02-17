export const initialState = {
  language: 'en'
}
export const TYPES = {
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE'
}
export function reducer(state, action) {
  switch(action.type) {
    case TYPES.CHANGE_LANGUAGE: {
      console.log(action)
      state.language = action.payload.language
      return { ...state }
    }
    default: {
      console.log(action)
      return state;
    }
  }
}