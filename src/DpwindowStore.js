import { createStore } from "redux";

const store = (state, action) => {
    if (state === undefined) {
        return {
            semester : "22-1",
            // memberFile : "./member/22-1_member.pdf",
            displayContents : "log"
        }
    }

    let newState = { ...state };
    if (action.type === "SET_SEMESTER") {
        newState.semester = action.newSemester;
    }
    else if (action.type === "SET_DP") {
        newState.displayContents = action.newContents
    }
    return newState;
}

export default createStore(store)