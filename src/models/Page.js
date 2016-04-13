/**
 * 脉冲软件
 * http://maichong.it
 * Created by Rong on 16/4/11.
 * rong@maichong.it
 */

//'use strict';
export default class Page extends service.Model {
  static label = 'Page';
  static defaultColumns = 'title,seoTitle,createdAt';
  static defaultSort = 'createdAt';
  static searchFields = 'title,seoTitle';
  static api = {
    show: 1
  };
  static fields = {
    title: {
      label: 'Title',
      type: String,
      required: true
    },
    link: {
      label: 'Page Link',
      type: String,
      index: true
    },
    seoTitle: {
      label: 'SEO Title',
      type: String
    },
    seoKeywords: {
      label: 'SEO Keywords',
      type: String
    },
    seoDescription: {
      label: 'SEO Description',
      type: String
    },
    template: {
      label: 'Page Template',
      type: String
    },
    createdAt: {
      label: 'Created At',
      type: Date
    },
    content: {
      label: 'Content',
      type: 'html',
      default: ''
    }
  };

  async preSave() {
    if (!this.createdAt) {
      this.createdAt = new Date;
    }
    if (this.link) {
      let count = await Page.count({
        link: this.link
      }).where('_id').ne(this._id);

      if (count) {
        service.error('Page link already exists');
      }
    }
  }
}
