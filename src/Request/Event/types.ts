



export enum HTTP_EVENT_HANDLE {
    ABORT = "ABORT",
    CONTINUE = "CONTINUE",
    REQUEST = "REQUEST",
    RESPOND = "RESPOND",
    RETRY = "RETRY"
}



export enum HTTP_EVENTS {
    RESPONSE_REGISTERED = 'RESPONSE_REGISTERED',
    RESPONSE_SENT = 'RESPONSE_SENT',
    REQUEST_READY = 'REQUEST_READY',
    REQUEST_FAILED = 'REQUEST_FAILED',
    STATE_CHANGED = 'STATE_CHANGED'
}


export type THTTPEventHandlerCallback = {
    handled: HTTP_EVENT_HANDLE,

}


