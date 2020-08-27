const initialState = {
  toggle: false
}

const methods = (state: any, action: any): void => {
  switch (action.type) {
    case 'toggle': {
      console.log(1)

      return {
        ...state,
        toggle: !state.toggle
      }
    }

    default: {
      return { ...state }
    }
  }
}

export default (state = initialState, action: void) => methods(state, action)
