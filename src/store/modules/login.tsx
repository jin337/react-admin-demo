const initialState = {
  themeName: '这里是名字',
  remove: true,
  user: {
    username: '',
    password: ''
  }
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
        user: {
          ...state.user,
          ...action.data
        }
      }
    }

    default: {
      return { ...state }
    }
  }
}

export default (state = initialState, action: void) => methods(state, action)
