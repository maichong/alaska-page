/**
 * 脉冲软件
 * http://maichong.it
 * Created by Rong on 16/4/11.
 * rong@maichong.it
 */

//'use strict';
import Page from '../models/Page';

export default async function (ctx) {
  let link = ctx.query.link || '';
  let result = await Page.findOne({
    link: link
  });
  if (!result) {
    ctx.body = {};
    return;
  }
  ctx.body = result;
}
