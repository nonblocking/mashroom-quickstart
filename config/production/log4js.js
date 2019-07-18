/*
 * Cluster ready log4js configuration
 */

const cluster = require('cluster');

let clusterSuffix = '';

if (!cluster.isMaster) {
    clusterSuffix = '.' + (process.env.pm_id || process.pid);
}

module.exports = {
    appenders: {
        file: {'type': 'file', 'filename': `../../log/mashroom${clusterSuffix}.log`, 'maxLogSize': 10485760, 'numBackups': 3},
        console: {'type': 'console'}
    },
    categories: {
        default: {appenders: ['file', 'console'], 'level': 'info'}
    },
    disableClustering: true
};
