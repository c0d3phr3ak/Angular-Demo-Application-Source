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
import { JOptGeoPosition } from './jOptGeoPosition';
import { JOptWorkingHours } from './jOptWorkingHours';
import { JOptGeoResourceMaxDistance } from './jOptGeoResourceMaxDistance';
import { JOptResourceLoad } from './jOptResourceLoad';
import { JOptGeoResourceMaxTime } from './jOptGeoResourceMaxTime';


/**
 * The list of geoResources
 */
export interface JOptGeoResource { 
    /**
     * The unique id of the resource
     */
    id: string;
    /**
     * An alias that can be optionally attached.
     */
    alias: string;
    /**
     * The list of workingHours
     */
    workingHours: Array<JOptWorkingHours>;
    maxDistance: JOptGeoResourceMaxDistance;
    maxTime: JOptGeoResourceMaxTime;
    position: JOptGeoPosition;
    load: JOptResourceLoad;
}

