import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Plugeco',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44361/',
    redirectUri: baseUrl,
    clientId: 'Plugeco_App',
    responseType: 'code',
    scope: 'offline_access Plugeco',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44361',
      rootNamespace: 'Plugeco',
    },
  },
} as Environment;
