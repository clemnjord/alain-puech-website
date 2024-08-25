/* eslint-disable */
type EnMessages = typeof import('./src/messages/en.json');
type FrMessages = typeof import('./src/messages/fr.json');

declare interface IntlMessages extends EnMessages, FrMessages {}
