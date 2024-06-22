
const Reducer = (state:object,action:object) => {
    switch (action.type) {
        case 'page':
          return {...state,page:state.page = action.payload}
      }   
}

export default Reducer