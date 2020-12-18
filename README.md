# ocpp-shema-types
A project which uses official ocpp schema data (provided by OCA) to generate typescript type definitions for request and responses of each occp command.

Types are generated from schema using npm package json-schema-to-typescript: https://www.npmjs.com/package/json-schema-to-typescript
Use type to enforce strong-typing in your code base or assure same data type across multiple projects.

Schemas can be used for validation using npm package ajv: https://www.npmjs.com/package/ajv.

## schema validation example
    import * as Ajv from 'ajv';
    import * as schema from '@luisiseverywhere/ocpp-schema-types/schemas/BootNotification.json';
    import { BootNotificationRequest } from '@luisiseverywhere/ocpp-schema-types/types/BootNotification';
    
    ...
    
    const validator = new Ajv({
    schemaId: 'id',
    meta: require('ajv/lib/refs/json-schema-draft-04.json')
    });
    
    ...
    
    const ocppRequest = [2, '1234566', 'BootNotification', {  chargePointVendor: 'a-dummy-vendor', chargePointModel: 'a-dummy-model'}];
    const payload: BootNotificationRequest = ocppRequest[3];
    const isSchemaValid = await this.validator.validate(schema, payload);

## strong typing example
    import { StatusNotificationRequest } from '@luisiseverywhere/ocpp-schema-types/types/StatusNotification';
    import { StatusNotificationResponse } from '@luisiseverywhere/ocpp-schema-types/types/StatusNotificationResponse';
    
    ...
    
    const requestPayload: StatusNotificationRequest = {
        connectorId: 1,
        status: 'Available',
        error: 'NoError'
    };
    
    ...
    
    const responsePayload: StatusNotificationResponse = {};
    