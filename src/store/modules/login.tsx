const initialState = {
  themeName: '这里是名字'
}

const methods = (state: any, action: any): void => {
  switch (action.type) {
    case 'toggle': {
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
