
export const SET_EMAIL_ACTION = "SET_EMAIL_ACTION"

export const setEmailAction = (
    email: string
) => {
    return {
        type: SET_EMAIL_ACTION,
        payload: { email }
    }
}