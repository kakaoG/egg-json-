'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const data = ctx.service.user.list();
    await ctx.render('list.ejs', data);
  }
}

module.exports = HomeController;
