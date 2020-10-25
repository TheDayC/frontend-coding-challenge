import { IAPIResponse, IFetchOptions } from './api';

export type ServiceMethodTransform<TIn, TOut> = (response: IAPIResponse<TIn>) => TOut;

export interface IServiceMethodConfig<TIn, TOut> extends RequestInit {
    options?: IFetchOptions;
    transform: ServiceMethodTransform<TIn, TOut>;
    url: string;
}
