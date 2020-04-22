export const initialState = {
  language: localStorage.getItem('lang') || 'En'
}
export const TYPES = {
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE'
}
export function reducer(state, action) {
  switch(action.type) {
    case TYPES.CHANGE_LANGUAGE: {
      localStorage.setItem('lang', action.payload.language)
      state.language = action.payload.language
      return { ...state }
    }
    default: {
      return state;
    }
  }
}