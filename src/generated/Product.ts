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

import { DomainProduct } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Product<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Данный метод возвращает информацию обо всех продуктах
   *
   * @tags Product
   * @name GetAllCreate
   * @summary Все проверки
   * @request POST:/product/getAll
   */
  getAllCreate = (params: RequestParams = {}) =>
    this.request<DomainProduct, any>({
      path: `/product/getAll`,
      method: "POST",
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
