import { createStore } from "redux";

const store = (state, action) => {
    if (state === undefined) {
        return {
            semester : "22-1",
            memberFile : "/member/22-1-member.csv",
            displayContents : "log"
        }
    }

    let newState = { ...state };
    if (action.type === "SET_SEMESTER") {
        newState.semester = action.newSemester;
        newState.memberFile = "./member/" + action.newSemester + "-member.csv"
    }
    else if (action.type === "SET_DP") {
        newState.displayContents = action.newContents
    }
    return newState;
}

export default createStore(store)