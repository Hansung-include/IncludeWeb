import { createStore } from "redux";

const store = (state, action) => {
    if (state === undefined) {
        return {
            semester : "22-1",
            // memberFile : "./member/22-1_member.pdf",
            memberFile : "src/member/22-1-member.pdf",
            activityFile : "",
        }
    }

    let newState = { ...state };
    if (action.type === "SET_SEMESTER") {
        newState.semester = action.newSemester;
        newState.memberFile = "src/member/" + newState.semester + "-member.pdf";
        // newState.activityFile = "activity/" + newState.semester + "_activity.json";
    }
    
    return newState;
}

export default createStore(store)