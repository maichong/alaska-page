/**
 * 脉冲软件
 * http://maichong.it
 * Created by Rong on 16/4/11.
 * rong@maichong.it
 */

import alaska from 'alaska';

/**
 * @class PageService
 */
export default class PageService extends alaska.Service {
  constructor(options, alaska) {
    options = options || {};
    options.id = 'alaska-page';
    options.dir = __dirname;
    super(options, alaska);
  }
}
