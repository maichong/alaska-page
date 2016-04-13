'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Page = require('../models/Page');

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * 脉冲软件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * http://maichong.it
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Created by Rong on 16/4/11.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * rong@maichong.it
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

//'use strict';


exports.default = (() => {
  var ref = _asyncToGenerator(function* (ctx) {
    let link = ctx.query.link || '';
    let result = yield _Page2.default.findOne({
      link: link
    });
    if (!result) {
      ctx.body = {};
      return;
    }
    ctx.body = result;
  });

  return function (_x) {
    return ref.apply(this, arguments);
  };
})();