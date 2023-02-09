'use strict';

/**
 * bike-selection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bike-selection.bike-selection');
