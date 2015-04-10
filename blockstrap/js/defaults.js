/*
 * 
 *  Blockstrap v0.5.0.2
 *  http://blockstrap.com
 *
 *  Designed, Developed and Maintained by Neuroware.io Inc
 *  All Work Released Under MIT License
 *  
 *  -- Including this file in the HTML header is the only requirement
 *  -- Everything else, including the loading of dependencies is handled here
 *  
 */

var blockstrap_defaults = '{"v":"0.5.0.2","skip_config":true,"install":false,"public":false,"security":false,"role":"admin","id":"blockstrap","theme":"default","less":false,"test":false,"refresh":false,"cascade":true,"html_base":"html/","data_base":"data/","core_base":"blockstrap/","theme_base":"themes/","dependency_base":"js/dependencies/","module_base":"js/modules/","page_base":"index","slug_base":"dashboard","api_service":"blockstrap","base_url":"","app_id":"framework","content_id":"main-content","navigation_id":"navigation","mobile_nav_id":"mobile-footer","css":["less","font-awesome"],"store":["app_url","your_name","your_username","your_password"],"modules":["forms","accounts","contacts","data","api","security","theme","buttons","styles","templates","filters","blockchains"],"dependencies":["crypto","effects","steps","bootstrap.min","bootstrap-switch.min","mustache","tables","qrcode","bootstrap-filestyle.min","bitcoinjs-lib","sha3","ago","filesaver"],"bootstrap":["lists","jumbotrons","panels","tables","modals","forms","bars"],"buttons":{"classes":["access","edit","hidden_toggler","login","logout","page","print","refresh","remove","reset","setup","import","toggle"],"ids":["create-account","create-contact","create-credentials","edit-object","import-file","more-security","send-money","set-credentials","submit-import","submit-payment","submit-verification","save-salt","save-wallet"]},"contacts":[{"name":"Blockstrap Donations","address":"13uXA8zfLjsnrg69f6FcHVRfwBGobYU3bc","blockchain":"btc","contact_dnk":false}],"tests":{"api":{"address":{"request":"1Nz5RqevRodefPyGVB8EpdwSEGS4Ax2f1k","results":{"address":"1Nz5RqevRodefPyGVB8EpdwSEGS4Ax2f1k","balance":10019000,"blockchain":"btc","hash":"f1260c3cd86ecc03ce460c303ec0e8006e32273d","received":10019000,"tx_count":2}},"addresses":{"request":["1121cQLqCsDsLPAkJW5ddTCREZ7Bp4ufrk","12higDjoCCNXSA95xZMWUdPvXNmkAduhWv"],"results":[{"address":"1121cQLqCsDsLPAkJW5ddTCREZ7Bp4ufrk","balance":0,"blockchain":"btc","hash":"0030ececbad05ffcdff89f3f26e38ca3d735a8de","received":5000000000,"tx_count":2},{"address":"12higDjoCCNXSA95xZMWUdPvXNmkAduhWv","balance":1,"blockchain":"btc","hash":"12ab8dc588ca9d5787dde7eb29569da63c3a238c","received":7764439255613,"tx_count":78}]},"block":{"request":"15968","results":{"blockchain":"btc","hash":"00000000201016a83272835468d457d15965d57f57c0da5944dc94ea9389f360","height":15968,"next":"0000000037d7c9885177df7af395d2e99b176a9372a03b855abdf2c9adac90b1","prev":"00000000abae6b44fa98526e865a08820f4528eda46cad40445de3690c502ae8","time":1243609567,"tx_count":2}},"relay":{"request":"0100000001ec71e2ceac8476bea21fbc4a97062c000f07def6c8ef8d9171fb1a5e113418e0010000008c493046022100e6f39b4393794ef03b0f9dc71395e0835a211015b42ab4329cb6a6c1c8b3c6ea022100f1ccae451f35e5c5ad25a8f7e7b5e778bafc4dc69dd560fab1cbadbb88767916014104e1934263e84e202ebffca95246b63c18c07cd369c4f02de76dbd1db89e6255dacb3ab1895af0422e24e1d1099e80f01b899cfcdf9b947575352dbc1af57466b5ffffffff0210270000000000001976a914652c453e3f8768d6d6e1f2985cb8939db91a4e0588ace065f81f000000001976a914cf0dfe6e0fa6ea5dda32c58ff699071b672e1faf88ac00000000","results":false},"transaction":{"request":"06032a172f88ba823785f87341eab26ee7a2eb2de9d2f105220d6580e3affc16","results":{"block":15968,"blockchain":"btc","fees":0,"input":300000000000,"output":300000000000,"size":6883,"time":1243609567,"txid":"06032a172f88ba823785f87341eab26ee7a2eb2de9d2f105220d6580e3affc16","value":300000000000}},"transactions":{"request":"1Nz5RqevRodefPyGVB8EpdwSEGS4Ax2f1k","results":[{"block":317958,"blockchain":"btc","fees":10000,"input":1030000,"output":1020000,"size":668,"time":1409255576,"txid":"5e441731363d19e7fb541600a944189724d1fd6863483b1d3903b2a2863aafa7","value":19000},{"block":317957,"blockchain":"btc","fees":0,"input":25000000,"output":25000000,"size":225,"time":1409255541,"txid":"65e7df7f40e1a38626a98a150730e5ed42d4b6b648ca9ff66e035ec21903aca3","value":10000000}]},"unspents":{"request":"1Nz5RqevRodefPyGVB8EpdwSEGS4Ax2f1k","results":[{"index":0,"script":"76a914f1260c3cd86ecc03ce460c303ec0e8006e32273d88ac","txid":"5e441731363d19e7fb541600a944189724d1fd6863483b1d3903b2a2863aafa7","value":19000},{"index":0,"script":"76a914f1260c3cd86ecc03ce460c303ec0e8006e32273d88ac","txid":"65e7df7f40e1a38626a98a150730e5ed42d4b6b648ca9ff66e035ec21903aca3","value":10000000}]}}},"cache":{"api":{"timeout":60000,"markets":60000},"accounts":60000,"dependencies":true,"modules":true,"less":true,"bootstrap":true,"plugins":true,"css":true,"config":true,"json":true,"html":true},"exchange":{"usd":{"btc":367.35,"ltc":3.57,"doge":0.00022388,"btct":0,"ltct":0,"doget":0}},"styles":{"vars":{"content_bg":"#DDD","header_bg":"#475862"},"elements":{"content_bg":"#main-content","header_bg":"header"},"rules":{"content_bg":"background","header_bg":"background"}},"blockchains":{"btct":{"blockchain":"Bitcoin Testnet","lib":"bitcointestnet","apis":{"blockstrap":"https://api.blockstrap.com/v0/btct/","sochain":"https://chain.so/api/v2/","blockr":"http://tbtc.blockr.io/api/v1/"},"fee":0.0001},"ltct":{"blockchain":"Litecoin Testnet","lib":"litecointestnet","apis":{"blockstrap":"https://api.blockstrap.com/v0/ltct/","sochain":"https://chain.so/api/v2/"},"fee":0.001},"doget":{"blockchain":"Dogecoin Testnet","lib":"dogecointestnet","apis":{"blockstrap":"https://api.blockstrap.com/v0/dogt/","sochain":"https://chain.so/api/v2/"},"fee":1},"dasht":{"blockchain":"DashPay Testnet","lib":"dashpaytestnet","apis":{"blockstrap":"https://api.blockstrap.com/v0/dasht/"},"fee":0.0001},"multi":{"private":true,"apis":{"blockstrap":"https://api.blockstrap.com/v0/multi/"}},"btc":{"blockchain":"Bitcoin","lib":"bitcoin","apis":{"helloblock":"https://mainnet.helloblock.io/v1/","blockstrap":"https://api.blockstrap.com/v0/btc/","sochain":"https://chain.so/api/v2/","blockr":"http://btc.blockr.io/api/v1/"},"fee":0.0001},"ltc":{"blockchain":"Litecoin","lib":"litecoin","apis":{"blockstrap":"https://api.blockstrap.com/v0/ltc/","sochain":"https://chain.so/api/v2/","blockr":"http://ltc.blockr.io/api/v1/"},"fee":0.001},"doge":{"blockchain":"Dogecoin","lib":"dogecoin","apis":{"blockstrap":"https://api.blockstrap.com/v0/doge/","sochain":"https://chain.so/api/v2/","blockr":"http://dgc.blockr.io/api/v1/"},"fee":1},"dash":{"blockchain":"DashPay","lib":"dashpay","apis":{"blockstrap":"https://api.blockstrap.com/v0/dash/"},"fee":0.0001}},"apis":{"defaults":{"blockstrap":{"functions":{"to":{"address":"address/transactions/","addresses":"address/ids/","transaction":"transaction/id/","transactions":"address/transactions/$call?showtxnio=1","block":"block/height/","dnkey":"dnkey/","dnkeys":"dnkey/","market":"market/stats/","relay":"transaction/relay/","relay_param":"txn_hex","unspents":"address/unspents/$call?showtxnio=1","tx_pagination":"records, skip"},"from":{"address":{"key":"address","address":"address","hash":"address_hash160","tx_count":"transaction_count_total","received":"inputs_value_confirmed","balance":"balance"},"addresses":{"key":"addresses","delimiter":",","address":"address","hash":"address_hash160","tx_count":"transaction_count_total","received":"inputs_value_confirmed","balance":"balance"},"block":{"key":"blocks.0","height":"height","hash":"[id, lowercase]","prev":"[prev_block_id, lowercase]","next":"[next_block_id, lowercase]","tx_count":"tx_count","time":"time"},"dnkey":{"key":"dnkey","dnkey":"dnkey"},"dnkeys":{"key":"dnkeys","dnkeys":"dnkeys"},"market":{"key":"market","price_usd_now":"fiat_usd_now","tx_count_24hr":"tx_count_24hr","sent_usd_24hr":"[output_value_24hr, *, fiat_usd_now, int]","sent_coins_24hr":"output_value_24hr","coins_discovered":"coinbase_value_todate","marketcap":"marketcap"},"relay":{"txid":"id","inner":""},"transaction":{"key":"transaction","txid":"[id, lowercase]","size":"size","block":"block_height","time":"time","input":"input_value","output":"output_value","value":"[output_value, -, fees, int]","fees":"fees"},"transactions":{"key":"address.transactions","txid":"[id, lowercase]","size":"size","block":"block_height","time":"time","input":"input_value","output":"output_value","value":"tx_address_ledger_value","fees":"fees"},"unspents":{"key":"address.transactions","reverse_array":true,"confirmations":"confirmations","txid":"[id, lowercase]","index":"tx_address_pos","value":"tx_address_value","script":"[tx_address_script_pub_key, lowercase]"}}}},"blockr":{"functions":{"to":{"address":"address/info/","block":"block/info/","relay":"tx/push/","relay_param":"hex","transaction":"tx/info/","transactions":"address/txs/","unspents":"address/unspent/"},"from":{"address":{"key":"","address":"address","hash":"[address, hextohash]","tx_count":"nb_txs","received":"[totalreceived, float]","balance":"[balance, float]"},"addresses":{"key":"","delimiter":",","address":"address","hash":"[address, hextohash]","tx_count":"nb_txs","received":"[totalreceived, float]","balance":"[balance, float]"},"block":{"key":"","height":"nb","hash":"hash","prev":"prev_block_hash","next":"next_block_hash","tx_count":"nb_txs","time":"[time_utc, utctoepoch]"},"relay":{"txid":"","inner":""},"transaction":{"key":"","txid":"tx","size":"","block":"block","time":"[time_utc, utctoepoch]","input":"","output":"","value":"","fees":"[fee, float]"},"transactions":{"key":".txs","txid":"tx","size":"","block":"","time":"[time_utc, utc_to_epoch]","input":"","output":"","value":"","fees":"[fee, float]"},"unspents":{"key":".unspent","confirmations":"confirmations","txid":"tx","index":"n","value":"[amount, float]","script":"script"}}}}},"btc":{"helloblock":{"functions":{"to":{"address":"addresses/","addresses":"addresses?addresses=","transaction":"transactions/","transactions":"addresses/$call/transactions?limit=25","block":"blocks/","relay":"transactions/","relay_param":"rawTxHex","unspents":"addresses/$call/unspents?limit=25","tx_pagination":"limit, offset"},"from":{"address":{"key":"address","address":"address","hash":"hash160","tx_count":"txsCount","received":"confirmedReceivedValue","balance":"balance"},"addresses":{"key":"addresses","delimiter":"&addresses=","address":"address","hash":"hash160","tx_count":"txsCount","received":"confirmedReceivedValue","balance":"balance"},"transaction":{"key":"transaction","txid":"txHash","size":"size","block":"blockHeight","time":"blockTime","input":"totalInputsValue","output":"totalOutputsValue","value":"[totalOutputsValue, -, fees, int]","fees":"fees"},"transactions":{"key":"transactions","txid":"txHash","size":"size","block":"blockHeight","time":"blockTime","input":"totalInputsValue","inputs":"inputs","output":"totalOutputsValue","outputs":"outputs","value":"estimatedTxValue","fees":"fees"},"block":{"key":"block","height":"blockHeight","hash":"blockHash","prev":"prevBlockHash","tx_count":"txsCount","time":"blockTime"},"relay":{"txid":"txHash","inner":"transaction"},"unspents":{"key":"unspents","confirmations":"confirmations","txid":"txHash","index":"index","value":"value","script":"scriptPubKey"}}}},"sochain":{"functions":{"to":{"address":"address/BTC/","addresses":"","transaction":"tx/BTC/","transactions":"address/BTC/","block":"block/BTC/","relay":"send_tx/BTC/","relay_param":"tx_hex","unspents":"get_tx_unspent/BTC/"},"from":{"address":{"key":"","address":"address","hash":"[address, hextohash]","tx_count":"total_txs","received":"[received_value, float]","balance":"[balance, float]"},"addresses":{"key":"","address":"","hash":"","tx_count":"","received":"","balance":""},"block":{"key":"","height":"block_no","hash":"blockhash","prev":"previous_blockhash","next":"next_blockhash","tx_count":"[txs, count]","time":"time"},"relay":{"txid":"tx_hex","inner":"transaction"},"transaction":{"key":"","txid":"txid","size":"","block":"block_no","time":"time","input":"","output":"","value":"[sent_value, float]","fees":"[fee, float]"},"transactions":{"key":".txs","txid":"txid","size":"","block":"block_no","time":"time","input":"","output":"","value":"","fees":""},"unspents":{"key":".txs","reverse_array":true,"confirmations":"confirmations","txid":"txid","index":"output_no","value":"[value, float]","script":"script_hex"}}}}},"ltc":{"sochain":{"functions":{"to":{"address":"address/LTC/","addresses":"","transaction":"tx/LTC/","transactions":"","block":"block/LTC/","relay":"send_tx/LTC/","relay_param":"tx_hex","unspents":"get_tx_unspent/LTC/"},"from":{"address":{"key":"","address":"address","hash":"","tx_count":"total_txs","received":"received_value","balance":"balance"},"addresses":{"key":"","address":"","hash":"","tx_count":"","received":"","balance":""},"transaction":{"key":"","txid":"txid","size":"","block":"block_no","time":"time","input":"","output":"","value":"sent_value","fees":"fee"},"transactions":{"key":"","txid":"txid","size":"","block":"block_no","time":"time","input":"","output":"","value":"sent_value","fees":"fee"},"block":{"key":"","height":"block_no","hash":"blockhash","prev":"previous_blockhash","next":"next_blockhash","tx_count":"","time":"time"},"relay":{"txid":"tx_hex","inner":"transaction"},"unspents":{"key":".txs","confirmations":"confirmations","txid":"txid","index":"output_no","value":"value","script":"script_hex"}}}}},"doge":{"sochain":{"functions":{"to":{"address":"address/DOGE/","addresses":"","transaction":"tx/DOGE/","transactions":"","block":"block/DOGE/","relay":"send_tx/DOGE/","relay_param":"tx_hex","unspents":"get_tx_unspent/DOGE/"},"from":{"address":{"key":"","address":"address","hash":"[address, hextohash]","tx_count":"total_txs","received":"[received_value, float]","balance":"[balance, float]"},"addresses":{"key":"","address":"","hash":"","tx_count":"","received":"","balance":""},"block":{"key":"","height":"block_no","hash":"blockhash","prev":"previous_blockhash","next":"next_blockhash","tx_count":"[txs, count]","time":"time"},"relay":{"txid":"tx_hex","inner":"transaction"},"transaction":{"key":"","txid":"txid","size":"","block":"block_no","time":"time","input":"","output":"","value":"[sent_value, float]","fees":"[fee, float]"},"transactions":{"key":".txs","txid":"txid","size":"","block":"block_no","time":"time","input":"","output":"","value":"","fees":""},"unspents":{"key":".txs","reverse_array":true,"confirmations":"confirmations","txid":"txid","index":"output_no","value":"[value, float]","script":"script_hex"}}}}},"btct":{"sochain":{"functions":{"to":{"address":"address/BTCTEST/","addresses":"","transaction":"tx/BTCTEST/","transactions":"","block":"block/BTCTEST/","relay":"send_tx/BTCTEST/","relay_param":"tx_hex","unspents":"get_tx_unspent/BTCTEST/"},"from":{"address":{"key":"","address":"address","hash":"[address, hextohash]","tx_count":"total_txs","received":"[received_value, float]","balance":"[balance, float]"},"addresses":{"key":"","address":"","hash":"","tx_count":"","received":"","balance":""},"block":{"key":"","height":"block_no","hash":"blockhash","prev":"previous_blockhash","next":"next_blockhash","tx_count":"[txs, count]","time":"time"},"relay":{"txid":"tx_hex","inner":"transaction"},"transaction":{"key":"","txid":"txid","size":"","block":"block_no","time":"time","input":"","output":"","value":"[sent_value, float]","fees":"[fee, float]"},"transactions":{"key":".txs","txid":"txid","size":"","block":"block_no","time":"time","input":"","output":"","value":"","fees":""},"unspents":{"key":".txs","reverse_array":true,"confirmations":"confirmations","txid":"txid","index":"output_no","value":"[value, float]","script":"script_hex"}}}}},"ltct":{"sochain":{"functions":{"to":{"address":"address/LTCTEST/","addresses":"","transaction":"tx/LTCTEST/","transactions":"","block":"block/LTCTEST/","relay":"send_tx/LTCTEST/","relay_param":"tx_hex","unspents":"get_tx_unspent/LTCTEST/"},"from":{"address":{"key":"","address":"address","hash":"[address, hextohash]","tx_count":"total_txs","received":"[received_value, float]","balance":"[balance, float]"},"addresses":{"key":"","address":"","hash":"","tx_count":"","received":"","balance":""},"block":{"key":"","height":"block_no","hash":"blockhash","prev":"previous_blockhash","next":"next_blockhash","tx_count":"[txs, count]","time":"time"},"relay":{"txid":"tx_hex","inner":"transaction"},"transaction":{"key":"","txid":"txid","size":"","block":"block_no","time":"time","input":"","output":"","value":"[sent_value, float]","fees":"[fee, float]"},"transactions":{"key":".txs","txid":"txid","size":"","block":"block_no","time":"time","input":"","output":"","value":"","fees":""},"unspents":{"key":".txs","reverse_array":true,"confirmations":"confirmations","txid":"txid","index":"output_no","value":"[value, float]","script":"script_hex"}}}}},"doget":{"sochain":{"functions":{"to":{"address":"address/DOGETEST/","addresses":"","transaction":"tx/DOGETEST/","transactions":"","block":"block/DOGETEST/","relay":"send_tx/DOGETEST/","relay_param":"tx_hex","unspents":"get_tx_unspent/DOGETEST/"},"from":{"address":{"key":"","address":"address","hash":"[address, hextohash]","tx_count":"total_txs","received":"[received_value, float]","balance":"[balance, float]"},"addresses":{"key":"","address":"","hash":"","tx_count":"","received":"","balance":""},"block":{"key":"","height":"block_no","hash":"blockhash","prev":"previous_blockhash","next":"next_blockhash","tx_count":"[txs, count]","time":"time"},"relay":{"txid":"tx_hex","inner":"transaction"},"transaction":{"key":"","txid":"txid","size":"","block":"block_no","time":"time","input":"","output":"","value":"[sent_value, float]","fees":"[fee, float]"},"transactions":{"key":".txs","txid":"txid","size":"","block":"block_no","time":"time","input":"","output":"","value":"","fees":""},"unspents":{"key":".txs","reverse_array":true,"confirmations":"confirmations","txid":"txid","index":"output_no","value":"[value, float]","script":"script_hex"}}}}}}}';