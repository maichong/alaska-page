'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alaska = require('alaska');

var _alaska2 = _interopRequireDefault(_alaska);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class PageService
 */
class PageService extends _alaska2.default.Service {
  constructor(options, alaska) {
    options = options || {};
    options.id = 'alaska-page';
    options.dir = __dirname;
    super(options, alaska);
  }
}
exports.default = PageService; /**
                                * 脉冲软件
                                * http://maichong.it
                                * Created by Rong on 16/4/11.
                                * rong@maichong.it
                                */