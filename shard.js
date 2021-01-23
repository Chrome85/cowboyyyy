const {ShardingManager} = require ('discord.js');
const manager = new ShardingManager ('./index.js', {totalShards: 'auto', token: 'Nzc0NzY1NTY1NDY2MTE2MTI2.X6ciqQ.Jdn252MZmm1Ydcmi5k3q-rq0SDM'}); // TOKEN discord.com/developers Alabilirsiniz!

manager.on ('shardCreate', shard => console.log (`Shardlar Başlatılıyor!`));
manager.spawn ();