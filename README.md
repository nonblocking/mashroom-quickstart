
# Mashroom Quickstart

Quickstart template for [Mashroom Server](https://www.mashroom-server.com), an **Integration Platform for Microfrontends**.

This template demonstrates the seamless integration of two different (standalone) express webapps.
One webapp is publicly available, one requires authentication. Both share the same session.

If you're interested in the _Mashroom Portal_ and the integration of single page applications,
check out: https://github.com/nonblocking/mashroom-portal-quickstart

## Prerequisites

* Node.js >= 16

## Start the server

* npm run setup
* npm start

Open [http://localhost:6060](http://localhost:6060) in your browser.

Available users:

* john/john
* admin/admin

If you start the server without NODE_ENV set it will be in development mode and automatically detect changes in the
plugin-packages folder and hot reload plugins.

## Docker

To run the server within a docker container:

    npm run docker:create-image
    npm run docker:start

## Production hints

To run the server in cluster mode you can start it with PM2 like so:

    NODE_ENV=production pm2 start ./mashroom-starter -i max

## Configuration

There is a set of configuration files for development and production in the config folder.

* Server config: *mashroom.json*
* Log4js config: *log4js.json* or *log4js.js*
* URL pattern based access control: *acl.json*
* Users for simple security provider: *users.json*

## Plugins

This quickstart template consists of two *Express* webapps with different template engines.

### Adding new Plugins

All modules added to the *plugin-packages* folder are scanned automatically.

You can also add plugins as *dependencies* in the root *package.json*.
In that case you have to add the path to the installed package (in node_modules) to the *pluginPackageFolders* in *mashroom.json*.

## Development

All plugins can be developed standalone:

* Webapp 1: Run *npm run dev* in the *webapp1* folder
* Webapp 2: Run *npm run dev* in the *webapp2* folder and open http://localhost:6060

