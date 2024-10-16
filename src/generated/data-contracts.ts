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
  amount_section: number;
  back_wall: string;
  base: string;
  depth: number[];
  floor: string;
  height: number[];
  option_series: string;
  roof: string;
  series_closet: string;
  standing: string;
  type_product: string;
  width: number[];
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
