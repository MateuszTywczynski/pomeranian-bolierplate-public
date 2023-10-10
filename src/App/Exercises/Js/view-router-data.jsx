import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as EmptyValuesAndStringsMetaData } from './EmptyValuesAndStrings/router-data';
import { blockRouterMetaData as StringMethodsMetaData } from './StringMethods/router-data';
import { blockRouterMetaData as JsArraysObjectsBasics } from './Exercise-js-arrays-objects-basics/router-data';
import { blockRouterMetaData as JsObjectsBasics } from './ObjectsBasics/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  EmptyValuesAndStringsMetaData,
  StringMethodsMetaData,
  JsArraysObjectsBasics,
  JsObjectsBasics,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
