/**
 * 脉冲软件
 * http://maichong.it
 * Created by Rong on 16/4/11.
 * rong@maichong.it
 */

import Page from '../models/Page';

export async function show(ctx) {
  let link = ctx.query.link || '';
  if (link) {
    let page = await Page.findOne({ link });
    if (page) {
      ctx.page = page.data();
    }
  }
}
