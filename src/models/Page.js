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
  async preSave() {
    if (!this.createdAt) {
      this.createdAt = new Date;
    }
    let results = await Page.find({
      link: this.link
    });
    if (results || results.length) {
      console.error('Link Error:Link already exists!');
      service.error('Link Error:Link already exists!');
      throw new Error('Link Error:Link already exists!');
    }
  }
}
