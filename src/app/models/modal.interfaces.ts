export interface DataModal {
    data: DataContentModal
}

export interface DataContentModal {
    status: 'error'|'success'|'question',
    message: string,
    title: string,
    buttonSubmitText?: string,
    buttonCancelText?: string
}