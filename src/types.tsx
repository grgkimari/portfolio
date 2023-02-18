export type ProjectRefProps = {
    name : string,
    link : string,
    imagelink : string
    description? : string
}

export type FormStateType = {
    name : string | null,
    email : string | null
    subject : string,
    message : string
}