import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class GenericService {
  constructor(
    protected httpClient: HttpClient,
    @Inject('_base') protected _base: string = 'https://localhost:7176/api'
  ) {}

  private url(requestParameter: Partial<RequestParameters>): string {
    return `${
      requestParameter.baseUrl ? requestParameter.baseUrl : this._base
    }/${requestParameter.controller}${
      requestParameter.action ? `/${requestParameter.action}` : ''
    }`;
  }

  get<T>(
    requestParameter: Partial<RequestParameters>,
    id?: string
  ): Observable<T> {
    let url: string = '';
    url = `${this.url(requestParameter)}${id ? `/${id}` : ''}${
      requestParameter.queryString ? `?${requestParameter.queryString}` : ''
    }`;
    return this.httpClient.get<T>(url, { headers: requestParameter.headers });
  }

  post<T>(
    requestParameter: Partial<RequestParameters>,
    body: Partial<T>
  ): Observable<T> {
    let url: string = '';

    url = `${this.url(requestParameter)}${
      requestParameter.queryString ? `?${requestParameter.queryString}` : ''
    }`;

    return this.httpClient.post<T>(url, body, {
      headers: requestParameter.headers,
    });
  }

  put<T>(
    requestParameter: Partial<RequestParameters>,
    body: Partial<T>
  ): Observable<T> {
    let url: string = '';

    url = `${this.url(requestParameter)}${
      requestParameter.queryString ? `?${requestParameter.queryString}` : ''
    }`;

    return this.httpClient.put<T>(url, body, {
      headers: requestParameter.headers,
    });
  }

  delete<T>(
    requestParameter: Partial<RequestParameters>,
    id: any
  ): Observable<T> {
    let url: string = '';

    url = `${this.url(requestParameter)}/${id}${
      requestParameter.queryString ? `?${requestParameter.queryString}` : ''
    }`;

    return this.httpClient.delete<T>(url, {
      headers: requestParameter.headers,
    });
  }
}

export class RequestParameters {
  controller?: string;
  action?: string;
  queryString?: string;
  headers?: HttpHeaders;
  baseUrl?: string;
}
