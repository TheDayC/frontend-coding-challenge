import { IFetchOptions, IAPIResponse } from '../types/api';


function getEncodedQuery(options: IFetchOptions): string {
    const queryParams = options.query || {};

    const queryString = Object.keys(queryParams)
        .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(queryParams[k])}`)
        .join('&');

    return queryString !== '' ? `?${queryString}` : '';
}

function getRequestInit(options: IFetchOptions): RequestInit {
    const requestInit: RequestInit = {
        body: options.method === 'POST' ? JSON.stringify(options.body) : undefined,
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            ...(options.headers || {})
        },
        method: options.method || 'GET'
    };

    return requestInit;
}

export async function apiFetch<P>(url: string, options: IFetchOptions): Promise<IAPIResponse<P>> {
    // Encode our query params if we've supplied them. - GET
    const queryParams = getEncodedQuery(options);

    // Initialise request
    const requestInit = getRequestInit(options);

    // Build query path.
    const path = `${url}${queryParams}`;

    // Fetch a response from path with request params.
    const response = await fetch(path, { ...requestInit });

    // Parse json from response and return.
    const body = await response.json();

    return body;
}
