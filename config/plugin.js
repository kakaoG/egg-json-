'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

exports.validate = {
    enable: true,
    package: 'egg-validate'
}

exports.view = {
    enable: true,
    package: 'egg-view',
};

exports.ejs = {
    enable: true,
    package: 'egg-view-ejs',
};