export const settableNumber = (value) => async dispatch => {
    dispatch({
        type: "SETTABLENUMBER",
        payload: value
    })
}

export const resettablenumber = () => async dispatch => {
    dispatch({
        type:"RESETTABLENUMBER"
    })
}

export const setfilter = (value) => async dispatch => {
    dispatch({
        type : "SETFILTER",
        payload : value
    })
}

export const resetfilter = () => async dispatch => {
    dispatch({
        type : "RESETFILTER",
    })
}

export const addorder = (id,name,prize,url,table_number) => async dispatch => {
    dispatch({
        type : "ADDORDER",
        payload : {
            id:id,
            name:name,
            prize:prize,
            url:url,
            table_number:table_number
        }
    })
}