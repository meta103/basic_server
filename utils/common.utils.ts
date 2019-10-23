/**
 * Common Utils
 * Supported methods:
 * - filterByType(data: Array<any>, property, value)
 * - filterById(data: Array<any>, properties)
 */
export class CommonUtils {
  static getRequestParams(req) {
    return Object.assign(req.query || {}, req.params || {}, req.body || {});
  }

  static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  /**
   * @param  {any} responses object holding the responses for the service
   * @param  {string} controller name of the controller
   * @returns string
   */
  constructor(private responses, private controller) {}
}
