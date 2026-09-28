
export const selectedCaterory = payload => {
    return ({
        type: "CategorySelect",
        state: payload,
    })
};

export const addPathName = payload => {
    return ({
        type: "PathName",
        state: payload,
    })
};

export const setCategoryData = payload => {
    return ({
        type: "SetCategoryData",
        state: payload,
    })
};