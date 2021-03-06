/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { JOptOptimizationRunOptionsTimeOut } from './jOptOptimizationRunOptionsTimeOut';
import { JOptRunProperty } from './jOptRunProperty';


/**
 * The run settings for the optimization
 */
export interface JOptOptimizationRunOptions { 
    /**
     * The properties for the behaviour of the optimization during the run
     */
    properties: Array<JOptRunProperty>;
    timeOut: JOptOptimizationRunOptionsTimeOut;
}

