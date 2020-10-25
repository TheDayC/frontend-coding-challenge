export interface IFetchOptions extends RequestInit {
    query?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    timeout?: number;
    body?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface IAPIResponse<P> {
    responsePayload: P;
}
