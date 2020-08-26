const DemoList = (state = { demo: [{ text: 'this is list' }], newType: 'list' }, action: any) => {
  switch (action.type) {
    case 'SWITCH':
      console.log({ ...state, newType: action.newType })
      return { ...state, newType: action.newType }
    default:
      return state
  }
}

export default DemoList
