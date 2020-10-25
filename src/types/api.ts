export interface IFetchOptions extends RequestInit {
    query?: any;
    timeout?: number;
    body?: any;
}

export interface IAPIResponse<P> {
    responsePayload: P;
}
