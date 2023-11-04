import { Environment } from './Environment';
import { Constants } from './Constants';

const { ENVIRONMENT } = Constants;

//! Static class do not instantiate (plz microsoft make a solution for this)
export class Util {
  public constructor() {
    throw new Error('Instantiation of static class `Util`');
  }

  public static getCombinedStringArrayLength(arr: Array<string>): number {
    return arr.reduce((totalLength, str) => totalLength += str.length, 0);
  }

  public static isProduction(): boolean {
    return ENVIRONMENT === Environment.PRODUCTION;
  }
}