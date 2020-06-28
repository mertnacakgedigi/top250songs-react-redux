import ListModel from '../models/list'

const initialState = {
    list : []
}

ListModel.getList()
    .then((res)=> {
        console.log(res)
        initialState.list = res.data
    })

const getList = (state= initialState, action) => {
    return state
}


export default getList