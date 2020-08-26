const List = (state = { lists: [{ text: '移动端计划' }], newType: 'all' }, action: any) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, lists: [...state.lists, { text: action.text }] }
    default:
      return state
  }
}

export default List
