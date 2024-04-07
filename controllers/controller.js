var db = require('./../helpers/db_helpers')
var helper = require('./../helpers/helpers')
var multiparty = require('multiparty')
var fs = require('fs');
var imageSavePath = "./public/img/"
var image_base_url = helper.ImagePath();

const msg_success = "successfully";
const msg_fail = "fail";

module.exports.controller = (app, io, socket_list) => {


}