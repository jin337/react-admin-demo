const initialState = {
  themeName: '这里是名字',
  remove: true,
  username: '',
  password: ''
}

const methods = (state: any, action: any): void => {
  switch (action.type) {
    case 'removeUser': {
      return {
        ...state,
        remove: !state.remove
      }
    }
    case 'setUser': {
      return {
        ...state,
        ...action.data
      }
    }

    default: {
      return { ...state }
    }
  }
}

export default (state = initialState, action: void) => methods(state, action)
