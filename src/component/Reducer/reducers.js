
export const categoryReducer = (state = '', action) => {
    switch (action.type) {
        case "CategorySelect":
            return action.state;
        default:
            return '';
    }
}

export const addPathReducer = (state = '', action) => {
    switch (action.type) {
        case "PathName":
            return action.state;
        default:
            return '';
    }
}

export const setCategoryDataReducer = (state = {}, action) => {

    switch (action.type) {
        case "SetCategoryData":
            return action.state;
        default:
            return state;
    }
}