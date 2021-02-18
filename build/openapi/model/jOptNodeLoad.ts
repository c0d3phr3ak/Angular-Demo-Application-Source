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


/**
 * The load of the node.
 */
export interface JOptNodeLoad { 
    /**
     * Is the node used as unload all location?
     */
    unloadAllDimension: number;
    /**
     * Is the total load dimension?
     */
    totalLoadDimension: number;
    /**
     * The load value for the node. If unloadAll is set to true, this valueis ignored.
     */
    load: Array<number>;
    unloadAll?: boolean;
}
