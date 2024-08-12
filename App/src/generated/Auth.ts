/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { DomainSignIn, DomainSignUp } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Auth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Auth User
   *
   * @tags Auth
   * @name SignInCreate
   * @summary Auth User
   * @request POST:/auth/sign-in
   */
  signInCreate = (input: DomainSignIn, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/auth/sign-in`,
      method: "POST",
      body: input,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Registry User
   *
   * @tags Auth
   * @name SignUpCreate
   * @summary Registry User
   * @request POST:/auth/sign-up
   */
  signUpCreate = (input: DomainSignUp, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/auth/sign-up`,
      method: "POST",
      body: input,
      type: ContentType.Json,
      ...params,
    });
}
