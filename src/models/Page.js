/**
 * 脉冲软件
 * http://maichong.it
 * Created by Rong on 16/4/11.
 * chaorong@maichong.it
 */

export default class Page extends service.Model {
  static label = 'Page';
  static defaultColumns = '_id title createdAt';
  static defaultSort = '-createdAt';
  static searchFields = 'title';

  static api = {
    list: 1,
    show: 1
  };

  static fields = {
    _id: {
      type: String,
      required: true
    },
    title: {
      label: 'Title',
      type: String,
      required: true
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
    if (!this.seoTitle) {
      this.seoTitle = this.title;
    }
  }
}
