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
import { JOptSolutionHeaderTotTime } from './jOptSolutionHeaderTotTime';
import { JOptViolation } from './jOptViolation';
import { JOptSolutionHeaderTotProdTime } from './jOptSolutionHeaderTotProdTime';
import { JOptSolutionHeaderTotIdleTime } from './jOptSolutionHeaderTotIdleTime';
import { JOptSolutionHeaderTotTermiDistance } from './jOptSolutionHeaderTotTermiDistance';
import { JOptSolutionHeaderTotTranTime } from './jOptSolutionHeaderTotTranTime';
import { JOptSolutionHeaderTotDistance } from './jOptSolutionHeaderTotDistance';
import { JOptSolutionHeaderTotTermiTime } from './jOptSolutionHeaderTotTermiTime';


/**
 * The solution header, carrying information about the solution.
 */
export interface JOptSolutionHeader { 
    /**
     * The number of total routes of the solution
     */
    numRoutes: number;
    /**
     * The number of routes holding elements of the solution
     */
    numScheduledRoutes: number;
    /**
     * The number of optimization elements (nodes and resources) of the solution
     */
    totElements: number;
    /**
     * The lsit of node ids that got unassigned of the solution
     */
    unassignedElementIds: Array<string>;
    /**
     * The abstract cost of the solution
     */
    totCost: number;
    totTime: JOptSolutionHeaderTotTime;
    totIdleTime: JOptSolutionHeaderTotIdleTime;
    totProdTime: JOptSolutionHeaderTotProdTime;
    totTranTime: JOptSolutionHeaderTotTranTime;
    totTermiTime: JOptSolutionHeaderTotTermiTime;
    totDistance: JOptSolutionHeaderTotDistance;
    totTermiDistance: JOptSolutionHeaderTotTermiDistance;
    /**
     * The job violations
     */
    jobViolations: Array<JOptViolation>;
}
