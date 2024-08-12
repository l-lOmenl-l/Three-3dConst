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

export interface DomainProduct {
  back_wall?: string;
  base?: string;
  floor?: string;
  option_series?: string;
  roof?: string;
  series_closet?: string;
  sizes?: DomainSizes;
  standing?: string;
  type_product?: string;
}

export interface DomainSignIn {
  address?: string;
  fio?: string;
  login?: string;
  password?: string;
  phonenumber?: string;
  place: string;
}

export interface DomainSignUp {
  email: string;
  fathername: string;
  firstname: string;
  lastname: string;
  login: string;
  password: string;
  salon: number;
}

export interface DomainSizes {
  amount_section?: number;
  depth?: number[];
  height?: number[];
  width?: number[];
}
