'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

/**
 * 脉冲软件
 * http://maichong.it
 * Created by Rong on 16/4/11.
 * rong@maichong.it
 */

//'use strict';
class Page extends service.Model {
  preSave() {
    var _this = this;

    return _asyncToGenerator(function* () {
      if (!_this.createdAt) {
        _this.createdAt = new Date();
      }
      let results = yield Page.find({
        link: _this.link
      });
      if (results || results.length) {
        console.error('Link Error:Link already exists!');
        service.error('Link Error:Link already exists!');
        throw new Error('Link Error:Link already exists!');
      }
    })();
  }
}
exports.default = Page;
Page.label = 'Page';
Page.defaultColumns = 'title,seoTitle,createdAt';
Page.defaultSort = 'createdAt';
Page.searchFields = 'title,seoTitle';
Page.api = {
  show: 1
};
Page.fields = {
  title: {
    label: 'Title',
    type: String,
    required: true
  },
  content: {
    label: 'Content',
    type: 'html',
    default: ''
  },
  link: {
    label: 'Page Link',
    type: String,
    help: 'Case:http://localhost:5000/page-1/',
    default: ''
  },
  seoTitle: {
    label: 'SEO Title',
    type: String,
    default: ''
  },
  seoKeywords: {
    label: 'SEO Keywords',
    type: String,
    default: ''
  },
  seoDescription: {
    label: 'SEO Description',
    type: String,
    default: ''
  },
  template: {
    label: 'Page Template',
    type: String,
    default: ''
  },
  createdAt: {
    label: 'Created At',
    type: Date
  }
};