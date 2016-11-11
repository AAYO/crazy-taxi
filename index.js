"use strict"

var c = require("mithril/hyperscript")

var redrawService = require("mithril/redraw")

c.withAttr = require("mithril/util/withAttr")
c.prop = require("mithril/stream")
c.redraw = redrawService.publish
c.parseQueryString = require("mithril/querystring/parse")
c.buildQueryString = require("mithril/querystring/build")
c.version = "bleeding-edge"

c.compile = require('./compile')

module.exports = c