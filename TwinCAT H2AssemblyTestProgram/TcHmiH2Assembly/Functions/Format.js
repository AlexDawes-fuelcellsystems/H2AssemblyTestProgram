// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.3.277/runtimes/native1.12-tchmi/TcHmi.d.ts" />

/** 
 * Formats a numeric PLC value and appends the unit "BAR".
 * @param {number} value
 * @return {string}
 */
TcHmi.Functions.<TcHmiH2Assembly>.Format = function (value) {
    if (value === undefined || value === null) 
        return '';

    return value.toString() + ' BAR';
};