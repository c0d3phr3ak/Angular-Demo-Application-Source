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
import { JOptEdgeConnectionTimeUnits } from './jOptEdgeConnectionTimeUnits';


/**
 * The time a resource has to work on the node
 */
export interface JOptGeoNodeVisitDuration { 
    seconds?: number;
    units?: Array<JOptEdgeConnectionTimeUnits>;
    zero?: boolean;
    negative?: boolean;
    nano?: number;
}

