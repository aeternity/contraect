(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("parity", [], factory);
	else if(typeof exports === 'object')
		exports["parity"] = factory();
	else
		root["parity"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 99);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bignumber_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bignumber_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_format__ = __webpack_require__(15);
/* harmony export (immutable) */ __webpack_exports__["h"] = inAddress;
/* harmony export (immutable) */ __webpack_exports__["j"] = inAddresses;
/* harmony export (immutable) */ __webpack_exports__["b"] = inBlockNumber;
/* harmony export (immutable) */ __webpack_exports__["g"] = inData;
/* harmony export (immutable) */ __webpack_exports__["l"] = inHash;
/* unused harmony export inTopics */
/* harmony export (immutable) */ __webpack_exports__["k"] = inFilter;
/* harmony export (immutable) */ __webpack_exports__["a"] = inHex;
/* harmony export (immutable) */ __webpack_exports__["i"] = inNumber10;
/* harmony export (immutable) */ __webpack_exports__["f"] = inNumber16;
/* unused harmony export inOptionsCondition */
/* harmony export (immutable) */ __webpack_exports__["c"] = inOptions;
/* harmony export (immutable) */ __webpack_exports__["e"] = inTraceFilter;
/* harmony export (immutable) */ __webpack_exports__["d"] = inTraceType;
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.






function inAddress(address) {
  // TODO: address validation if we have upper-lower addresses
  return inHex(address);
}

function inAddresses(addresses) {
  return (addresses || []).map(inAddress);
}

function inBlockNumber(blockNumber) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_types__["f" /* isString */])(blockNumber)) {
    switch (blockNumber) {
      case 'earliest':
      case 'latest':
      case 'pending':
        return blockNumber;}

  }

  return inNumber16(blockNumber);
}

function inData(data) {
  if (data && data.length && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_types__["d" /* isHex */])(data)) {
    data = data.split('').map(function (chr) {
      return ('0' + chr.charCodeAt(0).toString(16)).slice(-2);
    }).join('');
  }

  return inHex(data);
}

function inHash(hash) {
  return inHex(hash);
}

function inTopics(_topics) {
  var topics = (_topics || []).
  filter(function (topic) {return topic === null || topic;}).
  map(function (topic) {
    if (topic === null) {
      return null;
    }

    if (Array.isArray(topic)) {
      return inTopics(topic);
    }

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_format__["e" /* padLeft */])(topic, 32);
  });

  return topics;
}

function inFilter(options) {
  if (options) {
    Object.keys(options).forEach(function (key) {
      switch (key) {
        case 'address':
          if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_types__["c" /* isArray */])(options[key])) {
            options[key] = options[key].map(inAddress);
          } else {
            options[key] = inAddress(options[key]);
          }
          break;

        case 'fromBlock':
        case 'toBlock':
          options[key] = inBlockNumber(options[key]);
          break;

        case 'limit':
          options[key] = inNumber10(options[key]);
          break;

        case 'topics':
          options[key] = inTopics(options[key]);}

    });
  }

  return options;
}

function inHex(str) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_format__["f" /* toHex */])(str);
}

function inNumber10(number) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_types__["e" /* isInstanceOf */])(number, __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a)) {
    return number.toNumber();
  }

  return new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(number || 0).toNumber();
}

function inNumber16(number) {
  var bn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_types__["e" /* isInstanceOf */])(number, __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a) ?
  number :
  new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(number || 0);

  if (!bn.isInteger()) {
    throw new Error('[format/input::inNumber16] the given number is not an integer: ' + bn.toFormat());
  }

  return inHex(bn.toString(16));
}

function inOptionsCondition(condition) {
  if (condition) {
    if (condition.block) {
      condition.block = condition.block ? inNumber10(condition.block) : null;
    } else if (condition.time) {
      condition.time = inNumber10(Math.floor(condition.time.getTime() / 1000));
    }
  }

  return condition;
}

function inOptions(options) {
  if (options) {
    Object.keys(options).forEach(function (key) {
      switch (key) {
        case 'to':
          // Don't encode the `to` option if it's empty
          // (eg. contract deployments)
          if (options[key]) {
            options[key] = inAddress(options[key]);
          }
          break;

        case 'from':
          options[key] = inAddress(options[key]);
          break;

        case 'condition':
          options[key] = inOptionsCondition(options[key]);
          break;

        case 'gas':
        case 'gasPrice':
          options[key] = inNumber16(new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(options[key]).round());
          break;

        case 'minBlock':
          options[key] = options[key] ? inNumber16(options[key]) : null;
          break;

        case 'value':
        case 'nonce':
          options[key] = inNumber16(options[key]);
          break;

        case 'data':
          options[key] = inData(options[key]);
          break;}

    });
  }

  return options;
}

function inTraceFilter(filterObject) {
  if (filterObject) {
    Object.keys(filterObject).forEach(function (key) {
      switch (key) {
        case 'fromAddress':
        case 'toAddress':
          filterObject[key] = [].concat(filterObject[key]).
          map(function (address) {return inAddress(address);});
          break;

        case 'toBlock':
        case 'fromBlock':
          filterObject[key] = inBlockNumber(filterObject[key]);
          break;}

    });
  }

  return filterObject;
}

function inTraceType(whatTrace) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_types__["f" /* isString */])(whatTrace)) {
    return [whatTrace];
  }

  return whatTrace;
};var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(inAddress, 'inAddress', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/input.js');__REACT_HOT_LOADER__.register(inAddresses, 'inAddresses', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/input.js');__REACT_HOT_LOADER__.register(inBlockNumber, 'inBlockNumber', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/input.js');__REACT_HOT_LOADER__.register(inData, 'inData', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/input.js');__REACT_HOT_LOADER__.register(inHash, 'inHash', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/input.js');__REACT_HOT_LOADER__.register(inTopics, 'inTopics', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/input.js');__REACT_HOT_LOADER__.register(inFilter, 'inFilter', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/input.js');__REACT_HOT_LOADER__.register(inHex, 'inHex', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/input.js');__REACT_HOT_LOADER__.register(inNumber10, 'inNumber10', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/input.js');__REACT_HOT_LOADER__.register(inNumber16, 'inNumber16', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/input.js');__REACT_HOT_LOADER__.register(inOptionsCondition, 'inOptionsCondition', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/input.js');__REACT_HOT_LOADER__.register(inOptions, 'inOptions', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/input.js');__REACT_HOT_LOADER__.register(inTraceFilter, 'inTraceFilter', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/input.js');__REACT_HOT_LOADER__.register(inTraceType, 'inTraceType', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/input.js');}();;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = isArray;
/* harmony export (immutable) */ __webpack_exports__["b"] = isError;
/* harmony export (immutable) */ __webpack_exports__["a"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["d"] = isHex;
/* unused harmony export isObject */
/* harmony export (immutable) */ __webpack_exports__["f"] = isString;
/* harmony export (immutable) */ __webpack_exports__["e"] = isInstanceOf;
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

var HEXDIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

function isArray(test) {
  return Object.prototype.toString.call(test) === '[object Array]';
}

function isError(test) {
  return Object.prototype.toString.call(test) === '[object Error]';
}

function isFunction(test) {
  return Object.prototype.toString.call(test) === '[object Function]';
}

function isHex(_test) {
  if (!isString(_test)) {
    return false;
  }

  if (_test.substr(0, 2) === '0x') {
    return isHex(_test.slice(2));
  }

  var test = _test.toLowerCase();
  var hex = true;

  for (var idx = 0; hex && idx < test.length; idx++) {
    hex = HEXDIGITS.includes(test[idx]);
  }

  return hex;
}

function isObject(test) {
  return Object.prototype.toString.call(test) === '[object Object]';
}

function isString(test) {
  return Object.prototype.toString.call(test) === '[object String]';
}

function isInstanceOf(test, clazz) {
  return test instanceof clazz;
};var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(HEXDIGITS, 'HEXDIGITS', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/types.js');__REACT_HOT_LOADER__.register(isArray, 'isArray', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/types.js');__REACT_HOT_LOADER__.register(isError, 'isError', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/types.js');__REACT_HOT_LOADER__.register(isFunction, 'isFunction', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/types.js');__REACT_HOT_LOADER__.register(isHex, 'isHex', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/types.js');__REACT_HOT_LOADER__.register(isObject, 'isObject', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/types.js');__REACT_HOT_LOADER__.register(isString, 'isString', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/types.js');__REACT_HOT_LOADER__.register(isInstanceOf, 'isInstanceOf', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/types.js');}();;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bignumber_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bignumber_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abi_util_address__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_types__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["f"] = outAccountInfo;
/* harmony export (immutable) */ __webpack_exports__["d"] = outAddress;
/* harmony export (immutable) */ __webpack_exports__["i"] = outAddresses;
/* harmony export (immutable) */ __webpack_exports__["o"] = outBlock;
/* harmony export (immutable) */ __webpack_exports__["g"] = outChainStatus;
/* unused harmony export outDate */
/* harmony export (immutable) */ __webpack_exports__["h"] = outHistogram;
/* harmony export (immutable) */ __webpack_exports__["p"] = outLog;
/* harmony export (immutable) */ __webpack_exports__["k"] = outHwAccountInfo;
/* harmony export (immutable) */ __webpack_exports__["e"] = outNumber;
/* unused harmony export outPeer */
/* harmony export (immutable) */ __webpack_exports__["n"] = outPeers;
/* harmony export (immutable) */ __webpack_exports__["q"] = outReceipt;
/* harmony export (immutable) */ __webpack_exports__["l"] = outRecentDapps;
/* harmony export (immutable) */ __webpack_exports__["c"] = outSignerRequest;
/* harmony export (immutable) */ __webpack_exports__["r"] = outSyncing;
/* unused harmony export outTransactionCondition */
/* harmony export (immutable) */ __webpack_exports__["m"] = outTransaction;
/* unused harmony export outTrace */
/* harmony export (immutable) */ __webpack_exports__["a"] = outTraces;
/* harmony export (immutable) */ __webpack_exports__["b"] = outTraceReplay;
/* harmony export (immutable) */ __webpack_exports__["j"] = outVaultMeta;
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;}; // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.






function outAccountInfo(infos) {
  return Object.
  keys(infos).
  reduce(function (ret, _address) {
    var info = infos[_address];
    var address = outAddress(_address);

    ret[address] = {
      name: info.name };


    if (info.meta) {
      ret[address].uuid = info.uuid;
      ret[address].meta = JSON.parse(info.meta);
    }

    return ret;
  }, {});
}

function outAddress(address) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__abi_util_address__["a" /* toChecksumAddress */])(address);
}

function outAddresses(addresses) {
  return (addresses || []).map(outAddress);
}

function outBlock(block) {
  if (block) {
    Object.keys(block).forEach(function (key) {
      switch (key) {
        case 'author':
        case 'miner':
          block[key] = outAddress(block[key]);
          break;

        case 'difficulty':
        case 'gasLimit':
        case 'gasUsed':
        case 'nonce':
        case 'number':
        case 'totalDifficulty':
          block[key] = outNumber(block[key]);
          break;

        case 'timestamp':
          block[key] = outDate(block[key]);
          break;}

    });
  }

  return block;
}

function outChainStatus(status) {
  if (status) {
    Object.keys(status).forEach(function (key) {
      switch (key) {
        case 'blockGap':
          status[key] = status[key] ?
          status[key].map(outNumber) :
          status[key];
          break;}

    });
  }

  return status;
}

function outDate(date) {
  return new Date(outNumber(date).toNumber() * 1000);
}

function outHistogram(histogram) {
  if (histogram) {
    Object.keys(histogram).forEach(function (key) {
      switch (key) {
        case 'bucketBounds':
        case 'counts':
          histogram[key] = histogram[key].map(outNumber);
          break;}

    });
  }

  return histogram;
}

function outLog(log) {
  Object.keys(log).forEach(function (key) {
    switch (key) {
      case 'blockNumber':
      case 'logIndex':
      case 'transactionIndex':
        log[key] = outNumber(log[key]);
        break;

      case 'address':
        log[key] = outAddress(log[key]);
        break;}

  });

  return log;
}

function outHwAccountInfo(infos) {
  return Object.
  keys(infos).
  reduce(function (ret, _address) {
    var address = outAddress(_address);

    ret[address] = infos[_address];

    return ret;
  }, {});
}

function outNumber(number) {
  return new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(number || 0);
}

function outPeer(peer) {
  var protocols = Object.keys(peer.protocols).
  reduce(function (obj, key) {
    if (peer.protocols[key]) {
      obj[key] = _extends({},
      peer.protocols[key], {
        difficulty: outNumber(peer.protocols[key].difficulty) });

    }

    return obj;
  }, {});

  return _extends({},
  peer, {
    protocols: protocols });

}

function outPeers(peers) {
  return {
    active: outNumber(peers.active),
    connected: outNumber(peers.connected),
    max: outNumber(peers.max),
    peers: peers.peers.map(function (peer) {return outPeer(peer);}) };

}

function outReceipt(receipt) {
  if (receipt) {
    Object.keys(receipt).forEach(function (key) {
      switch (key) {
        case 'blockNumber':
        case 'cumulativeGasUsed':
        case 'gasUsed':
        case 'transactionIndex':
          receipt[key] = outNumber(receipt[key]);
          break;

        case 'contractAddress':
          receipt[key] = outAddress(receipt[key]);
          break;}

    });
  }

  return receipt;
}

function outRecentDapps(recentDapps) {
  if (recentDapps) {
    Object.keys(recentDapps).forEach(function (url) {
      recentDapps[url] = outDate(recentDapps[url]);
    });
  }

  return recentDapps;
}

function outSignerRequest(request) {
  if (request) {
    Object.keys(request).forEach(function (key) {
      switch (key) {
        case 'id':
          request[key] = outNumber(request[key]);
          break;

        case 'payload':
          request[key].signTransaction = outTransaction(request[key].signTransaction);
          request[key].sendTransaction = outTransaction(request[key].sendTransaction);
          break;

        case 'origin':
          var type = Object.keys(request[key])[0];
          var details = request[key][type];

          request[key] = { type: type, details: details };
          break;}

    });
  }

  return request;
}

function outSyncing(syncing) {
  if (syncing && syncing !== 'false') {
    Object.keys(syncing).forEach(function (key) {
      switch (key) {
        case 'currentBlock':
        case 'highestBlock':
        case 'startingBlock':
        case 'warpChunksAmount':
        case 'warpChunksProcessed':
          syncing[key] = outNumber(syncing[key]);
          break;

        case 'blockGap':
          syncing[key] = syncing[key] ? syncing[key].map(outNumber) : syncing[key];
          break;}

    });
  }

  return syncing;
}

function outTransactionCondition(condition) {
  if (condition) {
    if (condition.block) {
      condition.block = outNumber(condition.block);
    } else if (condition.time) {
      condition.time = outDate(condition.time);
    }
  }

  return condition;
}

function outTransaction(tx) {
  if (tx) {
    Object.keys(tx).forEach(function (key) {
      switch (key) {
        case 'blockNumber':
        case 'gasPrice':
        case 'gas':
        case 'nonce':
        case 'transactionIndex':
        case 'value':
          tx[key] = outNumber(tx[key]);
          break;

        case 'condition':
          tx[key] = outTransactionCondition(tx[key]);
          break;

        case 'minBlock':
          tx[key] = tx[key] ?
          outNumber(tx[key]) :
          null;
          break;

        case 'creates':
        case 'from':
        case 'to':
          tx[key] = outAddress(tx[key]);
          break;}

    });
  }

  return tx;
}

function outTrace(trace) {
  if (trace) {
    if (trace.action) {
      Object.keys(trace.action).forEach(function (key) {
        switch (key) {
          case 'gas':
          case 'value':
          case 'balance':
            trace.action[key] = outNumber(trace.action[key]);
            break;

          case 'from':
          case 'to':
          case 'address':
          case 'refundAddress':
            trace.action[key] = outAddress(trace.action[key]);
            break;}

      });
    }

    if (trace.result) {
      Object.keys(trace.result).forEach(function (key) {
        switch (key) {
          case 'gasUsed':
            trace.result[key] = outNumber(trace.result[key]);
            break;

          case 'address':
            trace.action[key] = outAddress(trace.action[key]);
            break;}

      });
    }

    if (trace.traceAddress) {
      trace.traceAddress.forEach(function (address, index) {
        trace.traceAddress[index] = outNumber(address);
      });
    }

    Object.keys(trace).forEach(function (key) {
      switch (key) {
        case 'subtraces':
        case 'transactionPosition':
        case 'blockNumber':
          trace[key] = outNumber(trace[key]);
          break;}

    });
  }

  return trace;
}

function outTraces(traces) {
  if (traces) {
    return traces.map(outTrace);
  }

  return traces;
}

function outTraceReplay(trace) {
  if (trace) {
    Object.keys(trace).forEach(function (key) {
      switch (key) {
        case 'trace':
          trace[key] = outTraces(trace[key]);
          break;}

    });
  }

  return trace;
}

function outVaultMeta(meta) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_types__["f" /* isString */])(meta)) {
    try {
      var obj = JSON.parse(meta);

      return obj;
    } catch (error) {
      return {};
    }
  }

  return meta || {};
};var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(outAccountInfo, 'outAccountInfo', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/output.js');__REACT_HOT_LOADER__.register(outAddress, 'outAddress', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/output.js');__REACT_HOT_LOADER__.register(outAddresses, 'outAddresses', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/output.js');__REACT_HOT_LOADER__.register(outBlock, 'outBlock', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/output.js');__REACT_HOT_LOADER__.register(outChainStatus, 'outChainStatus', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/output.js');__REACT_HOT_LOADER__.register(outDate, 'outDate', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/output.js');__REACT_HOT_LOADER__.register(outHistogram, 'outHistogram', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/output.js');__REACT_HOT_LOADER__.register(outLog, 'outLog', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/output.js');__REACT_HOT_LOADER__.register(outHwAccountInfo, 'outHwAccountInfo', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/output.js');__REACT_HOT_LOADER__.register(outNumber, 'outNumber', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/output.js');__REACT_HOT_LOADER__.register(outPeer, 'outPeer', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/output.js');__REACT_HOT_LOADER__.register(outPeers, 'outPeers', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/output.js');__REACT_HOT_LOADER__.register(outReceipt, 'outReceipt', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/output.js');__REACT_HOT_LOADER__.register(outRecentDapps, 'outRecentDapps', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/output.js');__REACT_HOT_LOADER__.register(outSignerRequest, 'outSignerRequest', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/output.js');__REACT_HOT_LOADER__.register(outSyncing, 'outSyncing', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/output.js');__REACT_HOT_LOADER__.register(outTransactionCondition, 'outTransactionCondition', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/output.js');__REACT_HOT_LOADER__.register(outTransaction, 'outTransaction', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/output.js');__REACT_HOT_LOADER__.register(outTrace, 'outTrace', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/output.js');__REACT_HOT_LOADER__.register(outTraces, 'outTraces', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/output.js');__REACT_HOT_LOADER__.register(outTraceReplay, 'outTraceReplay', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/output.js');__REACT_HOT_LOADER__.register(outVaultMeta, 'outVaultMeta', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/format/output.js');}();;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! bignumber.js v3.0.1 https://github.com/MikeMcl/bignumber.js/LICENCE */

;(function (globalObj) {
    'use strict';

    /*
      bignumber.js v3.0.1
      A JavaScript library for arbitrary-precision arithmetic.
      https://github.com/MikeMcl/bignumber.js
      Copyright (c) 2016 Michael Mclaughlin <M8ch88l@gmail.com>
      MIT Expat Licence
    */


    var BigNumber, parseNumeric,
        isNumeric = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        mathceil = Math.ceil,
        mathfloor = Math.floor,
        notBool = ' not a boolean or binary digit',
        roundingMode = 'rounding mode',
        tooManyDigits = 'number type has more than 15 significant digits',
        ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_',
        BASE = 1e14,
        LOG_BASE = 14,
        MAX_SAFE_INTEGER = 0x1fffffffffffff,         // 2^53 - 1
        // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
        POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
        SQRT_BASE = 1e7,

        /*
         * The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
         * the arguments to toExponential, toFixed, toFormat, and toPrecision, beyond which an
         * exception is thrown (if ERRORS is true).
         */
        MAX = 1E9;                                   // 0 to MAX_INT32


    /*
     * Create and return a BigNumber constructor.
     */
    function constructorFactory(configObj) {
        var div,

            // id tracks the caller function, so its name can be included in error messages.
            id = 0,
            P = BigNumber.prototype,
            ONE = new BigNumber(1),


            /********************************* EDITABLE DEFAULTS **********************************/


            /*
             * The default values below must be integers within the inclusive ranges stated.
             * The values can also be changed at run-time using BigNumber.config.
             */

            // The maximum number of decimal places for operations involving division.
            DECIMAL_PLACES = 20,                     // 0 to MAX

            /*
             * The rounding mode used when rounding to the above decimal places, and when using
             * toExponential, toFixed, toFormat and toPrecision, and round (default value).
             * UP         0 Away from zero.
             * DOWN       1 Towards zero.
             * CEIL       2 Towards +Infinity.
             * FLOOR      3 Towards -Infinity.
             * HALF_UP    4 Towards nearest neighbour. If equidistant, up.
             * HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
             * HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
             * HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
             * HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
             */
            ROUNDING_MODE = 4,                       // 0 to 8

            // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]

            // The exponent value at and beneath which toString returns exponential notation.
            // Number type: -7
            TO_EXP_NEG = -7,                         // 0 to -MAX

            // The exponent value at and above which toString returns exponential notation.
            // Number type: 21
            TO_EXP_POS = 21,                         // 0 to MAX

            // RANGE : [MIN_EXP, MAX_EXP]

            // The minimum exponent value, beneath which underflow to zero occurs.
            // Number type: -324  (5e-324)
            MIN_EXP = -1e7,                          // -1 to -MAX

            // The maximum exponent value, above which overflow to Infinity occurs.
            // Number type:  308  (1.7976931348623157e+308)
            // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
            MAX_EXP = 1e7,                           // 1 to MAX

            // Whether BigNumber Errors are ever thrown.
            ERRORS = true,                           // true or false

            // Change to intValidatorNoErrors if ERRORS is false.
            isValidInt = intValidatorWithErrors,     // intValidatorWithErrors/intValidatorNoErrors

            // Whether to use cryptographically-secure random number generation, if available.
            CRYPTO = false,                          // true or false

            /*
             * The modulo mode used when calculating the modulus: a mod n.
             * The quotient (q = a / n) is calculated according to the corresponding rounding mode.
             * The remainder (r) is calculated as: r = a - n * q.
             *
             * UP        0 The remainder is positive if the dividend is negative, else is negative.
             * DOWN      1 The remainder has the same sign as the dividend.
             *             This modulo mode is commonly known as 'truncated division' and is
             *             equivalent to (a % n) in JavaScript.
             * FLOOR     3 The remainder has the same sign as the divisor (Python %).
             * HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
             * EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
             *             The remainder is always positive.
             *
             * The truncated division, floored division, Euclidian division and IEEE 754 remainder
             * modes are commonly used for the modulus operation.
             * Although the other rounding modes can also be used, they may not give useful results.
             */
            MODULO_MODE = 1,                         // 0 to 9

            // The maximum number of significant digits of the result of the toPower operation.
            // If POW_PRECISION is 0, there will be unlimited significant digits.
            POW_PRECISION = 0,                       // 0 to MAX

            // The format specification used by the BigNumber.prototype.toFormat method.
            FORMAT = {
                decimalSeparator: '.',
                groupSeparator: ',',
                groupSize: 3,
                secondaryGroupSize: 0,
                fractionGroupSeparator: '\xA0',      // non-breaking space
                fractionGroupSize: 0
            };


        /******************************************************************************************/


        // CONSTRUCTOR


        /*
         * The BigNumber constructor and exported function.
         * Create and return a new instance of a BigNumber object.
         *
         * n {number|string|BigNumber} A numeric value.
         * [b] {number} The base of n. Integer, 2 to 64 inclusive.
         */
        function BigNumber( n, b ) {
            var c, e, i, num, len, str,
                x = this;

            // Enable constructor usage without new.
            if ( !( x instanceof BigNumber ) ) {

                // 'BigNumber() constructor call without new: {n}'
                if (ERRORS) raise( 26, 'constructor call without new', n );
                return new BigNumber( n, b );
            }

            // 'new BigNumber() base not an integer: {b}'
            // 'new BigNumber() base out of range: {b}'
            if ( b == null || !isValidInt( b, 2, 64, id, 'base' ) ) {

                // Duplicate.
                if ( n instanceof BigNumber ) {
                    x.s = n.s;
                    x.e = n.e;
                    x.c = ( n = n.c ) ? n.slice() : n;
                    id = 0;
                    return;
                }

                if ( ( num = typeof n == 'number' ) && n * 0 == 0 ) {
                    x.s = 1 / n < 0 ? ( n = -n, -1 ) : 1;

                    // Fast path for integers.
                    if ( n === ~~n ) {
                        for ( e = 0, i = n; i >= 10; i /= 10, e++ );
                        x.e = e;
                        x.c = [n];
                        id = 0;
                        return;
                    }

                    str = n + '';
                } else {
                    if ( !isNumeric.test( str = n + '' ) ) return parseNumeric( x, str, num );
                    x.s = str.charCodeAt(0) === 45 ? ( str = str.slice(1), -1 ) : 1;
                }
            } else {
                b = b | 0;
                str = n + '';

                // Ensure return value is rounded to DECIMAL_PLACES as with other bases.
                // Allow exponential notation to be used with base 10 argument.
                if ( b == 10 ) {
                    x = new BigNumber( n instanceof BigNumber ? n : str );
                    return round( x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE );
                }

                // Avoid potential interpretation of Infinity and NaN as base 44+ values.
                // Any number in exponential form will fail due to the [Ee][+-].
                if ( ( num = typeof n == 'number' ) && n * 0 != 0 ||
                  !( new RegExp( '^-?' + ( c = '[' + ALPHABET.slice( 0, b ) + ']+' ) +
                    '(?:\\.' + c + ')?$',b < 37 ? 'i' : '' ) ).test(str) ) {
                    return parseNumeric( x, str, num, b );
                }

                if (num) {
                    x.s = 1 / n < 0 ? ( str = str.slice(1), -1 ) : 1;

                    if ( ERRORS && str.replace( /^0\.0*|\./, '' ).length > 15 ) {

                        // 'new BigNumber() number type has more than 15 significant digits: {n}'
                        raise( id, tooManyDigits, n );
                    }

                    // Prevent later check for length on converted number.
                    num = false;
                } else {
                    x.s = str.charCodeAt(0) === 45 ? ( str = str.slice(1), -1 ) : 1;
                }

                str = convertBase( str, 10, b, x.s );
            }

            // Decimal point?
            if ( ( e = str.indexOf('.') ) > -1 ) str = str.replace( '.', '' );

            // Exponential form?
            if ( ( i = str.search( /e/i ) ) > 0 ) {

                // Determine exponent.
                if ( e < 0 ) e = i;
                e += +str.slice( i + 1 );
                str = str.substring( 0, i );
            } else if ( e < 0 ) {

                // Integer.
                e = str.length;
            }

            // Determine leading zeros.
            for ( i = 0; str.charCodeAt(i) === 48; i++ );

            // Determine trailing zeros.
            for ( len = str.length; str.charCodeAt(--len) === 48; );
            str = str.slice( i, len + 1 );

            if (str) {
                len = str.length;

                // Disallow numbers with over 15 significant digits if number type.
                // 'new BigNumber() number type has more than 15 significant digits: {n}'
                if ( num && ERRORS && len > 15 && ( n > MAX_SAFE_INTEGER || n !== mathfloor(n) ) ) {
                    raise( id, tooManyDigits, x.s * n );
                }

                e = e - i - 1;

                 // Overflow?
                if ( e > MAX_EXP ) {

                    // Infinity.
                    x.c = x.e = null;

                // Underflow?
                } else if ( e < MIN_EXP ) {

                    // Zero.
                    x.c = [ x.e = 0 ];
                } else {
                    x.e = e;
                    x.c = [];

                    // Transform base

                    // e is the base 10 exponent.
                    // i is where to slice str to get the first element of the coefficient array.
                    i = ( e + 1 ) % LOG_BASE;
                    if ( e < 0 ) i += LOG_BASE;

                    if ( i < len ) {
                        if (i) x.c.push( +str.slice( 0, i ) );

                        for ( len -= LOG_BASE; i < len; ) {
                            x.c.push( +str.slice( i, i += LOG_BASE ) );
                        }

                        str = str.slice(i);
                        i = LOG_BASE - str.length;
                    } else {
                        i -= len;
                    }

                    for ( ; i--; str += '0' );
                    x.c.push( +str );
                }
            } else {

                // Zero.
                x.c = [ x.e = 0 ];
            }

            id = 0;
        }


        // CONSTRUCTOR PROPERTIES


        BigNumber.another = constructorFactory;

        BigNumber.ROUND_UP = 0;
        BigNumber.ROUND_DOWN = 1;
        BigNumber.ROUND_CEIL = 2;
        BigNumber.ROUND_FLOOR = 3;
        BigNumber.ROUND_HALF_UP = 4;
        BigNumber.ROUND_HALF_DOWN = 5;
        BigNumber.ROUND_HALF_EVEN = 6;
        BigNumber.ROUND_HALF_CEIL = 7;
        BigNumber.ROUND_HALF_FLOOR = 8;
        BigNumber.EUCLID = 9;


        /*
         * Configure infrequently-changing library-wide settings.
         *
         * Accept an object or an argument list, with one or many of the following properties or
         * parameters respectively:
         *
         *   DECIMAL_PLACES  {number}  Integer, 0 to MAX inclusive
         *   ROUNDING_MODE   {number}  Integer, 0 to 8 inclusive
         *   EXPONENTIAL_AT  {number|number[]}  Integer, -MAX to MAX inclusive or
         *                                      [integer -MAX to 0 incl., 0 to MAX incl.]
         *   RANGE           {number|number[]}  Non-zero integer, -MAX to MAX inclusive or
         *                                      [integer -MAX to -1 incl., integer 1 to MAX incl.]
         *   ERRORS          {boolean|number}   true, false, 1 or 0
         *   CRYPTO          {boolean|number}   true, false, 1 or 0
         *   MODULO_MODE     {number}           0 to 9 inclusive
         *   POW_PRECISION   {number}           0 to MAX inclusive
         *   FORMAT          {object}           See BigNumber.prototype.toFormat
         *      decimalSeparator       {string}
         *      groupSeparator         {string}
         *      groupSize              {number}
         *      secondaryGroupSize     {number}
         *      fractionGroupSeparator {string}
         *      fractionGroupSize      {number}
         *
         * (The values assigned to the above FORMAT object properties are not checked for validity.)
         *
         * E.g.
         * BigNumber.config(20, 4) is equivalent to
         * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
         *
         * Ignore properties/parameters set to null or undefined.
         * Return an object with the properties current values.
         */
        BigNumber.config = BigNumber.set = function () {
            var v, p,
                i = 0,
                r = {},
                a = arguments,
                o = a[0],
                has = o && typeof o == 'object'
                  ? function () { if ( o.hasOwnProperty(p) ) return ( v = o[p] ) != null; }
                  : function () { if ( a.length > i ) return ( v = a[i++] ) != null; };

            // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
            // 'config() DECIMAL_PLACES not an integer: {v}'
            // 'config() DECIMAL_PLACES out of range: {v}'
            if ( has( p = 'DECIMAL_PLACES' ) && isValidInt( v, 0, MAX, 2, p ) ) {
                DECIMAL_PLACES = v | 0;
            }
            r[p] = DECIMAL_PLACES;

            // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
            // 'config() ROUNDING_MODE not an integer: {v}'
            // 'config() ROUNDING_MODE out of range: {v}'
            if ( has( p = 'ROUNDING_MODE' ) && isValidInt( v, 0, 8, 2, p ) ) {
                ROUNDING_MODE = v | 0;
            }
            r[p] = ROUNDING_MODE;

            // EXPONENTIAL_AT {number|number[]}
            // Integer, -MAX to MAX inclusive or [integer -MAX to 0 inclusive, 0 to MAX inclusive].
            // 'config() EXPONENTIAL_AT not an integer: {v}'
            // 'config() EXPONENTIAL_AT out of range: {v}'
            if ( has( p = 'EXPONENTIAL_AT' ) ) {

                if ( isArray(v) ) {
                    if ( isValidInt( v[0], -MAX, 0, 2, p ) && isValidInt( v[1], 0, MAX, 2, p ) ) {
                        TO_EXP_NEG = v[0] | 0;
                        TO_EXP_POS = v[1] | 0;
                    }
                } else if ( isValidInt( v, -MAX, MAX, 2, p ) ) {
                    TO_EXP_NEG = -( TO_EXP_POS = ( v < 0 ? -v : v ) | 0 );
                }
            }
            r[p] = [ TO_EXP_NEG, TO_EXP_POS ];

            // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
            // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
            // 'config() RANGE not an integer: {v}'
            // 'config() RANGE cannot be zero: {v}'
            // 'config() RANGE out of range: {v}'
            if ( has( p = 'RANGE' ) ) {

                if ( isArray(v) ) {
                    if ( isValidInt( v[0], -MAX, -1, 2, p ) && isValidInt( v[1], 1, MAX, 2, p ) ) {
                        MIN_EXP = v[0] | 0;
                        MAX_EXP = v[1] | 0;
                    }
                } else if ( isValidInt( v, -MAX, MAX, 2, p ) ) {
                    if ( v | 0 ) MIN_EXP = -( MAX_EXP = ( v < 0 ? -v : v ) | 0 );
                    else if (ERRORS) raise( 2, p + ' cannot be zero', v );
                }
            }
            r[p] = [ MIN_EXP, MAX_EXP ];

            // ERRORS {boolean|number} true, false, 1 or 0.
            // 'config() ERRORS not a boolean or binary digit: {v}'
            if ( has( p = 'ERRORS' ) ) {

                if ( v === !!v || v === 1 || v === 0 ) {
                    id = 0;
                    isValidInt = ( ERRORS = !!v ) ? intValidatorWithErrors : intValidatorNoErrors;
                } else if (ERRORS) {
                    raise( 2, p + notBool, v );
                }
            }
            r[p] = ERRORS;

            // CRYPTO {boolean|number} true, false, 1 or 0.
            // 'config() CRYPTO not a boolean or binary digit: {v}'
            // 'config() crypto unavailable: {crypto}'
            if ( has( p = 'CRYPTO' ) ) {

                if ( v === true || v === false || v === 1 || v === 0 ) {
                    if (v) {
                        v = typeof crypto == 'undefined';
                        if ( !v && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                            CRYPTO = true;
                        } else if (ERRORS) {
                            raise( 2, 'crypto unavailable', v ? void 0 : crypto );
                        } else {
                            CRYPTO = false;
                        }
                    } else {
                        CRYPTO = false;
                    }
                } else if (ERRORS) {
                    raise( 2, p + notBool, v );
                }
            }
            r[p] = CRYPTO;

            // MODULO_MODE {number} Integer, 0 to 9 inclusive.
            // 'config() MODULO_MODE not an integer: {v}'
            // 'config() MODULO_MODE out of range: {v}'
            if ( has( p = 'MODULO_MODE' ) && isValidInt( v, 0, 9, 2, p ) ) {
                MODULO_MODE = v | 0;
            }
            r[p] = MODULO_MODE;

            // POW_PRECISION {number} Integer, 0 to MAX inclusive.
            // 'config() POW_PRECISION not an integer: {v}'
            // 'config() POW_PRECISION out of range: {v}'
            if ( has( p = 'POW_PRECISION' ) && isValidInt( v, 0, MAX, 2, p ) ) {
                POW_PRECISION = v | 0;
            }
            r[p] = POW_PRECISION;

            // FORMAT {object}
            // 'config() FORMAT not an object: {v}'
            if ( has( p = 'FORMAT' ) ) {

                if ( typeof v == 'object' ) {
                    FORMAT = v;
                } else if (ERRORS) {
                    raise( 2, p + ' not an object', v );
                }
            }
            r[p] = FORMAT;

            return r;
        };


        /*
         * Return a new BigNumber whose value is the maximum of the arguments.
         *
         * arguments {number|string|BigNumber}
         */
        BigNumber.max = function () { return maxOrMin( arguments, P.lt ); };


        /*
         * Return a new BigNumber whose value is the minimum of the arguments.
         *
         * arguments {number|string|BigNumber}
         */
        BigNumber.min = function () { return maxOrMin( arguments, P.gt ); };


        /*
         * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
         * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
         * zeros are produced).
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         *
         * 'random() decimal places not an integer: {dp}'
         * 'random() decimal places out of range: {dp}'
         * 'random() crypto unavailable: {crypto}'
         */
        BigNumber.random = (function () {
            var pow2_53 = 0x20000000000000;

            // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
            // Check if Math.random() produces more than 32 bits of randomness.
            // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
            // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
            var random53bitInt = (Math.random() * pow2_53) & 0x1fffff
              ? function () { return mathfloor( Math.random() * pow2_53 ); }
              : function () { return ((Math.random() * 0x40000000 | 0) * 0x800000) +
                  (Math.random() * 0x800000 | 0); };

            return function (dp) {
                var a, b, e, k, v,
                    i = 0,
                    c = [],
                    rand = new BigNumber(ONE);

                dp = dp == null || !isValidInt( dp, 0, MAX, 14 ) ? DECIMAL_PLACES : dp | 0;
                k = mathceil( dp / LOG_BASE );

                if (CRYPTO) {

                    // Browsers supporting crypto.getRandomValues.
                    if (crypto.getRandomValues) {

                        a = crypto.getRandomValues( new Uint32Array( k *= 2 ) );

                        for ( ; i < k; ) {

                            // 53 bits:
                            // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
                            // 11111 11111111 11111111 11111111 11100000 00000000 00000000
                            // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
                            //                                     11111 11111111 11111111
                            // 0x20000 is 2^21.
                            v = a[i] * 0x20000 + (a[i + 1] >>> 11);

                            // Rejection sampling:
                            // 0 <= v < 9007199254740992
                            // Probability that v >= 9e15, is
                            // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
                            if ( v >= 9e15 ) {
                                b = crypto.getRandomValues( new Uint32Array(2) );
                                a[i] = b[0];
                                a[i + 1] = b[1];
                            } else {

                                // 0 <= v <= 8999999999999999
                                // 0 <= (v % 1e14) <= 99999999999999
                                c.push( v % 1e14 );
                                i += 2;
                            }
                        }
                        i = k / 2;

                    // Node.js supporting crypto.randomBytes.
                    } else if (crypto.randomBytes) {

                        // buffer
                        a = crypto.randomBytes( k *= 7 );

                        for ( ; i < k; ) {

                            // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
                            // 0x100000000 is 2^32, 0x1000000 is 2^24
                            // 11111 11111111 11111111 11111111 11111111 11111111 11111111
                            // 0 <= v < 9007199254740992
                            v = ( ( a[i] & 31 ) * 0x1000000000000 ) + ( a[i + 1] * 0x10000000000 ) +
                                  ( a[i + 2] * 0x100000000 ) + ( a[i + 3] * 0x1000000 ) +
                                  ( a[i + 4] << 16 ) + ( a[i + 5] << 8 ) + a[i + 6];

                            if ( v >= 9e15 ) {
                                crypto.randomBytes(7).copy( a, i );
                            } else {

                                // 0 <= (v % 1e14) <= 99999999999999
                                c.push( v % 1e14 );
                                i += 7;
                            }
                        }
                        i = k / 7;
                    } else {
                        CRYPTO = false;
                        if (ERRORS) raise( 14, 'crypto unavailable', crypto );
                    }
                }

                // Use Math.random.
                if (!CRYPTO) {

                    for ( ; i < k; ) {
                        v = random53bitInt();
                        if ( v < 9e15 ) c[i++] = v % 1e14;
                    }
                }

                k = c[--i];
                dp %= LOG_BASE;

                // Convert trailing digits to zeros according to dp.
                if ( k && dp ) {
                    v = POWS_TEN[LOG_BASE - dp];
                    c[i] = mathfloor( k / v ) * v;
                }

                // Remove trailing elements which are zero.
                for ( ; c[i] === 0; c.pop(), i-- );

                // Zero?
                if ( i < 0 ) {
                    c = [ e = 0 ];
                } else {

                    // Remove leading elements which are zero and adjust exponent accordingly.
                    for ( e = -1 ; c[0] === 0; c.shift(), e -= LOG_BASE);

                    // Count the digits of the first element of c to determine leading zeros, and...
                    for ( i = 1, v = c[0]; v >= 10; v /= 10, i++);

                    // adjust the exponent accordingly.
                    if ( i < LOG_BASE ) e -= LOG_BASE - i;
                }

                rand.e = e;
                rand.c = c;
                return rand;
            };
        })();


        // PRIVATE FUNCTIONS


        // Convert a numeric string of baseIn to a numeric string of baseOut.
        function convertBase( str, baseOut, baseIn, sign ) {
            var d, e, k, r, x, xc, y,
                i = str.indexOf( '.' ),
                dp = DECIMAL_PLACES,
                rm = ROUNDING_MODE;

            if ( baseIn < 37 ) str = str.toLowerCase();

            // Non-integer.
            if ( i >= 0 ) {
                k = POW_PRECISION;

                // Unlimited precision.
                POW_PRECISION = 0;
                str = str.replace( '.', '' );
                y = new BigNumber(baseIn);
                x = y.pow( str.length - i );
                POW_PRECISION = k;

                // Convert str as if an integer, then restore the fraction part by dividing the
                // result by its base raised to a power.
                y.c = toBaseOut( toFixedPoint( coeffToString( x.c ), x.e ), 10, baseOut );
                y.e = y.c.length;
            }

            // Convert the number as integer.
            xc = toBaseOut( str, baseIn, baseOut );
            e = k = xc.length;

            // Remove trailing zeros.
            for ( ; xc[--k] == 0; xc.pop() );
            if ( !xc[0] ) return '0';

            if ( i < 0 ) {
                --e;
            } else {
                x.c = xc;
                x.e = e;

                // sign is needed for correct rounding.
                x.s = sign;
                x = div( x, y, dp, rm, baseOut );
                xc = x.c;
                r = x.r;
                e = x.e;
            }

            d = e + dp + 1;

            // The rounding digit, i.e. the digit to the right of the digit that may be rounded up.
            i = xc[d];
            k = baseOut / 2;
            r = r || d < 0 || xc[d + 1] != null;

            r = rm < 4 ? ( i != null || r ) && ( rm == 0 || rm == ( x.s < 0 ? 3 : 2 ) )
                       : i > k || i == k &&( rm == 4 || r || rm == 6 && xc[d - 1] & 1 ||
                         rm == ( x.s < 0 ? 8 : 7 ) );

            if ( d < 1 || !xc[0] ) {

                // 1^-dp or 0.
                str = r ? toFixedPoint( '1', -dp ) : '0';
            } else {
                xc.length = d;

                if (r) {

                    // Rounding up may mean the previous digit has to be rounded up and so on.
                    for ( --baseOut; ++xc[--d] > baseOut; ) {
                        xc[d] = 0;

                        if ( !d ) {
                            ++e;
                            xc.unshift(1);
                        }
                    }
                }

                // Determine trailing zeros.
                for ( k = xc.length; !xc[--k]; );

                // E.g. [4, 11, 15] becomes 4bf.
                for ( i = 0, str = ''; i <= k; str += ALPHABET.charAt( xc[i++] ) );
                str = toFixedPoint( str, e );
            }

            // The caller will add the sign.
            return str;
        }


        // Perform division in the specified base. Called by div and convertBase.
        div = (function () {

            // Assume non-zero x and k.
            function multiply( x, k, base ) {
                var m, temp, xlo, xhi,
                    carry = 0,
                    i = x.length,
                    klo = k % SQRT_BASE,
                    khi = k / SQRT_BASE | 0;

                for ( x = x.slice(); i--; ) {
                    xlo = x[i] % SQRT_BASE;
                    xhi = x[i] / SQRT_BASE | 0;
                    m = khi * xlo + xhi * klo;
                    temp = klo * xlo + ( ( m % SQRT_BASE ) * SQRT_BASE ) + carry;
                    carry = ( temp / base | 0 ) + ( m / SQRT_BASE | 0 ) + khi * xhi;
                    x[i] = temp % base;
                }

                if (carry) x.unshift(carry);

                return x;
            }

            function compare( a, b, aL, bL ) {
                var i, cmp;

                if ( aL != bL ) {
                    cmp = aL > bL ? 1 : -1;
                } else {

                    for ( i = cmp = 0; i < aL; i++ ) {

                        if ( a[i] != b[i] ) {
                            cmp = a[i] > b[i] ? 1 : -1;
                            break;
                        }
                    }
                }
                return cmp;
            }

            function subtract( a, b, aL, base ) {
                var i = 0;

                // Subtract b from a.
                for ( ; aL--; ) {
                    a[aL] -= i;
                    i = a[aL] < b[aL] ? 1 : 0;
                    a[aL] = i * base + a[aL] - b[aL];
                }

                // Remove leading zeros.
                for ( ; !a[0] && a.length > 1; a.shift() );
            }

            // x: dividend, y: divisor.
            return function ( x, y, dp, rm, base ) {
                var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0,
                    yL, yz,
                    s = x.s == y.s ? 1 : -1,
                    xc = x.c,
                    yc = y.c;

                // Either NaN, Infinity or 0?
                if ( !xc || !xc[0] || !yc || !yc[0] ) {

                    return new BigNumber(

                      // Return NaN if either NaN, or both Infinity or 0.
                      !x.s || !y.s || ( xc ? yc && xc[0] == yc[0] : !yc ) ? NaN :

                        // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                        xc && xc[0] == 0 || !yc ? s * 0 : s / 0
                    );
                }

                q = new BigNumber(s);
                qc = q.c = [];
                e = x.e - y.e;
                s = dp + e + 1;

                if ( !base ) {
                    base = BASE;
                    e = bitFloor( x.e / LOG_BASE ) - bitFloor( y.e / LOG_BASE );
                    s = s / LOG_BASE | 0;
                }

                // Result exponent may be one less then the current value of e.
                // The coefficients of the BigNumbers from convertBase may have trailing zeros.
                for ( i = 0; yc[i] == ( xc[i] || 0 ); i++ );
                if ( yc[i] > ( xc[i] || 0 ) ) e--;

                if ( s < 0 ) {
                    qc.push(1);
                    more = true;
                } else {
                    xL = xc.length;
                    yL = yc.length;
                    i = 0;
                    s += 2;

                    // Normalise xc and yc so highest order digit of yc is >= base / 2.

                    n = mathfloor( base / ( yc[0] + 1 ) );

                    // Not necessary, but to handle odd bases where yc[0] == ( base / 2 ) - 1.
                    // if ( n > 1 || n++ == 1 && yc[0] < base / 2 ) {
                    if ( n > 1 ) {
                        yc = multiply( yc, n, base );
                        xc = multiply( xc, n, base );
                        yL = yc.length;
                        xL = xc.length;
                    }

                    xi = yL;
                    rem = xc.slice( 0, yL );
                    remL = rem.length;

                    // Add zeros to make remainder as long as divisor.
                    for ( ; remL < yL; rem[remL++] = 0 );
                    yz = yc.slice();
                    yz.unshift(0);
                    yc0 = yc[0];
                    if ( yc[1] >= base / 2 ) yc0++;
                    // Not necessary, but to prevent trial digit n > base, when using base 3.
                    // else if ( base == 3 && yc0 == 1 ) yc0 = 1 + 1e-15;

                    do {
                        n = 0;

                        // Compare divisor and remainder.
                        cmp = compare( yc, rem, yL, remL );

                        // If divisor < remainder.
                        if ( cmp < 0 ) {

                            // Calculate trial digit, n.

                            rem0 = rem[0];
                            if ( yL != remL ) rem0 = rem0 * base + ( rem[1] || 0 );

                            // n is how many times the divisor goes into the current remainder.
                            n = mathfloor( rem0 / yc0 );

                            //  Algorithm:
                            //  1. product = divisor * trial digit (n)
                            //  2. if product > remainder: product -= divisor, n--
                            //  3. remainder -= product
                            //  4. if product was < remainder at 2:
                            //    5. compare new remainder and divisor
                            //    6. If remainder > divisor: remainder -= divisor, n++

                            if ( n > 1 ) {

                                // n may be > base only when base is 3.
                                if (n >= base) n = base - 1;

                                // product = divisor * trial digit.
                                prod = multiply( yc, n, base );
                                prodL = prod.length;
                                remL = rem.length;

                                // Compare product and remainder.
                                // If product > remainder.
                                // Trial digit n too high.
                                // n is 1 too high about 5% of the time, and is not known to have
                                // ever been more than 1 too high.
                                while ( compare( prod, rem, prodL, remL ) == 1 ) {
                                    n--;

                                    // Subtract divisor from product.
                                    subtract( prod, yL < prodL ? yz : yc, prodL, base );
                                    prodL = prod.length;
                                    cmp = 1;
                                }
                            } else {

                                // n is 0 or 1, cmp is -1.
                                // If n is 0, there is no need to compare yc and rem again below,
                                // so change cmp to 1 to avoid it.
                                // If n is 1, leave cmp as -1, so yc and rem are compared again.
                                if ( n == 0 ) {

                                    // divisor < remainder, so n must be at least 1.
                                    cmp = n = 1;
                                }

                                // product = divisor
                                prod = yc.slice();
                                prodL = prod.length;
                            }

                            if ( prodL < remL ) prod.unshift(0);

                            // Subtract product from remainder.
                            subtract( rem, prod, remL, base );
                            remL = rem.length;

                             // If product was < remainder.
                            if ( cmp == -1 ) {

                                // Compare divisor and new remainder.
                                // If divisor < new remainder, subtract divisor from remainder.
                                // Trial digit n too low.
                                // n is 1 too low about 5% of the time, and very rarely 2 too low.
                                while ( compare( yc, rem, yL, remL ) < 1 ) {
                                    n++;

                                    // Subtract divisor from remainder.
                                    subtract( rem, yL < remL ? yz : yc, remL, base );
                                    remL = rem.length;
                                }
                            }
                        } else if ( cmp === 0 ) {
                            n++;
                            rem = [0];
                        } // else cmp === 1 and n will be 0

                        // Add the next digit, n, to the result array.
                        qc[i++] = n;

                        // Update the remainder.
                        if ( rem[0] ) {
                            rem[remL++] = xc[xi] || 0;
                        } else {
                            rem = [ xc[xi] ];
                            remL = 1;
                        }
                    } while ( ( xi++ < xL || rem[0] != null ) && s-- );

                    more = rem[0] != null;

                    // Leading zero?
                    if ( !qc[0] ) qc.shift();
                }

                if ( base == BASE ) {

                    // To calculate q.e, first get the number of digits of qc[0].
                    for ( i = 1, s = qc[0]; s >= 10; s /= 10, i++ );
                    round( q, dp + ( q.e = i + e * LOG_BASE - 1 ) + 1, rm, more );

                // Caller is convertBase.
                } else {
                    q.e = e;
                    q.r = +more;
                }

                return q;
            };
        })();


        /*
         * Return a string representing the value of BigNumber n in fixed-point or exponential
         * notation rounded to the specified decimal places or significant digits.
         *
         * n is a BigNumber.
         * i is the index of the last digit required (i.e. the digit that may be rounded up).
         * rm is the rounding mode.
         * caller is caller id: toExponential 19, toFixed 20, toFormat 21, toPrecision 24.
         */
        function format( n, i, rm, caller ) {
            var c0, e, ne, len, str;

            rm = rm != null && isValidInt( rm, 0, 8, caller, roundingMode )
              ? rm | 0 : ROUNDING_MODE;

            if ( !n.c ) return n.toString();
            c0 = n.c[0];
            ne = n.e;

            if ( i == null ) {
                str = coeffToString( n.c );
                str = caller == 19 || caller == 24 && ne <= TO_EXP_NEG
                  ? toExponential( str, ne )
                  : toFixedPoint( str, ne );
            } else {
                n = round( new BigNumber(n), i, rm );

                // n.e may have changed if the value was rounded up.
                e = n.e;

                str = coeffToString( n.c );
                len = str.length;

                // toPrecision returns exponential notation if the number of significant digits
                // specified is less than the number of digits necessary to represent the integer
                // part of the value in fixed-point notation.

                // Exponential notation.
                if ( caller == 19 || caller == 24 && ( i <= e || e <= TO_EXP_NEG ) ) {

                    // Append zeros?
                    for ( ; len < i; str += '0', len++ );
                    str = toExponential( str, e );

                // Fixed-point notation.
                } else {
                    i -= ne;
                    str = toFixedPoint( str, e );

                    // Append zeros?
                    if ( e + 1 > len ) {
                        if ( --i > 0 ) for ( str += '.'; i--; str += '0' );
                    } else {
                        i += e - len;
                        if ( i > 0 ) {
                            if ( e + 1 == len ) str += '.';
                            for ( ; i--; str += '0' );
                        }
                    }
                }
            }

            return n.s < 0 && c0 ? '-' + str : str;
        }


        // Handle BigNumber.max and BigNumber.min.
        function maxOrMin( args, method ) {
            var m, n,
                i = 0;

            if ( isArray( args[0] ) ) args = args[0];
            m = new BigNumber( args[0] );

            for ( ; ++i < args.length; ) {
                n = new BigNumber( args[i] );

                // If any number is NaN, return NaN.
                if ( !n.s ) {
                    m = n;
                    break;
                } else if ( method.call( m, n ) ) {
                    m = n;
                }
            }

            return m;
        }


        /*
         * Return true if n is an integer in range, otherwise throw.
         * Use for argument validation when ERRORS is true.
         */
        function intValidatorWithErrors( n, min, max, caller, name ) {
            if ( n < min || n > max || n != truncate(n) ) {
                raise( caller, ( name || 'decimal places' ) +
                  ( n < min || n > max ? ' out of range' : ' not an integer' ), n );
            }

            return true;
        }


        /*
         * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
         * Called by minus, plus and times.
         */
        function normalise( n, c, e ) {
            var i = 1,
                j = c.length;

             // Remove trailing zeros.
            for ( ; !c[--j]; c.pop() );

            // Calculate the base 10 exponent. First get the number of digits of c[0].
            for ( j = c[0]; j >= 10; j /= 10, i++ );

            // Overflow?
            if ( ( e = i + e * LOG_BASE - 1 ) > MAX_EXP ) {

                // Infinity.
                n.c = n.e = null;

            // Underflow?
            } else if ( e < MIN_EXP ) {

                // Zero.
                n.c = [ n.e = 0 ];
            } else {
                n.e = e;
                n.c = c;
            }

            return n;
        }


        // Handle values that fail the validity test in BigNumber.
        parseNumeric = (function () {
            var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                dotAfter = /^([^.]+)\.$/,
                dotBefore = /^\.([^.]+)$/,
                isInfinityOrNaN = /^-?(Infinity|NaN)$/,
                whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;

            return function ( x, str, num, b ) {
                var base,
                    s = num ? str : str.replace( whitespaceOrPlus, '' );

                // No exception on ±Infinity or NaN.
                if ( isInfinityOrNaN.test(s) ) {
                    x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
                } else {
                    if ( !num ) {

                        // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
                        s = s.replace( basePrefix, function ( m, p1, p2 ) {
                            base = ( p2 = p2.toLowerCase() ) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
                            return !b || b == base ? p1 : m;
                        });

                        if (b) {
                            base = b;

                            // E.g. '1.' to '1', '.1' to '0.1'
                            s = s.replace( dotAfter, '$1' ).replace( dotBefore, '0.$1' );
                        }

                        if ( str != s ) return new BigNumber( s, base );
                    }

                    // 'new BigNumber() not a number: {n}'
                    // 'new BigNumber() not a base {b} number: {n}'
                    if (ERRORS) raise( id, 'not a' + ( b ? ' base ' + b : '' ) + ' number', str );
                    x.s = null;
                }

                x.c = x.e = null;
                id = 0;
            }
        })();


        // Throw a BigNumber Error.
        function raise( caller, msg, val ) {
            var error = new Error( [
                'new BigNumber',     // 0
                'cmp',               // 1
                'config',            // 2
                'div',               // 3
                'divToInt',          // 4
                'eq',                // 5
                'gt',                // 6
                'gte',               // 7
                'lt',                // 8
                'lte',               // 9
                'minus',             // 10
                'mod',               // 11
                'plus',              // 12
                'precision',         // 13
                'random',            // 14
                'round',             // 15
                'shift',             // 16
                'times',             // 17
                'toDigits',          // 18
                'toExponential',     // 19
                'toFixed',           // 20
                'toFormat',          // 21
                'toFraction',        // 22
                'pow',               // 23
                'toPrecision',       // 24
                'toString',          // 25
                'BigNumber'          // 26
            ][caller] + '() ' + msg + ': ' + val );

            error.name = 'BigNumber Error';
            id = 0;
            throw error;
        }


        /*
         * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
         * If r is truthy, it is known that there are more digits after the rounding digit.
         */
        function round( x, sd, rm, r ) {
            var d, i, j, k, n, ni, rd,
                xc = x.c,
                pows10 = POWS_TEN;

            // if x is not Infinity or NaN...
            if (xc) {

                // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
                // n is a base 1e14 number, the value of the element of array x.c containing rd.
                // ni is the index of n within x.c.
                // d is the number of digits of n.
                // i is the index of rd within n including leading zeros.
                // j is the actual index of rd within n (if < 0, rd is a leading zero).
                out: {

                    // Get the number of digits of the first element of xc.
                    for ( d = 1, k = xc[0]; k >= 10; k /= 10, d++ );
                    i = sd - d;

                    // If the rounding digit is in the first element of xc...
                    if ( i < 0 ) {
                        i += LOG_BASE;
                        j = sd;
                        n = xc[ ni = 0 ];

                        // Get the rounding digit at index j of n.
                        rd = n / pows10[ d - j - 1 ] % 10 | 0;
                    } else {
                        ni = mathceil( ( i + 1 ) / LOG_BASE );

                        if ( ni >= xc.length ) {

                            if (r) {

                                // Needed by sqrt.
                                for ( ; xc.length <= ni; xc.push(0) );
                                n = rd = 0;
                                d = 1;
                                i %= LOG_BASE;
                                j = i - LOG_BASE + 1;
                            } else {
                                break out;
                            }
                        } else {
                            n = k = xc[ni];

                            // Get the number of digits of n.
                            for ( d = 1; k >= 10; k /= 10, d++ );

                            // Get the index of rd within n.
                            i %= LOG_BASE;

                            // Get the index of rd within n, adjusted for leading zeros.
                            // The number of leading zeros of n is given by LOG_BASE - d.
                            j = i - LOG_BASE + d;

                            // Get the rounding digit at index j of n.
                            rd = j < 0 ? 0 : n / pows10[ d - j - 1 ] % 10 | 0;
                        }
                    }

                    r = r || sd < 0 ||

                    // Are there any non-zero digits after the rounding digit?
                    // The expression  n % pows10[ d - j - 1 ]  returns all digits of n to the right
                    // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
                      xc[ni + 1] != null || ( j < 0 ? n : n % pows10[ d - j - 1 ] );

                    r = rm < 4
                      ? ( rd || r ) && ( rm == 0 || rm == ( x.s < 0 ? 3 : 2 ) )
                      : rd > 5 || rd == 5 && ( rm == 4 || r || rm == 6 &&

                        // Check whether the digit to the left of the rounding digit is odd.
                        ( ( i > 0 ? j > 0 ? n / pows10[ d - j ] : 0 : xc[ni - 1] ) % 10 ) & 1 ||
                          rm == ( x.s < 0 ? 8 : 7 ) );

                    if ( sd < 1 || !xc[0] ) {
                        xc.length = 0;

                        if (r) {

                            // Convert sd to decimal places.
                            sd -= x.e + 1;

                            // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                            xc[0] = pows10[ ( LOG_BASE - sd % LOG_BASE ) % LOG_BASE ];
                            x.e = -sd || 0;
                        } else {

                            // Zero.
                            xc[0] = x.e = 0;
                        }

                        return x;
                    }

                    // Remove excess digits.
                    if ( i == 0 ) {
                        xc.length = ni;
                        k = 1;
                        ni--;
                    } else {
                        xc.length = ni + 1;
                        k = pows10[ LOG_BASE - i ];

                        // E.g. 56700 becomes 56000 if 7 is the rounding digit.
                        // j > 0 means i > number of leading zeros of n.
                        xc[ni] = j > 0 ? mathfloor( n / pows10[ d - j ] % pows10[j] ) * k : 0;
                    }

                    // Round up?
                    if (r) {

                        for ( ; ; ) {

                            // If the digit to be rounded up is in the first element of xc...
                            if ( ni == 0 ) {

                                // i will be the length of xc[0] before k is added.
                                for ( i = 1, j = xc[0]; j >= 10; j /= 10, i++ );
                                j = xc[0] += k;
                                for ( k = 1; j >= 10; j /= 10, k++ );

                                // if i != k the length has increased.
                                if ( i != k ) {
                                    x.e++;
                                    if ( xc[0] == BASE ) xc[0] = 1;
                                }

                                break;
                            } else {
                                xc[ni] += k;
                                if ( xc[ni] != BASE ) break;
                                xc[ni--] = 0;
                                k = 1;
                            }
                        }
                    }

                    // Remove trailing zeros.
                    for ( i = xc.length; xc[--i] === 0; xc.pop() );
                }

                // Overflow? Infinity.
                if ( x.e > MAX_EXP ) {
                    x.c = x.e = null;

                // Underflow? Zero.
                } else if ( x.e < MIN_EXP ) {
                    x.c = [ x.e = 0 ];
                }
            }

            return x;
        }


        // PROTOTYPE/INSTANCE METHODS


        /*
         * Return a new BigNumber whose value is the absolute value of this BigNumber.
         */
        P.absoluteValue = P.abs = function () {
            var x = new BigNumber(this);
            if ( x.s < 0 ) x.s = 1;
            return x;
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a whole
         * number in the direction of Infinity.
         */
        P.ceil = function () {
            return round( new BigNumber(this), this.e + 1, 2 );
        };


        /*
         * Return
         * 1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
         * -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
         * 0 if they have the same value,
         * or null if the value of either is NaN.
         */
        P.comparedTo = P.cmp = function ( y, b ) {
            id = 1;
            return compare( this, new BigNumber( y, b ) );
        };


        /*
         * Return the number of decimal places of the value of this BigNumber, or null if the value
         * of this BigNumber is ±Infinity or NaN.
         */
        P.decimalPlaces = P.dp = function () {
            var n, v,
                c = this.c;

            if ( !c ) return null;
            n = ( ( v = c.length - 1 ) - bitFloor( this.e / LOG_BASE ) ) * LOG_BASE;

            // Subtract the number of trailing zeros of the last number.
            if ( v = c[v] ) for ( ; v % 10 == 0; v /= 10, n-- );
            if ( n < 0 ) n = 0;

            return n;
        };


        /*
         *  n / 0 = I
         *  n / N = N
         *  n / I = 0
         *  0 / n = 0
         *  0 / 0 = N
         *  0 / N = N
         *  0 / I = 0
         *  N / n = N
         *  N / 0 = N
         *  N / N = N
         *  N / I = N
         *  I / n = I
         *  I / 0 = I
         *  I / N = N
         *  I / I = N
         *
         * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
         * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
         */
        P.dividedBy = P.div = function ( y, b ) {
            id = 3;
            return div( this, new BigNumber( y, b ), DECIMAL_PLACES, ROUNDING_MODE );
        };


        /*
         * Return a new BigNumber whose value is the integer part of dividing the value of this
         * BigNumber by the value of BigNumber(y, b).
         */
        P.dividedToIntegerBy = P.divToInt = function ( y, b ) {
            id = 4;
            return div( this, new BigNumber( y, b ), 0, 1 );
        };


        /*
         * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
         * otherwise returns false.
         */
        P.equals = P.eq = function ( y, b ) {
            id = 5;
            return compare( this, new BigNumber( y, b ) ) === 0;
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a whole
         * number in the direction of -Infinity.
         */
        P.floor = function () {
            return round( new BigNumber(this), this.e + 1, 3 );
        };


        /*
         * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
         * otherwise returns false.
         */
        P.greaterThan = P.gt = function ( y, b ) {
            id = 6;
            return compare( this, new BigNumber( y, b ) ) > 0;
        };


        /*
         * Return true if the value of this BigNumber is greater than or equal to the value of
         * BigNumber(y, b), otherwise returns false.
         */
        P.greaterThanOrEqualTo = P.gte = function ( y, b ) {
            id = 7;
            return ( b = compare( this, new BigNumber( y, b ) ) ) === 1 || b === 0;

        };


        /*
         * Return true if the value of this BigNumber is a finite number, otherwise returns false.
         */
        P.isFinite = function () {
            return !!this.c;
        };


        /*
         * Return true if the value of this BigNumber is an integer, otherwise return false.
         */
        P.isInteger = P.isInt = function () {
            return !!this.c && bitFloor( this.e / LOG_BASE ) > this.c.length - 2;
        };


        /*
         * Return true if the value of this BigNumber is NaN, otherwise returns false.
         */
        P.isNaN = function () {
            return !this.s;
        };


        /*
         * Return true if the value of this BigNumber is negative, otherwise returns false.
         */
        P.isNegative = P.isNeg = function () {
            return this.s < 0;
        };


        /*
         * Return true if the value of this BigNumber is 0 or -0, otherwise returns false.
         */
        P.isZero = function () {
            return !!this.c && this.c[0] == 0;
        };


        /*
         * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
         * otherwise returns false.
         */
        P.lessThan = P.lt = function ( y, b ) {
            id = 8;
            return compare( this, new BigNumber( y, b ) ) < 0;
        };


        /*
         * Return true if the value of this BigNumber is less than or equal to the value of
         * BigNumber(y, b), otherwise returns false.
         */
        P.lessThanOrEqualTo = P.lte = function ( y, b ) {
            id = 9;
            return ( b = compare( this, new BigNumber( y, b ) ) ) === -1 || b === 0;
        };


        /*
         *  n - 0 = n
         *  n - N = N
         *  n - I = -I
         *  0 - n = -n
         *  0 - 0 = 0
         *  0 - N = N
         *  0 - I = -I
         *  N - n = N
         *  N - 0 = N
         *  N - N = N
         *  N - I = N
         *  I - n = I
         *  I - 0 = I
         *  I - N = N
         *  I - I = N
         *
         * Return a new BigNumber whose value is the value of this BigNumber minus the value of
         * BigNumber(y, b).
         */
        P.minus = P.sub = function ( y, b ) {
            var i, j, t, xLTy,
                x = this,
                a = x.s;

            id = 10;
            y = new BigNumber( y, b );
            b = y.s;

            // Either NaN?
            if ( !a || !b ) return new BigNumber(NaN);

            // Signs differ?
            if ( a != b ) {
                y.s = -b;
                return x.plus(y);
            }

            var xe = x.e / LOG_BASE,
                ye = y.e / LOG_BASE,
                xc = x.c,
                yc = y.c;

            if ( !xe || !ye ) {

                // Either Infinity?
                if ( !xc || !yc ) return xc ? ( y.s = -b, y ) : new BigNumber( yc ? x : NaN );

                // Either zero?
                if ( !xc[0] || !yc[0] ) {

                    // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
                    return yc[0] ? ( y.s = -b, y ) : new BigNumber( xc[0] ? x :

                      // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
                      ROUNDING_MODE == 3 ? -0 : 0 );
                }
            }

            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice();

            // Determine which is the bigger number.
            if ( a = xe - ye ) {

                if ( xLTy = a < 0 ) {
                    a = -a;
                    t = xc;
                } else {
                    ye = xe;
                    t = yc;
                }

                t.reverse();

                // Prepend zeros to equalise exponents.
                for ( b = a; b--; t.push(0) );
                t.reverse();
            } else {

                // Exponents equal. Check digit by digit.
                j = ( xLTy = ( a = xc.length ) < ( b = yc.length ) ) ? a : b;

                for ( a = b = 0; b < j; b++ ) {

                    if ( xc[b] != yc[b] ) {
                        xLTy = xc[b] < yc[b];
                        break;
                    }
                }
            }

            // x < y? Point xc to the array of the bigger number.
            if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;

            b = ( j = yc.length ) - ( i = xc.length );

            // Append zeros to xc if shorter.
            // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
            if ( b > 0 ) for ( ; b--; xc[i++] = 0 );
            b = BASE - 1;

            // Subtract yc from xc.
            for ( ; j > a; ) {

                if ( xc[--j] < yc[j] ) {
                    for ( i = j; i && !xc[--i]; xc[i] = b );
                    --xc[i];
                    xc[j] += BASE;
                }

                xc[j] -= yc[j];
            }

            // Remove leading zeros and adjust exponent accordingly.
            for ( ; xc[0] == 0; xc.shift(), --ye );

            // Zero?
            if ( !xc[0] ) {

                // Following IEEE 754 (2008) 6.3,
                // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
                y.s = ROUNDING_MODE == 3 ? -1 : 1;
                y.c = [ y.e = 0 ];
                return y;
            }

            // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
            // for finite x and y.
            return normalise( y, xc, ye );
        };


        /*
         *   n % 0 =  N
         *   n % N =  N
         *   n % I =  n
         *   0 % n =  0
         *  -0 % n = -0
         *   0 % 0 =  N
         *   0 % N =  N
         *   0 % I =  0
         *   N % n =  N
         *   N % 0 =  N
         *   N % N =  N
         *   N % I =  N
         *   I % n =  N
         *   I % 0 =  N
         *   I % N =  N
         *   I % I =  N
         *
         * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
         * BigNumber(y, b). The result depends on the value of MODULO_MODE.
         */
        P.modulo = P.mod = function ( y, b ) {
            var q, s,
                x = this;

            id = 11;
            y = new BigNumber( y, b );

            // Return NaN if x is Infinity or NaN, or y is NaN or zero.
            if ( !x.c || !y.s || y.c && !y.c[0] ) {
                return new BigNumber(NaN);

            // Return x if y is Infinity or x is zero.
            } else if ( !y.c || x.c && !x.c[0] ) {
                return new BigNumber(x);
            }

            if ( MODULO_MODE == 9 ) {

                // Euclidian division: q = sign(y) * floor(x / abs(y))
                // r = x - qy    where  0 <= r < abs(y)
                s = y.s;
                y.s = 1;
                q = div( x, y, 0, 3 );
                y.s = s;
                q.s *= s;
            } else {
                q = div( x, y, 0, MODULO_MODE );
            }

            return x.minus( q.times(y) );
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber negated,
         * i.e. multiplied by -1.
         */
        P.negated = P.neg = function () {
            var x = new BigNumber(this);
            x.s = -x.s || null;
            return x;
        };


        /*
         *  n + 0 = n
         *  n + N = N
         *  n + I = I
         *  0 + n = n
         *  0 + 0 = 0
         *  0 + N = N
         *  0 + I = I
         *  N + n = N
         *  N + 0 = N
         *  N + N = N
         *  N + I = N
         *  I + n = I
         *  I + 0 = I
         *  I + N = N
         *  I + I = I
         *
         * Return a new BigNumber whose value is the value of this BigNumber plus the value of
         * BigNumber(y, b).
         */
        P.plus = P.add = function ( y, b ) {
            var t,
                x = this,
                a = x.s;

            id = 12;
            y = new BigNumber( y, b );
            b = y.s;

            // Either NaN?
            if ( !a || !b ) return new BigNumber(NaN);

            // Signs differ?
             if ( a != b ) {
                y.s = -b;
                return x.minus(y);
            }

            var xe = x.e / LOG_BASE,
                ye = y.e / LOG_BASE,
                xc = x.c,
                yc = y.c;

            if ( !xe || !ye ) {

                // Return ±Infinity if either ±Infinity.
                if ( !xc || !yc ) return new BigNumber( a / 0 );

                // Either zero?
                // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
                if ( !xc[0] || !yc[0] ) return yc[0] ? y : new BigNumber( xc[0] ? x : a * 0 );
            }

            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice();

            // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
            if ( a = xe - ye ) {
                if ( a > 0 ) {
                    ye = xe;
                    t = yc;
                } else {
                    a = -a;
                    t = xc;
                }

                t.reverse();
                for ( ; a--; t.push(0) );
                t.reverse();
            }

            a = xc.length;
            b = yc.length;

            // Point xc to the longer array, and b to the shorter length.
            if ( a - b < 0 ) t = yc, yc = xc, xc = t, b = a;

            // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
            for ( a = 0; b; ) {
                a = ( xc[--b] = xc[b] + yc[b] + a ) / BASE | 0;
                xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
            }

            if (a) {
                xc.unshift(a);
                ++ye;
            }

            // No need to check for zero, as +x + +y != 0 && -x + -y != 0
            // ye = MAX_EXP + 1 possible
            return normalise( y, xc, ye );
        };


        /*
         * Return the number of significant digits of the value of this BigNumber.
         *
         * [z] {boolean|number} Whether to count integer-part trailing zeros: true, false, 1 or 0.
         */
        P.precision = P.sd = function (z) {
            var n, v,
                x = this,
                c = x.c;

            // 'precision() argument not a boolean or binary digit: {z}'
            if ( z != null && z !== !!z && z !== 1 && z !== 0 ) {
                if (ERRORS) raise( 13, 'argument' + notBool, z );
                if ( z != !!z ) z = null;
            }

            if ( !c ) return null;
            v = c.length - 1;
            n = v * LOG_BASE + 1;

            if ( v = c[v] ) {

                // Subtract the number of trailing zeros of the last element.
                for ( ; v % 10 == 0; v /= 10, n-- );

                // Add the number of digits of the first element.
                for ( v = c[0]; v >= 10; v /= 10, n++ );
            }

            if ( z && x.e + 1 > n ) n = x.e + 1;

            return n;
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a maximum of
         * dp decimal places using rounding mode rm, or to 0 and ROUNDING_MODE respectively if
         * omitted.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'round() decimal places out of range: {dp}'
         * 'round() decimal places not an integer: {dp}'
         * 'round() rounding mode not an integer: {rm}'
         * 'round() rounding mode out of range: {rm}'
         */
        P.round = function ( dp, rm ) {
            var n = new BigNumber(this);

            if ( dp == null || isValidInt( dp, 0, MAX, 15 ) ) {
                round( n, ~~dp + this.e + 1, rm == null ||
                  !isValidInt( rm, 0, 8, 15, roundingMode ) ? ROUNDING_MODE : rm | 0 );
            }

            return n;
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
         * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
         *
         * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
         *
         * If k is out of range and ERRORS is false, the result will be ±0 if k < 0, or ±Infinity
         * otherwise.
         *
         * 'shift() argument not an integer: {k}'
         * 'shift() argument out of range: {k}'
         */
        P.shift = function (k) {
            var n = this;
            return isValidInt( k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER, 16, 'argument' )

              // k < 1e+21, or truncate(k) will produce exponential notation.
              ? n.times( '1e' + truncate(k) )
              : new BigNumber( n.c && n.c[0] && ( k < -MAX_SAFE_INTEGER || k > MAX_SAFE_INTEGER )
                ? n.s * ( k < 0 ? 0 : 1 / 0 )
                : n );
        };


        /*
         *  sqrt(-n) =  N
         *  sqrt( N) =  N
         *  sqrt(-I) =  N
         *  sqrt( I) =  I
         *  sqrt( 0) =  0
         *  sqrt(-0) = -0
         *
         * Return a new BigNumber whose value is the square root of the value of this BigNumber,
         * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
         */
        P.squareRoot = P.sqrt = function () {
            var m, n, r, rep, t,
                x = this,
                c = x.c,
                s = x.s,
                e = x.e,
                dp = DECIMAL_PLACES + 4,
                half = new BigNumber('0.5');

            // Negative/NaN/Infinity/zero?
            if ( s !== 1 || !c || !c[0] ) {
                return new BigNumber( !s || s < 0 && ( !c || c[0] ) ? NaN : c ? x : 1 / 0 );
            }

            // Initial estimate.
            s = Math.sqrt( +x );

            // Math.sqrt underflow/overflow?
            // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
            if ( s == 0 || s == 1 / 0 ) {
                n = coeffToString(c);
                if ( ( n.length + e ) % 2 == 0 ) n += '0';
                s = Math.sqrt(n);
                e = bitFloor( ( e + 1 ) / 2 ) - ( e < 0 || e % 2 );

                if ( s == 1 / 0 ) {
                    n = '1e' + e;
                } else {
                    n = s.toExponential();
                    n = n.slice( 0, n.indexOf('e') + 1 ) + e;
                }

                r = new BigNumber(n);
            } else {
                r = new BigNumber( s + '' );
            }

            // Check for zero.
            // r could be zero if MIN_EXP is changed after the this value was created.
            // This would cause a division by zero (x/t) and hence Infinity below, which would cause
            // coeffToString to throw.
            if ( r.c[0] ) {
                e = r.e;
                s = e + dp;
                if ( s < 3 ) s = 0;

                // Newton-Raphson iteration.
                for ( ; ; ) {
                    t = r;
                    r = half.times( t.plus( div( x, t, dp, 1 ) ) );

                    if ( coeffToString( t.c   ).slice( 0, s ) === ( n =
                         coeffToString( r.c ) ).slice( 0, s ) ) {

                        // The exponent of r may here be one less than the final result exponent,
                        // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
                        // are indexed correctly.
                        if ( r.e < e ) --s;
                        n = n.slice( s - 3, s + 1 );

                        // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
                        // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
                        // iteration.
                        if ( n == '9999' || !rep && n == '4999' ) {

                            // On the first iteration only, check to see if rounding up gives the
                            // exact result as the nines may infinitely repeat.
                            if ( !rep ) {
                                round( t, t.e + DECIMAL_PLACES + 2, 0 );

                                if ( t.times(t).eq(x) ) {
                                    r = t;
                                    break;
                                }
                            }

                            dp += 4;
                            s += 4;
                            rep = 1;
                        } else {

                            // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
                            // result. If not, then there are further digits and m will be truthy.
                            if ( !+n || !+n.slice(1) && n.charAt(0) == '5' ) {

                                // Truncate to the first rounding digit.
                                round( r, r.e + DECIMAL_PLACES + 2, 1 );
                                m = !r.times(r).eq(x);
                            }

                            break;
                        }
                    }
                }
            }

            return round( r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m );
        };


        /*
         *  n * 0 = 0
         *  n * N = N
         *  n * I = I
         *  0 * n = 0
         *  0 * 0 = 0
         *  0 * N = N
         *  0 * I = N
         *  N * n = N
         *  N * 0 = N
         *  N * N = N
         *  N * I = N
         *  I * n = I
         *  I * 0 = N
         *  I * N = N
         *  I * I = I
         *
         * Return a new BigNumber whose value is the value of this BigNumber times the value of
         * BigNumber(y, b).
         */
        P.times = P.mul = function ( y, b ) {
            var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc,
                base, sqrtBase,
                x = this,
                xc = x.c,
                yc = ( id = 17, y = new BigNumber( y, b ) ).c;

            // Either NaN, ±Infinity or ±0?
            if ( !xc || !yc || !xc[0] || !yc[0] ) {

                // Return NaN if either is NaN, or one is 0 and the other is Infinity.
                if ( !x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc ) {
                    y.c = y.e = y.s = null;
                } else {
                    y.s *= x.s;

                    // Return ±Infinity if either is ±Infinity.
                    if ( !xc || !yc ) {
                        y.c = y.e = null;

                    // Return ±0 if either is ±0.
                    } else {
                        y.c = [0];
                        y.e = 0;
                    }
                }

                return y;
            }

            e = bitFloor( x.e / LOG_BASE ) + bitFloor( y.e / LOG_BASE );
            y.s *= x.s;
            xcL = xc.length;
            ycL = yc.length;

            // Ensure xc points to longer array and xcL to its length.
            if ( xcL < ycL ) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;

            // Initialise the result array with zeros.
            for ( i = xcL + ycL, zc = []; i--; zc.push(0) );

            base = BASE;
            sqrtBase = SQRT_BASE;

            for ( i = ycL; --i >= 0; ) {
                c = 0;
                ylo = yc[i] % sqrtBase;
                yhi = yc[i] / sqrtBase | 0;

                for ( k = xcL, j = i + k; j > i; ) {
                    xlo = xc[--k] % sqrtBase;
                    xhi = xc[k] / sqrtBase | 0;
                    m = yhi * xlo + xhi * ylo;
                    xlo = ylo * xlo + ( ( m % sqrtBase ) * sqrtBase ) + zc[j] + c;
                    c = ( xlo / base | 0 ) + ( m / sqrtBase | 0 ) + yhi * xhi;
                    zc[j--] = xlo % base;
                }

                zc[j] = c;
            }

            if (c) {
                ++e;
            } else {
                zc.shift();
            }

            return normalise( y, zc, e );
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a maximum of
         * sd significant digits using rounding mode rm, or ROUNDING_MODE if rm is omitted.
         *
         * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toDigits() precision out of range: {sd}'
         * 'toDigits() precision not an integer: {sd}'
         * 'toDigits() rounding mode not an integer: {rm}'
         * 'toDigits() rounding mode out of range: {rm}'
         */
        P.toDigits = function ( sd, rm ) {
            var n = new BigNumber(this);
            sd = sd == null || !isValidInt( sd, 1, MAX, 18, 'precision' ) ? null : sd | 0;
            rm = rm == null || !isValidInt( rm, 0, 8, 18, roundingMode ) ? ROUNDING_MODE : rm | 0;
            return sd ? round( n, sd, rm ) : n;
        };


        /*
         * Return a string representing the value of this BigNumber in exponential notation and
         * rounded using ROUNDING_MODE to dp fixed decimal places.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toExponential() decimal places not an integer: {dp}'
         * 'toExponential() decimal places out of range: {dp}'
         * 'toExponential() rounding mode not an integer: {rm}'
         * 'toExponential() rounding mode out of range: {rm}'
         */
        P.toExponential = function ( dp, rm ) {
            return format( this,
              dp != null && isValidInt( dp, 0, MAX, 19 ) ? ~~dp + 1 : null, rm, 19 );
        };


        /*
         * Return a string representing the value of this BigNumber in fixed-point notation rounding
         * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
         *
         * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
         * but e.g. (-0.00001).toFixed(0) is '-0'.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toFixed() decimal places not an integer: {dp}'
         * 'toFixed() decimal places out of range: {dp}'
         * 'toFixed() rounding mode not an integer: {rm}'
         * 'toFixed() rounding mode out of range: {rm}'
         */
        P.toFixed = function ( dp, rm ) {
            return format( this, dp != null && isValidInt( dp, 0, MAX, 20 )
              ? ~~dp + this.e + 1 : null, rm, 20 );
        };


        /*
         * Return a string representing the value of this BigNumber in fixed-point notation rounded
         * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
         * of the FORMAT object (see BigNumber.config).
         *
         * FORMAT = {
         *      decimalSeparator : '.',
         *      groupSeparator : ',',
         *      groupSize : 3,
         *      secondaryGroupSize : 0,
         *      fractionGroupSeparator : '\xA0',    // non-breaking space
         *      fractionGroupSize : 0
         * };
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toFormat() decimal places not an integer: {dp}'
         * 'toFormat() decimal places out of range: {dp}'
         * 'toFormat() rounding mode not an integer: {rm}'
         * 'toFormat() rounding mode out of range: {rm}'
         */
        P.toFormat = function ( dp, rm ) {
            var str = format( this, dp != null && isValidInt( dp, 0, MAX, 21 )
              ? ~~dp + this.e + 1 : null, rm, 21 );

            if ( this.c ) {
                var i,
                    arr = str.split('.'),
                    g1 = +FORMAT.groupSize,
                    g2 = +FORMAT.secondaryGroupSize,
                    groupSeparator = FORMAT.groupSeparator,
                    intPart = arr[0],
                    fractionPart = arr[1],
                    isNeg = this.s < 0,
                    intDigits = isNeg ? intPart.slice(1) : intPart,
                    len = intDigits.length;

                if (g2) i = g1, g1 = g2, g2 = i, len -= i;

                if ( g1 > 0 && len > 0 ) {
                    i = len % g1 || g1;
                    intPart = intDigits.substr( 0, i );

                    for ( ; i < len; i += g1 ) {
                        intPart += groupSeparator + intDigits.substr( i, g1 );
                    }

                    if ( g2 > 0 ) intPart += groupSeparator + intDigits.slice(i);
                    if (isNeg) intPart = '-' + intPart;
                }

                str = fractionPart
                  ? intPart + FORMAT.decimalSeparator + ( ( g2 = +FORMAT.fractionGroupSize )
                    ? fractionPart.replace( new RegExp( '\\d{' + g2 + '}\\B', 'g' ),
                      '$&' + FORMAT.fractionGroupSeparator )
                    : fractionPart )
                  : intPart;
            }

            return str;
        };


        /*
         * Return a string array representing the value of this BigNumber as a simple fraction with
         * an integer numerator and an integer denominator. The denominator will be a positive
         * non-zero value less than or equal to the specified maximum denominator. If a maximum
         * denominator is not specified, the denominator will be the lowest value necessary to
         * represent the number exactly.
         *
         * [md] {number|string|BigNumber} Integer >= 1 and < Infinity. The maximum denominator.
         *
         * 'toFraction() max denominator not an integer: {md}'
         * 'toFraction() max denominator out of range: {md}'
         */
        P.toFraction = function (md) {
            var arr, d0, d2, e, exp, n, n0, q, s,
                k = ERRORS,
                x = this,
                xc = x.c,
                d = new BigNumber(ONE),
                n1 = d0 = new BigNumber(ONE),
                d1 = n0 = new BigNumber(ONE);

            if ( md != null ) {
                ERRORS = false;
                n = new BigNumber(md);
                ERRORS = k;

                if ( !( k = n.isInt() ) || n.lt(ONE) ) {

                    if (ERRORS) {
                        raise( 22,
                          'max denominator ' + ( k ? 'out of range' : 'not an integer' ), md );
                    }

                    // ERRORS is false:
                    // If md is a finite non-integer >= 1, round it to an integer and use it.
                    md = !k && n.c && round( n, n.e + 1, 1 ).gte(ONE) ? n : null;
                }
            }

            if ( !xc ) return x.toString();
            s = coeffToString(xc);

            // Determine initial denominator.
            // d is a power of 10 and the minimum max denominator that specifies the value exactly.
            e = d.e = s.length - x.e - 1;
            d.c[0] = POWS_TEN[ ( exp = e % LOG_BASE ) < 0 ? LOG_BASE + exp : exp ];
            md = !md || n.cmp(d) > 0 ? ( e > 0 ? d : n1 ) : n;

            exp = MAX_EXP;
            MAX_EXP = 1 / 0;
            n = new BigNumber(s);

            // n0 = d1 = 0
            n0.c[0] = 0;

            for ( ; ; )  {
                q = div( n, d, 0, 1 );
                d2 = d0.plus( q.times(d1) );
                if ( d2.cmp(md) == 1 ) break;
                d0 = d1;
                d1 = d2;
                n1 = n0.plus( q.times( d2 = n1 ) );
                n0 = d2;
                d = n.minus( q.times( d2 = d ) );
                n = d2;
            }

            d2 = div( md.minus(d0), d1, 0, 1 );
            n0 = n0.plus( d2.times(n1) );
            d0 = d0.plus( d2.times(d1) );
            n0.s = n1.s = x.s;
            e *= 2;

            // Determine which fraction is closer to x, n0/d0 or n1/d1
            arr = div( n1, d1, e, ROUNDING_MODE ).minus(x).abs().cmp(
                  div( n0, d0, e, ROUNDING_MODE ).minus(x).abs() ) < 1
                    ? [ n1.toString(), d1.toString() ]
                    : [ n0.toString(), d0.toString() ];

            MAX_EXP = exp;
            return arr;
        };


        /*
         * Return the value of this BigNumber converted to a number primitive.
         */
        P.toNumber = function () {
            return +this;
        };


        /*
         * Return a BigNumber whose value is the value of this BigNumber raised to the power n.
         * If m is present, return the result modulo m.
         * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
         * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using
         * ROUNDING_MODE.
         *
         * The modular power operation works efficiently when x, n, and m are positive integers,
         * otherwise it is equivalent to calculating x.toPower(n).modulo(m) (with POW_PRECISION 0).
         *
         * n {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
         * [m] {number|string|BigNumber} The modulus.
         *
         * 'pow() exponent not an integer: {n}'
         * 'pow() exponent out of range: {n}'
         *
         * Performs 54 loop iterations for n of 9007199254740991.
         */
        P.toPower = P.pow = function ( n, m ) {
            var k, y, z,
                i = mathfloor( n < 0 ? -n : +n ),
                x = this;

            if ( m != null ) {
                id = 23;
                m = new BigNumber(m);
            }

            // Pass ±Infinity to Math.pow if exponent is out of range.
            if ( !isValidInt( n, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER, 23, 'exponent' ) &&
              ( !isFinite(n) || i > MAX_SAFE_INTEGER && ( n /= 0 ) ||
                parseFloat(n) != n && !( n = NaN ) ) || n == 0 ) {
                k = Math.pow( +x, n );
                return new BigNumber( m ? k % m : k );
            }

            if (m) {
                if ( n > 1 && x.gt(ONE) && x.isInt() && m.gt(ONE) && m.isInt() ) {
                    x = x.mod(m);
                } else {
                    z = m;

                    // Nullify m so only a single mod operation is performed at the end.
                    m = null;
                }
            } else if (POW_PRECISION) {

                // Truncating each coefficient array to a length of k after each multiplication
                // equates to truncating significant digits to POW_PRECISION + [28, 41],
                // i.e. there will be a minimum of 28 guard digits retained.
                // (Using + 1.5 would give [9, 21] guard digits.)
                k = mathceil( POW_PRECISION / LOG_BASE + 2 );
            }

            y = new BigNumber(ONE);

            for ( ; ; ) {
                if ( i % 2 ) {
                    y = y.times(x);
                    if ( !y.c ) break;
                    if (k) {
                        if ( y.c.length > k ) y.c.length = k;
                    } else if (m) {
                        y = y.mod(m);
                    }
                }

                i = mathfloor( i / 2 );
                if ( !i ) break;
                x = x.times(x);
                if (k) {
                    if ( x.c && x.c.length > k ) x.c.length = k;
                } else if (m) {
                    x = x.mod(m);
                }
            }

            if (m) return y;
            if ( n < 0 ) y = ONE.div(y);

            return z ? y.mod(z) : k ? round( y, POW_PRECISION, ROUNDING_MODE ) : y;
        };


        /*
         * Return a string representing the value of this BigNumber rounded to sd significant digits
         * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
         * necessary to represent the integer part of the value in fixed-point notation, then use
         * exponential notation.
         *
         * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toPrecision() precision not an integer: {sd}'
         * 'toPrecision() precision out of range: {sd}'
         * 'toPrecision() rounding mode not an integer: {rm}'
         * 'toPrecision() rounding mode out of range: {rm}'
         */
        P.toPrecision = function ( sd, rm ) {
            return format( this, sd != null && isValidInt( sd, 1, MAX, 24, 'precision' )
              ? sd | 0 : null, rm, 24 );
        };


        /*
         * Return a string representing the value of this BigNumber in base b, or base 10 if b is
         * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
         * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
         * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
         * TO_EXP_NEG, return exponential notation.
         *
         * [b] {number} Integer, 2 to 64 inclusive.
         *
         * 'toString() base not an integer: {b}'
         * 'toString() base out of range: {b}'
         */
        P.toString = function (b) {
            var str,
                n = this,
                s = n.s,
                e = n.e;

            // Infinity or NaN?
            if ( e === null ) {

                if (s) {
                    str = 'Infinity';
                    if ( s < 0 ) str = '-' + str;
                } else {
                    str = 'NaN';
                }
            } else {
                str = coeffToString( n.c );

                if ( b == null || !isValidInt( b, 2, 64, 25, 'base' ) ) {
                    str = e <= TO_EXP_NEG || e >= TO_EXP_POS
                      ? toExponential( str, e )
                      : toFixedPoint( str, e );
                } else {
                    str = convertBase( toFixedPoint( str, e ), b | 0, 10, s );
                }

                if ( s < 0 && n.c[0] ) str = '-' + str;
            }

            return str;
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber truncated to a whole
         * number.
         */
        P.truncated = P.trunc = function () {
            return round( new BigNumber(this), this.e + 1, 1 );
        };



        /*
         * Return as toString, but do not accept a base argument, and include the minus sign for
         * negative zero.
         */
        P.valueOf = P.toJSON = function () {
            var str,
                n = this,
                e = n.e;

            if ( e === null ) return n.toString();

            str = coeffToString( n.c );

            str = e <= TO_EXP_NEG || e >= TO_EXP_POS
                ? toExponential( str, e )
                : toFixedPoint( str, e );

            return n.s < 0 ? '-' + str : str;
        };


        // Aliases for BigDecimal methods.
        //P.add = P.plus;         // P.add included above
        //P.subtract = P.minus;   // P.sub included above
        //P.multiply = P.times;   // P.mul included above
        //P.divide = P.div;
        //P.remainder = P.mod;
        //P.compareTo = P.cmp;
        //P.negate = P.neg;


        if ( configObj != null ) BigNumber.config(configObj);

        return BigNumber;
    }


    // PRIVATE HELPER FUNCTIONS


    function bitFloor(n) {
        var i = n | 0;
        return n > 0 || n === i ? i : i - 1;
    }


    // Return a coefficient array as a string of base 10 digits.
    function coeffToString(a) {
        var s, z,
            i = 1,
            j = a.length,
            r = a[0] + '';

        for ( ; i < j; ) {
            s = a[i++] + '';
            z = LOG_BASE - s.length;
            for ( ; z--; s = '0' + s );
            r += s;
        }

        // Determine trailing zeros.
        for ( j = r.length; r.charCodeAt(--j) === 48; );
        return r.slice( 0, j + 1 || 1 );
    }


    // Compare the value of BigNumbers x and y.
    function compare( x, y ) {
        var a, b,
            xc = x.c,
            yc = y.c,
            i = x.s,
            j = y.s,
            k = x.e,
            l = y.e;

        // Either NaN?
        if ( !i || !j ) return null;

        a = xc && !xc[0];
        b = yc && !yc[0];

        // Either zero?
        if ( a || b ) return a ? b ? 0 : -j : i;

        // Signs differ?
        if ( i != j ) return i;

        a = i < 0;
        b = k == l;

        // Either Infinity?
        if ( !xc || !yc ) return b ? 0 : !xc ^ a ? 1 : -1;

        // Compare exponents.
        if ( !b ) return k > l ^ a ? 1 : -1;

        j = ( k = xc.length ) < ( l = yc.length ) ? k : l;

        // Compare digit by digit.
        for ( i = 0; i < j; i++ ) if ( xc[i] != yc[i] ) return xc[i] > yc[i] ^ a ? 1 : -1;

        // Compare lengths.
        return k == l ? 0 : k > l ^ a ? 1 : -1;
    }


    /*
     * Return true if n is a valid number in range, otherwise false.
     * Use for argument validation when ERRORS is false.
     * Note: parseInt('1e+1') == 1 but parseFloat('1e+1') == 10.
     */
    function intValidatorNoErrors( n, min, max ) {
        return ( n = truncate(n) ) >= min && n <= max;
    }


    function isArray(obj) {
        return Object.prototype.toString.call(obj) == '[object Array]';
    }


    /*
     * Convert string of baseIn to an array of numbers of baseOut.
     * Eg. convertBase('255', 10, 16) returns [15, 15].
     * Eg. convertBase('ff', 16, 10) returns [2, 5, 5].
     */
    function toBaseOut( str, baseIn, baseOut ) {
        var j,
            arr = [0],
            arrL,
            i = 0,
            len = str.length;

        for ( ; i < len; ) {
            for ( arrL = arr.length; arrL--; arr[arrL] *= baseIn );
            arr[ j = 0 ] += ALPHABET.indexOf( str.charAt( i++ ) );

            for ( ; j < arr.length; j++ ) {

                if ( arr[j] > baseOut - 1 ) {
                    if ( arr[j + 1] == null ) arr[j + 1] = 0;
                    arr[j + 1] += arr[j] / baseOut | 0;
                    arr[j] %= baseOut;
                }
            }
        }

        return arr.reverse();
    }


    function toExponential( str, e ) {
        return ( str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str ) +
          ( e < 0 ? 'e' : 'e+' ) + e;
    }


    function toFixedPoint( str, e ) {
        var len, z;

        // Negative exponent?
        if ( e < 0 ) {

            // Prepend zeros.
            for ( z = '0.'; ++e; z += '0' );
            str = z + str;

        // Positive exponent
        } else {
            len = str.length;

            // Append zeros.
            if ( ++e > len ) {
                for ( z = '0', e -= len; --e; z += '0' );
                str += z;
            } else if ( e < len ) {
                str = str.slice( 0, e ) + '.' + str.slice(e);
            }
        }

        return str;
    }


    function truncate(n) {
        n = parseFloat(n);
        return n < 0 ? mathceil(n) : mathfloor(n);
    }


    // EXPORT


    BigNumber = constructorFactory();
    BigNumber.default = BigNumber.BigNumber = BigNumber;


    // AMD.
    if ( true ) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () { return BigNumber; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

    // Node.js and other environments that support module.exports.
    } else if ( typeof module != 'undefined' && module.exports ) {
        module.exports = BigNumber;

    // Browser.
    } else {
        if ( !globalObj ) globalObj = typeof self != 'undefined' ? self : Function('return this')();
        globalObj.BigNumber = BigNumber;
    }
})(this);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__paramType__ = __webpack_require__(10);
/* harmony export (immutable) */ __webpack_exports__["b"] = toParamType;
/* harmony export (immutable) */ __webpack_exports__["a"] = fromParamType;
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.



function toParamType(type, indexed) {
  if (type[type.length - 1] === ']') {
    var last = type.lastIndexOf('[');
    var length = type.substr(last + 1, type.length - last - 2);
    var subtype = toParamType(type.substr(0, last));

    if (length.length === 0) {
      return new __WEBPACK_IMPORTED_MODULE_0__paramType__["a" /* default */]('array', subtype, 0, indexed);
    }

    return new __WEBPACK_IMPORTED_MODULE_0__paramType__["a" /* default */]('fixedArray', subtype, parseInt(length, 10), indexed);
  }

  switch (type) {
    case 'address':
    case 'bool':
    case 'bytes':
    case 'string':
      return new __WEBPACK_IMPORTED_MODULE_0__paramType__["a" /* default */](type, null, 0, indexed);

    case 'int':
    case 'uint':
      return new __WEBPACK_IMPORTED_MODULE_0__paramType__["a" /* default */](type, null, 256, indexed);

    default:
      if (type.indexOf('uint') === 0) {
        return new __WEBPACK_IMPORTED_MODULE_0__paramType__["a" /* default */]('uint', null, parseInt(type.substr(4), 10), indexed);
      } else if (type.indexOf('int') === 0) {
        return new __WEBPACK_IMPORTED_MODULE_0__paramType__["a" /* default */]('int', null, parseInt(type.substr(3), 10), indexed);
      } else if (type.indexOf('bytes') === 0) {
        return new __WEBPACK_IMPORTED_MODULE_0__paramType__["a" /* default */]('fixedBytes', null, parseInt(type.substr(5), 10), indexed);
      }

      throw new Error('Cannot convert ' + type + ' to valid ParamType');}

}

function fromParamType(paramType) {
  switch (paramType.type) {
    case 'address':
    case 'bool':
    case 'bytes':
    case 'string':
      return paramType.type;

    case 'int':
    case 'uint':
      return '' + paramType.type + paramType.length;

    case 'fixedBytes':
      return 'bytes' + paramType.length;

    case 'fixedArray':
      return fromParamType(paramType.subtype) + '[' + paramType.length + ']';

    case 'array':
      return fromParamType(paramType.subtype) + '[]';

    default:
      throw new Error('Cannot convert from ParamType ' + paramType.type);}

};var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(toParamType, 'toParamType', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/spec/paramType/format.js');__REACT_HOT_LOADER__.register(fromParamType, 'fromParamType', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/spec/paramType/format.js');}();;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spec_paramType_types__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Token; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

var

Token = function () {
  function Token(type, value) {_classCallCheck(this, Token);
    Token.validateType(type);

    this._type = type;
    this._value = value;
  }_createClass(Token, [{ key: 'type', get: function get()

    {
      return this._type;
    } }, { key: 'value', get: function get()

    {
      return this._value;
    } }], [{ key: 'validateType', value: function validateType(

    type) {
      if (__WEBPACK_IMPORTED_MODULE_0__spec_paramType_types__["a" /* default */].filter(function (_type) {return type === _type;}).length) {
        return true;
      }

      throw new Error('Invalid type ' + type + ' received for Token');
    } }]);return Token;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(Token, 'Token', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/token/token.js');}();;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isArray;
/* unused harmony export isString */
/* harmony export (immutable) */ __webpack_exports__["b"] = isInstanceOf;
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

function isArray(test) {
  return Object.prototype.toString.call(test) === '[object Array]';
}

function isString(test) {
  return Object.prototype.toString.call(test) === '[object String]';
}

function isInstanceOf(test, clazz) {
  return test instanceof clazz;
};var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(isArray, 'isArray', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/util/types.js');__REACT_HOT_LOADER__.register(isString, 'isString', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/util/types.js');__REACT_HOT_LOADER__.register(isInstanceOf, 'isInstanceOf', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/util/types.js');}();;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.5.5
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2016
 * @license MIT
 */
(function (root) {
  'use strict';

  var NODE_JS = typeof process == 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  }
  var COMMON_JS = !root.JS_SHA3_TEST && typeof module == 'object' && module.exports;
  var HEX_CHARS = '0123456789abcdef'.split('');
  var SHAKE_PADDING = [31, 7936, 2031616, 520093696];
  var KECCAK_PADDING = [1, 256, 65536, 16777216];
  var PADDING = [6, 1536, 393216, 100663296];
  var SHIFT = [0, 8, 16, 24];
  var RC = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649,
            0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 
            2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 
            2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648,
            2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
  var BITS = [224, 256, 384, 512];
  var SHAKE_BITS = [128, 256];
  var OUTPUT_TYPES = ['hex', 'buffer', 'arrayBuffer', 'array'];

  var createOutputMethod = function (bits, padding, outputType) {
    return function (message) {
      return new Keccak(bits, padding, bits).update(message)[outputType]();
    }
  };

  var createShakeOutputMethod = function (bits, padding, outputType) {
    return function (message, outputBits) {
      return new Keccak(bits, padding, outputBits).update(message)[outputType]();
    }
  };

  var createMethod = function (bits, padding) {
    var method = createOutputMethod(bits, padding, 'hex');
    method.create = function () {
      return new Keccak(bits, padding, bits);
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0;i < OUTPUT_TYPES.length;++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(bits, padding, type);
    }
    return method;
  };

  var createShakeMethod = function (bits, padding) {
    var method = createShakeOutputMethod(bits, padding, 'hex');
    method.create = function (outputBits) {
      return new Keccak(bits, padding, outputBits);
    };
    method.update = function (message, outputBits) {
      return method.create(outputBits).update(message);
    };
    for (var i = 0;i < OUTPUT_TYPES.length;++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createShakeOutputMethod(bits, padding, type);
    }
    return method;
  };

  var algorithms = [
    {name: 'keccak', padding: KECCAK_PADDING, bits: BITS, createMethod: createMethod},
    {name: 'sha3', padding: PADDING, bits: BITS, createMethod: createMethod},
    {name: 'shake', padding: SHAKE_PADDING, bits: SHAKE_BITS, createMethod: createShakeMethod}
  ];

  var methods = {};

  for (var i = 0;i < algorithms.length;++i) {
    var algorithm = algorithms[i];
    var bits  = algorithm.bits;
    for (var j = 0;j < bits.length;++j) {
      methods[algorithm.name +'_' + bits[j]] = algorithm.createMethod(bits[j], algorithm.padding);
    }
  }

  function Keccak(bits, padding, outputBits) {
    this.blocks = [];
    this.s = [];
    this.padding = padding;
    this.outputBits = outputBits;
    this.reset = true;
    this.block = 0;
    this.start = 0;
    this.blockCount = (1600 - (bits << 1)) >> 5;
    this.byteCount = this.blockCount << 2;
    this.outputBlocks = outputBits >> 5;
    this.extraBytes = (outputBits & 31) >> 3;

    for (var i = 0;i < 50;++i) {
      this.s[i] = 0;
    }
  };

  Keccak.prototype.update = function (message) {
    var notString = typeof message != 'string';
    if (notString && message.constructor == root.ArrayBuffer) {
      message = new Uint8Array(message);
    }
    var length = message.length, blocks = this.blocks, byteCount = this.byteCount, 
        blockCount = this.blockCount, index = 0, s = this.s, i, code;
    
    while (index < length) {
      if (this.reset) {
        this.reset = false;
        blocks[0] = this.block;
        for (i = 1;i < blockCount + 1;++i) {
          blocks[i] = 0;
        }
      }
      if (notString) {
        for (i = this.start;index < length && i < byteCount;++index) {
          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start;index < length && i < byteCount;++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }
      this.lastByteIndex = i;
      if (i >= byteCount) {
        this.start = i - byteCount;
        this.block = blocks[blockCount];
        for (i = 0;i < blockCount;++i) {
          s[i] ^= blocks[i];
        }
        f(s);
        this.reset = true;
      } else {
        this.start = i;
      }
    }
    return this;
  };

  Keccak.prototype.finalize = function () {
    var blocks = this.blocks, i = this.lastByteIndex, blockCount = this.blockCount, s = this.s;
    blocks[i >> 2] |= this.padding[i & 3];
    if (this.lastByteIndex == this.byteCount) {
      blocks[0] = blocks[blockCount];
      for (i = 1;i < blockCount + 1;++i) {
        blocks[i] = 0;
      }
    }
    blocks[blockCount - 1] |= 0x80000000;
    for (i = 0;i < blockCount;++i) {
      s[i] ^= blocks[i];
    }
    f(s);
  };

  Keccak.prototype.toString = Keccak.prototype.hex = function () {
    this.finalize();

    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, 
        extraBytes = this.extraBytes, i = 0, j = 0;
    var hex = '', block;
    while (j < outputBlocks) {
      for (i = 0;i < blockCount && j < outputBlocks;++i, ++j) {
        block = s[i];
        hex += HEX_CHARS[(block >> 4) & 0x0F] + HEX_CHARS[block & 0x0F] +
               HEX_CHARS[(block >> 12) & 0x0F] + HEX_CHARS[(block >> 8) & 0x0F] +
               HEX_CHARS[(block >> 20) & 0x0F] + HEX_CHARS[(block >> 16) & 0x0F] +
               HEX_CHARS[(block >> 28) & 0x0F] + HEX_CHARS[(block >> 24) & 0x0F];
      }
      if (j % blockCount == 0) {
        f(s);
        i = 0;
      }
    }
    if (extraBytes) {
      block = s[i];
      if (extraBytes > 0) {
        hex += HEX_CHARS[(block >> 4) & 0x0F] + HEX_CHARS[block & 0x0F];
      }
      if (extraBytes > 1) {
        hex += HEX_CHARS[(block >> 12) & 0x0F] + HEX_CHARS[(block >> 8) & 0x0F];
      }
      if (extraBytes > 2) {
        hex += HEX_CHARS[(block >> 20) & 0x0F] + HEX_CHARS[(block >> 16) & 0x0F];
      }
    }
    return hex;
  };

  Keccak.prototype.arrayBuffer = function () {
    this.finalize();

    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, 
        extraBytes = this.extraBytes, i = 0, j = 0;
    var bytes = this.outputBits >> 3;
    var buffer;
    if (extraBytes) {
      buffer = new ArrayBuffer((outputBlocks + 1) << 2);
    } else {
      buffer = new ArrayBuffer(bytes);
    }
    var array = new Uint32Array(buffer);
    while (j < outputBlocks) {
      for (i = 0;i < blockCount && j < outputBlocks;++i, ++j) {
        array[j] = s[i];
      }
      if (j % blockCount == 0) {
        f(s);
      }
    }
    if (extraBytes) {
      array[i] = s[i];
      buffer = buffer.slice(0, bytes);
    }
    return buffer;
  };

  Keccak.prototype.buffer = Keccak.prototype.arrayBuffer;

  Keccak.prototype.digest = Keccak.prototype.array = function () {
    this.finalize();

    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, 
        extraBytes = this.extraBytes, i = 0, j = 0;
    var array = [], offset, block;
    while (j < outputBlocks) {
      for (i = 0;i < blockCount && j < outputBlocks;++i, ++j) {
        offset = j << 2;
        block = s[i];
        array[offset] = block & 0xFF;
        array[offset + 1] = (block >> 8) & 0xFF;
        array[offset + 2] = (block >> 16) & 0xFF;
        array[offset + 3] = (block >> 24) & 0xFF;
      }
      if (j % blockCount == 0) {
        f(s);
      }
    }
    if (extraBytes) {
      offset = j << 2;
      block = s[i];
      if (extraBytes > 0) {
        array[offset] = block & 0xFF;
      }
      if (extraBytes > 1) {
        array[offset + 1] = (block >> 8) & 0xFF;
      }
      if (extraBytes > 2) {
        array[offset + 2] = (block >> 16) & 0xFF;
      }
    }
    return array;
  };

  var f = function (s) {
    var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, 
        b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, 
        b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, 
        b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;
    for (n = 0;n < 48;n += 2) {
      c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
      c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
      c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
      c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
      c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
      c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
      c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
      c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
      c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
      c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];

      h = c8 ^ ((c2 << 1) | (c3 >>> 31));
      l = c9 ^ ((c3 << 1) | (c2 >>> 31));
      s[0] ^= h;
      s[1] ^= l;
      s[10] ^= h;
      s[11] ^= l;
      s[20] ^= h;
      s[21] ^= l;
      s[30] ^= h;
      s[31] ^= l;
      s[40] ^= h;
      s[41] ^= l;
      h = c0 ^ ((c4 << 1) | (c5 >>> 31));
      l = c1 ^ ((c5 << 1) | (c4 >>> 31));
      s[2] ^= h;
      s[3] ^= l;
      s[12] ^= h;
      s[13] ^= l;
      s[22] ^= h;
      s[23] ^= l;
      s[32] ^= h;
      s[33] ^= l;
      s[42] ^= h;
      s[43] ^= l;
      h = c2 ^ ((c6 << 1) | (c7 >>> 31));
      l = c3 ^ ((c7 << 1) | (c6 >>> 31));
      s[4] ^= h;
      s[5] ^= l;
      s[14] ^= h;
      s[15] ^= l;
      s[24] ^= h;
      s[25] ^= l;
      s[34] ^= h;
      s[35] ^= l;
      s[44] ^= h;
      s[45] ^= l;
      h = c4 ^ ((c8 << 1) | (c9 >>> 31));
      l = c5 ^ ((c9 << 1) | (c8 >>> 31));
      s[6] ^= h;
      s[7] ^= l;
      s[16] ^= h;
      s[17] ^= l;
      s[26] ^= h;
      s[27] ^= l;
      s[36] ^= h;
      s[37] ^= l;
      s[46] ^= h;
      s[47] ^= l;
      h = c6 ^ ((c0 << 1) | (c1 >>> 31));
      l = c7 ^ ((c1 << 1) | (c0 >>> 31));
      s[8] ^= h;
      s[9] ^= l;
      s[18] ^= h;
      s[19] ^= l;
      s[28] ^= h;
      s[29] ^= l;
      s[38] ^= h;
      s[39] ^= l;
      s[48] ^= h;
      s[49] ^= l;

      b0 = s[0];
      b1 = s[1];
      b32 = (s[11] << 4) | (s[10] >>> 28);
      b33 = (s[10] << 4) | (s[11] >>> 28);
      b14 = (s[20] << 3) | (s[21] >>> 29);
      b15 = (s[21] << 3) | (s[20] >>> 29);
      b46 = (s[31] << 9) | (s[30] >>> 23);
      b47 = (s[30] << 9) | (s[31] >>> 23);
      b28 = (s[40] << 18) | (s[41] >>> 14);
      b29 = (s[41] << 18) | (s[40] >>> 14);
      b20 = (s[2] << 1) | (s[3] >>> 31);
      b21 = (s[3] << 1) | (s[2] >>> 31);
      b2 = (s[13] << 12) | (s[12] >>> 20);
      b3 = (s[12] << 12) | (s[13] >>> 20);
      b34 = (s[22] << 10) | (s[23] >>> 22);
      b35 = (s[23] << 10) | (s[22] >>> 22);
      b16 = (s[33] << 13) | (s[32] >>> 19);
      b17 = (s[32] << 13) | (s[33] >>> 19);
      b48 = (s[42] << 2) | (s[43] >>> 30);
      b49 = (s[43] << 2) | (s[42] >>> 30);
      b40 = (s[5] << 30) | (s[4] >>> 2);
      b41 = (s[4] << 30) | (s[5] >>> 2);
      b22 = (s[14] << 6) | (s[15] >>> 26);
      b23 = (s[15] << 6) | (s[14] >>> 26);
      b4 = (s[25] << 11) | (s[24] >>> 21);
      b5 = (s[24] << 11) | (s[25] >>> 21);
      b36 = (s[34] << 15) | (s[35] >>> 17);
      b37 = (s[35] << 15) | (s[34] >>> 17);
      b18 = (s[45] << 29) | (s[44] >>> 3);
      b19 = (s[44] << 29) | (s[45] >>> 3);
      b10 = (s[6] << 28) | (s[7] >>> 4);
      b11 = (s[7] << 28) | (s[6] >>> 4);
      b42 = (s[17] << 23) | (s[16] >>> 9);
      b43 = (s[16] << 23) | (s[17] >>> 9);
      b24 = (s[26] << 25) | (s[27] >>> 7);
      b25 = (s[27] << 25) | (s[26] >>> 7);
      b6 = (s[36] << 21) | (s[37] >>> 11);
      b7 = (s[37] << 21) | (s[36] >>> 11);
      b38 = (s[47] << 24) | (s[46] >>> 8);
      b39 = (s[46] << 24) | (s[47] >>> 8);
      b30 = (s[8] << 27) | (s[9] >>> 5);
      b31 = (s[9] << 27) | (s[8] >>> 5);
      b12 = (s[18] << 20) | (s[19] >>> 12);
      b13 = (s[19] << 20) | (s[18] >>> 12);
      b44 = (s[29] << 7) | (s[28] >>> 25);
      b45 = (s[28] << 7) | (s[29] >>> 25);
      b26 = (s[38] << 8) | (s[39] >>> 24);
      b27 = (s[39] << 8) | (s[38] >>> 24);
      b8 = (s[48] << 14) | (s[49] >>> 18);
      b9 = (s[49] << 14) | (s[48] >>> 18);

      s[0] = b0 ^ (~b2 & b4);
      s[1] = b1 ^ (~b3 & b5);
      s[10] = b10 ^ (~b12 & b14);
      s[11] = b11 ^ (~b13 & b15);
      s[20] = b20 ^ (~b22 & b24);
      s[21] = b21 ^ (~b23 & b25);
      s[30] = b30 ^ (~b32 & b34);
      s[31] = b31 ^ (~b33 & b35);
      s[40] = b40 ^ (~b42 & b44);
      s[41] = b41 ^ (~b43 & b45);
      s[2] = b2 ^ (~b4 & b6);
      s[3] = b3 ^ (~b5 & b7);
      s[12] = b12 ^ (~b14 & b16);
      s[13] = b13 ^ (~b15 & b17);
      s[22] = b22 ^ (~b24 & b26);
      s[23] = b23 ^ (~b25 & b27);
      s[32] = b32 ^ (~b34 & b36);
      s[33] = b33 ^ (~b35 & b37);
      s[42] = b42 ^ (~b44 & b46);
      s[43] = b43 ^ (~b45 & b47);
      s[4] = b4 ^ (~b6 & b8);
      s[5] = b5 ^ (~b7 & b9);
      s[14] = b14 ^ (~b16 & b18);
      s[15] = b15 ^ (~b17 & b19);
      s[24] = b24 ^ (~b26 & b28);
      s[25] = b25 ^ (~b27 & b29);
      s[34] = b34 ^ (~b36 & b38);
      s[35] = b35 ^ (~b37 & b39);
      s[44] = b44 ^ (~b46 & b48);
      s[45] = b45 ^ (~b47 & b49);
      s[6] = b6 ^ (~b8 & b0);
      s[7] = b7 ^ (~b9 & b1);
      s[16] = b16 ^ (~b18 & b10);
      s[17] = b17 ^ (~b19 & b11);
      s[26] = b26 ^ (~b28 & b20);
      s[27] = b27 ^ (~b29 & b21);
      s[36] = b36 ^ (~b38 & b30);
      s[37] = b37 ^ (~b39 & b31);
      s[46] = b46 ^ (~b48 & b40);
      s[47] = b47 ^ (~b49 & b41);
      s[8] = b8 ^ (~b0 & b2);
      s[9] = b9 ^ (~b1 & b3);
      s[18] = b18 ^ (~b10 & b12);
      s[19] = b19 ^ (~b11 & b13);
      s[28] = b28 ^ (~b20 & b22);
      s[29] = b29 ^ (~b21 & b23);
      s[38] = b38 ^ (~b30 & b32);
      s[39] = b39 ^ (~b31 & b33);
      s[48] = b48 ^ (~b40 & b42);
      s[49] = b49 ^ (~b41 & b43);

      s[0] ^= RC[n];
      s[1] ^= RC[n + 1];
    }
  }

  if (COMMON_JS) {
    module.exports = methods;
  } else if (root) {
    for (var key in methods) {
      root[key] = methods[key];
    }
  }
}(this));


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abi__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__abi__["a"]; });
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.
;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}}();;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decoder_decoder__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__encoder_encoder__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__param__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_signature__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Func; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.




var

Func = function () {
  function Func(abi) {_classCallCheck(this, Func);
    this._abi = abi;
    this._constant = !!abi.constant;
    this._payable = abi.payable;
    this._inputs = __WEBPACK_IMPORTED_MODULE_2__param__["a" /* default */].toParams(abi.inputs || []);
    this._outputs = __WEBPACK_IMPORTED_MODULE_2__param__["a" /* default */].toParams(abi.outputs || []);var _methodSignature =

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util_signature__["a" /* methodSignature */])(abi.name, this.inputParamTypes()),id = _methodSignature.id,name = _methodSignature.name,signature = _methodSignature.signature;

    this._id = id;
    this._name = name;
    this._signature = signature;
  }_createClass(Func, [{ key: 'inputParamTypes', value: function inputParamTypes()

































    {
      return this._inputs.map(function (input) {return input.kind;});
    } }, { key: 'outputParamTypes', value: function outputParamTypes()

    {
      return this._outputs.map(function (output) {return output.kind;});
    } }, { key: 'encodeCall', value: function encodeCall(

    tokens) {
      return '' + this._signature + __WEBPACK_IMPORTED_MODULE_1__encoder_encoder__["a" /* default */].encode(tokens);
    } }, { key: 'decodeInput', value: function decodeInput(

    data) {
      return __WEBPACK_IMPORTED_MODULE_0__decoder_decoder__["a" /* default */].decode(this.inputParamTypes(), data);
    } }, { key: 'decodeOutput', value: function decodeOutput(

    data) {
      return __WEBPACK_IMPORTED_MODULE_0__decoder_decoder__["a" /* default */].decode(this.outputParamTypes(), data);
    } }, { key: 'abi', get: function get() {return this._abi;} }, { key: 'constant', get: function get() {return this._constant;} }, { key: 'name', get: function get() {return this._name;} }, { key: 'id', get: function get() {return this._id;} }, { key: 'payable', get: function get() {return this._payable;} }, { key: 'inputs', get: function get() {return this._inputs;} }, { key: 'outputs', get: function get() {return this._outputs;} }, { key: 'signature', get: function get() {return this._signature;} }]);return Func;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(Func, 'Func', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/spec/function.js');}();;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParamType; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

var

ParamType = function () {
  function ParamType(type) {var subtype = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;var indexed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;_classCallCheck(this, ParamType);
    ParamType.validateType(type);

    this._type = type;
    this._subtype = subtype;
    this._length = length;
    this._indexed = indexed;
  }_createClass(ParamType, [{ key: 'type', get: function get()

    {
      return this._type;
    } }, { key: 'subtype', get: function get()

    {
      return this._subtype;
    } }, { key: 'length', get: function get()

    {
      return this._length;
    } }, { key: 'indexed', get: function get()

    {
      return this._indexed;
    } }], [{ key: 'validateType', value: function validateType(

    type) {
      if (__WEBPACK_IMPORTED_MODULE_0__types__["a" /* default */].filter(function (_type) {return type === _type;}).length) {
        return true;
      }

      throw new Error('Invalid type ' + type + ' received for ParamType');
    } }]);return ParamType;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(ParamType, 'ParamType', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/spec/paramType/paramType.js');}();;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_sha3__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_sha3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_js_sha3__);
/* unused harmony export isChecksumValid */
/* harmony export (immutable) */ __webpack_exports__["b"] = isAddress;
/* harmony export (immutable) */ __webpack_exports__["a"] = toChecksumAddress;
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

 // eslint-disable-line camelcase

function isChecksumValid(_address) {
  var address = _address.replace('0x', '');
  var hash = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_js_sha3__["keccak_256"])(address.toLowerCase());

  for (var n = 0; n < 40; n++) {
    var char = address[n];
    var isLower = char !== char.toUpperCase();
    var isUpper = char !== char.toLowerCase();
    var hashval = parseInt(hash[n], 16);

    if (hashval > 7 && isLower || hashval <= 7 && isUpper) {
      return false;
    }
  }

  return true;
}

function isAddress(address) {
  if (address && address.length === 42) {
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
      return false;
    } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
      return true;
    }

    return isChecksumValid(address);
  }

  return false;
}

function toChecksumAddress(_address) {
  var address = (_address || '').toLowerCase();

  if (!isAddress(address)) {
    return '';
  }

  var hash = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_js_sha3__["keccak_256"])(address.slice(-40));
  var result = '0x';

  for (var n = 0; n < 40; n++) {
    result = '' + result + (parseInt(hash[n], 16) > 7 ? address[n + 2].toUpperCase() : address[n + 2]);
  }

  return result;
};var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(isChecksumValid, 'isChecksumValid', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/util/address.js');__REACT_HOT_LOADER__.register(isAddress, 'isAddress', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/util/address.js');__REACT_HOT_LOADER__.register(toChecksumAddress, 'toChecksumAddress', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/util/address.js');}();;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bignumber_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bignumber_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utf8__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utf8___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_utf8__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types__ = __webpack_require__(6);
/* harmony export (immutable) */ __webpack_exports__["a"] = padAddress;
/* harmony export (immutable) */ __webpack_exports__["c"] = padBool;
/* harmony export (immutable) */ __webpack_exports__["b"] = padU32;
/* harmony export (immutable) */ __webpack_exports__["e"] = padBytes;
/* harmony export (immutable) */ __webpack_exports__["d"] = padFixedBytes;
/* harmony export (immutable) */ __webpack_exports__["f"] = padString;
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.






var ZERO_64 = '0000000000000000000000000000000000000000000000000000000000000000';

function padAddress(_input) {
  var input = _input.substr(0, 2) === '0x' ? _input.substr(2) : _input;

  return ('' + ZERO_64 + input).slice(-64);
}

function padBool(input) {
  return ('' + ZERO_64 + (input ? '1' : '0')).slice(-64);
}

function padU32(input) {
  var bn = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(input);

  if (bn.lessThan(0)) {
    bn = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 16).
    plus(bn).plus(1);
  }

  return ('' + ZERO_64 + bn.toString(16)).slice(-64);
}

function stringToBytes(input) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__types__["a" /* isArray */])(input)) {
    return input;
  } else if (input.substr(0, 2) === '0x') {
    var matches = input.substr(2).toLowerCase().match(/.{1,2}/g) || [];

    return matches.map(function (value) {return parseInt(value, 16);});
  } else {
    return input.split('').map(function (char) {return char.charCodeAt(0);});
  }
}

function padBytes(_input) {
  var input = stringToBytes(_input);

  return '' + padU32(input.length) + padFixedBytes(input);
}

function padFixedBytes(_input) {
  var input = stringToBytes(_input);
  var sinput = input.map(function (code) {return ('0' + code.toString(16)).slice(-2);}).join('');
  var max = Math.floor((sinput.length + 63) / 64) * 64;

  return ('' + sinput + ZERO_64).substr(0, max);
}

function padString(input) {
  var array = __WEBPACK_IMPORTED_MODULE_1_utf8___default.a.encode(input).
  split('').
  map(function (char) {return char.charCodeAt(0);});

  return padBytes(array);
};var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(ZERO_64, 'ZERO_64', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/util/pad.js');__REACT_HOT_LOADER__.register(padAddress, 'padAddress', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/util/pad.js');__REACT_HOT_LOADER__.register(padBool, 'padBool', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/util/pad.js');__REACT_HOT_LOADER__.register(padU32, 'padU32', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/util/pad.js');__REACT_HOT_LOADER__.register(stringToBytes, 'stringToBytes', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/util/pad.js');__REACT_HOT_LOADER__.register(padBytes, 'padBytes', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/util/pad.js');__REACT_HOT_LOADER__.register(padFixedBytes, 'padFixedBytes', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/util/pad.js');__REACT_HOT_LOADER__.register(padString, 'padString', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/util/pad.js');}();;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logging__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__logging__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manager__ = __webpack_require__(65);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__manager__["a"]; });
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.
;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}}();;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_es6_error__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_es6_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_es6_error__);
/* unused harmony export ERROR_CODES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportError; });
function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.



var ERROR_CODES = {
  UNSUPPORTED_REQUEST: -32000,
  NO_WORK: -32001,
  NO_AUTHOR: -32002,
  NO_NEW_WORK: -32003,
  NOT_ENOUGH_DATA: -32006,
  UNKNOWN_ERROR: -32009,
  TRANSACTION_ERROR: -32010,
  EXECUTION_ERROR: -32015,
  EXCEPTION_ERROR: -32016,
  ACCOUNT_LOCKED: -32020,
  PASSWORD_INVALID: -32021,
  ACCOUNT_ERROR: -32023,
  SIGNER_DISABLED: -32030,
  DAPPS_DISABLED: -32031,
  NETWORK_DISABLED: -32035,
  REQUEST_REJECTED: -32040,
  REQUEST_REJECTED_LIMIT: -32041,
  REQUEST_NOT_FOUND: -32042,
  COMPILATION_ERROR: -32050,
  ENCRYPTION_ERROR: -32055,
  FETCH_ERROR: -32060,
  INVALID_PARAMS: -32602 };var


TransportError = function (_ExtendableError) {_inherits(TransportError, _ExtendableError);
  function TransportError(method, code, message) {_classCallCheck(this, TransportError);
    var m = method + ': ' + code + ': ' + message;var _this = _possibleConstructorReturn(this, (TransportError.__proto__ || Object.getPrototypeOf(TransportError)).call(this,

    m));

    _this.code = code;
    _this.type = Object.keys(ERROR_CODES).find(function (k) {return ERROR_CODES[k] === code;}) || '';

    _this.method = method;
    _this.text = message;return _this;
  }return TransportError;}(__WEBPACK_IMPORTED_MODULE_0_es6_error___default.a);;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(ERROR_CODES, 'ERROR_CODES', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/transport/error.js');__REACT_HOT_LOADER__.register(TransportError, 'TransportError', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/transport/error.js');}();;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_range__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_range__);
/* harmony export (immutable) */ __webpack_exports__["a"] = bytesToHex;
/* harmony export (immutable) */ __webpack_exports__["d"] = hexToBytes;
/* harmony export (immutable) */ __webpack_exports__["b"] = hexToAscii;
/* unused harmony export bytesToAscii */
/* harmony export (immutable) */ __webpack_exports__["c"] = asciiToHex;
/* unused harmony export padRight */
/* harmony export (immutable) */ __webpack_exports__["e"] = padLeft;
/* harmony export (immutable) */ __webpack_exports__["f"] = toHex;
 // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.



function bytesToHex(bytes) {
  return '0x' + bytes.map(function (b) {return ('0' + b.toString(16)).slice(-2);}).join('');
}

function hexToBytes(hex) {
  var raw = toHex(hex).slice(2);
  var bytes = [];

  for (var i = 0; i < raw.length; i += 2) {
    bytes.push(parseInt(raw.substr(i, 2), 16));
  }

  return bytes;
}

function hexToAscii(hex) {
  var bytes = hexToBytes(hex);
  var str = bytes.map(function (byte) {return String.fromCharCode(byte);}).join('');

  return str;
}

function bytesToAscii(bytes) {
  return bytes.map(function (b) {return String.fromCharCode(b % 512);}).join('');
}

function asciiToHex(string) {
  return '0x' + string.split('').map(function (s) {return s.charCodeAt(0).toString(16);}).join('');
}

function padRight(input, length) {
  var value = toHex(input).substr(2, length * 2);

  return '0x' + value + __WEBPACK_IMPORTED_MODULE_0_lodash_range___default()(length * 2 - value.length).map(function () {return '0';}).join('');
}

function padLeft(input, length) {
  var value = toHex(input).substr(2, length * 2);

  return '0x' + __WEBPACK_IMPORTED_MODULE_0_lodash_range___default()(length * 2 - value.length).map(function () {return '0';}).join('') + value;
}

function toHex(str) {
  if (str && str.toString) {
    str = str.toString(16);
  }

  if (str && str.substr(0, 2) === '0x') {
    return str.toLowerCase();
  }

  return '0x' + (str || '').toLowerCase();
};var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(bytesToHex, 'bytesToHex', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/format.js');__REACT_HOT_LOADER__.register(hexToBytes, 'hexToBytes', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/format.js');__REACT_HOT_LOADER__.register(hexToAscii, 'hexToAscii', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/format.js');__REACT_HOT_LOADER__.register(bytesToAscii, 'bytesToAscii', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/format.js');__REACT_HOT_LOADER__.register(asciiToHex, 'asciiToHex', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/format.js');__REACT_HOT_LOADER__.register(padRight, 'padRight', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/format.js');__REACT_HOT_LOADER__.register(padLeft, 'padLeft', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/format.js');__REACT_HOT_LOADER__.register(toHex, 'toHex', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/format.js');}();;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utf8__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utf8___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_utf8__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__token_token__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bytesTaken__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__decodeResult__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spec_paramType_paramType__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_slice__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_sliceAs__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_types__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Decoder; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.











var NULL = '0000000000000000000000000000000000000000000000000000000000000000';var

Decoder = function () {function Decoder() {_classCallCheck(this, Decoder);}_createClass(Decoder, null, [{ key: 'decode', value: function decode(
    params, data) {
      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__util_types__["a" /* isArray */])(params)) {
        throw new Error('Parameters should be array of ParamType');
      }

      var slices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util_slice__["a" /* sliceData */])(data);
      var offset = 0;

      return params.map(function (param) {
        var result = Decoder.decodeParam(param, slices, offset);

        offset = result.newOffset;
        return result.token;
      });
    } }, { key: 'peek', value: function peek(

    slices, position) {
      if (!slices || !slices[position]) {
        return NULL;
      }

      return slices[position];
    } }, { key: 'takeBytes', value: function takeBytes(

    slices, position, length) {
      var slicesLength = Math.floor((length + 31) / 32);
      var bytesStr = '';

      for (var idx = 0; idx < slicesLength; idx++) {
        bytesStr = '' + bytesStr + Decoder.peek(slices, position + idx);
      }

      var bytes = (bytesStr.substr(0, length * 2).match(/.{1,2}/g) || []).map(function (code) {return parseInt(code, 16);});

      return new __WEBPACK_IMPORTED_MODULE_2__bytesTaken__["a" /* default */](bytes, position + slicesLength);
    } }, { key: 'decodeParam', value: function decodeParam(

    param, slices, offset) {
      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__util_types__["b" /* isInstanceOf */])(param, __WEBPACK_IMPORTED_MODULE_4__spec_paramType_paramType__["a" /* default */])) {
        throw new Error('param should be instanceof ParamType');
      }

      var tokens = [];
      var taken = void 0;
      var lengthOffset = void 0;
      var length = void 0;
      var newOffset = void 0;

      switch (param.type) {
        case 'address':
          return new __WEBPACK_IMPORTED_MODULE_3__decodeResult__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_1__token_token__["a" /* default */](param.type, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_sliceAs__["a" /* asAddress */])(Decoder.peek(slices, offset))), offset + 1);

        case 'bool':
          return new __WEBPACK_IMPORTED_MODULE_3__decodeResult__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_1__token_token__["a" /* default */](param.type, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_sliceAs__["b" /* asBool */])(Decoder.peek(slices, offset))), offset + 1);

        case 'int':
          return new __WEBPACK_IMPORTED_MODULE_3__decodeResult__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_1__token_token__["a" /* default */](param.type, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_sliceAs__["c" /* asI32 */])(Decoder.peek(slices, offset))), offset + 1);

        case 'uint':
          return new __WEBPACK_IMPORTED_MODULE_3__decodeResult__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_1__token_token__["a" /* default */](param.type, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_sliceAs__["d" /* asU32 */])(Decoder.peek(slices, offset))), offset + 1);

        case 'fixedBytes':
          taken = Decoder.takeBytes(slices, offset, param.length);

          return new __WEBPACK_IMPORTED_MODULE_3__decodeResult__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_1__token_token__["a" /* default */](param.type, taken.bytes), taken.newOffset);

        case 'bytes':
          lengthOffset = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_sliceAs__["d" /* asU32 */])(Decoder.peek(slices, offset)).div(32).toNumber();
          length = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_sliceAs__["d" /* asU32 */])(Decoder.peek(slices, lengthOffset)).toNumber();
          taken = Decoder.takeBytes(slices, lengthOffset + 1, length);

          return new __WEBPACK_IMPORTED_MODULE_3__decodeResult__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_1__token_token__["a" /* default */](param.type, taken.bytes), offset + 1);

        case 'string':
          if (param.indexed) {
            taken = Decoder.takeBytes(slices, offset, 32);

            return new __WEBPACK_IMPORTED_MODULE_3__decodeResult__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_1__token_token__["a" /* default */]('fixedBytes', taken.bytes), offset + 1);
          }

          lengthOffset = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_sliceAs__["d" /* asU32 */])(Decoder.peek(slices, offset)).div(32).toNumber();
          length = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_sliceAs__["d" /* asU32 */])(Decoder.peek(slices, lengthOffset)).toNumber();
          taken = Decoder.takeBytes(slices, lengthOffset + 1, length);

          var str = taken.bytes.map(function (code) {return String.fromCharCode(code);}).join('');

          return new __WEBPACK_IMPORTED_MODULE_3__decodeResult__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_1__token_token__["a" /* default */](param.type, __WEBPACK_IMPORTED_MODULE_0_utf8___default.a.decode(str)), offset + 1);

        case 'array':
          lengthOffset = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_sliceAs__["d" /* asU32 */])(Decoder.peek(slices, offset)).div(32).toNumber();
          length = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_sliceAs__["d" /* asU32 */])(Decoder.peek(slices, lengthOffset)).toNumber();
          newOffset = lengthOffset + 1;

          for (var idx = 0; idx < length; idx++) {
            var result = Decoder.decodeParam(param.subtype, slices, newOffset);

            newOffset = result.newOffset;
            tokens.push(result.token);
          }

          return new __WEBPACK_IMPORTED_MODULE_3__decodeResult__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_1__token_token__["a" /* default */](param.type, tokens), offset + 1);

        case 'fixedArray':
          newOffset = offset;

          for (var _idx = 0; _idx < param.length; _idx++) {
            var _result = Decoder.decodeParam(param.subtype, slices, newOffset);

            newOffset = _result.newOffset;
            tokens.push(_result.token);
          }

          return new __WEBPACK_IMPORTED_MODULE_3__decodeResult__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_1__token_token__["a" /* default */](param.type, tokens), newOffset);

        default:
          throw new Error('Invalid param type ' + param.type + ' in decodeParam');}

    } }]);return Decoder;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(NULL, 'NULL', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/decoder/decoder.js');__REACT_HOT_LOADER__.register(Decoder, 'Decoder', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/decoder/decoder.js');}();;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_pad__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mediate__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__token_token__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_types__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Encoder; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.




var

Encoder = function () {function Encoder() {_classCallCheck(this, Encoder);}_createClass(Encoder, null, [{ key: 'encode', value: function encode(
    tokens) {
      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util_types__["a" /* isArray */])(tokens)) {
        throw new Error('tokens should be array of Token');
      }

      var mediates = tokens.map(function (token, index) {return Encoder.encodeToken(token, index);});
      var inits = mediates.
      map(function (mediate, idx) {return mediate.init(__WEBPACK_IMPORTED_MODULE_1__mediate__["a" /* default */].offsetFor(mediates, idx));}).
      join('');
      var closings = mediates.
      map(function (mediate, idx) {return mediate.closing(__WEBPACK_IMPORTED_MODULE_1__mediate__["a" /* default */].offsetFor(mediates, idx));}).
      join('');

      return '' + inits + closings;
    } }, { key: 'encodeToken', value: function encodeToken(

    token) {var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util_types__["b" /* isInstanceOf */])(token, __WEBPACK_IMPORTED_MODULE_2__token_token__["a" /* default */])) {
        throw new Error('token should be instanceof Token');
      }

      try {
        switch (token.type) {
          case 'address':
            return new __WEBPACK_IMPORTED_MODULE_1__mediate__["a" /* default */]('raw', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_pad__["a" /* padAddress */])(token.value));

          case 'int':
          case 'uint':
            return new __WEBPACK_IMPORTED_MODULE_1__mediate__["a" /* default */]('raw', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_pad__["b" /* padU32 */])(token.value));

          case 'bool':
            return new __WEBPACK_IMPORTED_MODULE_1__mediate__["a" /* default */]('raw', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_pad__["c" /* padBool */])(token.value));

          case 'fixedBytes':
            return new __WEBPACK_IMPORTED_MODULE_1__mediate__["a" /* default */]('raw', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_pad__["d" /* padFixedBytes */])(token.value));

          case 'bytes':
            return new __WEBPACK_IMPORTED_MODULE_1__mediate__["a" /* default */]('prefixed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_pad__["e" /* padBytes */])(token.value));

          case 'string':
            return new __WEBPACK_IMPORTED_MODULE_1__mediate__["a" /* default */]('prefixed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_pad__["f" /* padString */])(token.value));

          case 'fixedArray':
          case 'array':
            return new __WEBPACK_IMPORTED_MODULE_1__mediate__["a" /* default */](token.type, token.value.map(function (token) {return Encoder.encodeToken(token);}));}

      } catch (e) {
        throw new Error('Cannot encode token #' + index + ' [' + token.type + ': ' + token.value + ']. ' + e.message);
      }

      throw new Error('Invalid token type ' + token.type + ' in encodeToken');
    } }]);return Encoder;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(Encoder, 'Encoder', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/encoder/encoder.js');}();;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__paramType_format__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Param; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

var

Param = function () {
  function Param(name, type) {_classCallCheck(this, Param);
    this._name = name;
    this._kind = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__paramType_format__["b" /* toParamType */])(type);
  }_createClass(Param, [{ key: 'name', get: function get()

    {
      return this._name;
    } }, { key: 'kind', get: function get()

    {
      return this._kind;
    } }], [{ key: 'toParams', value: function toParams(

    params) {
      return params.map(function (param) {
        if (param instanceof Param) {
          return param;
        }

        return new Param(param.name, param.type);
      });
    } }]);return Param;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(Param, 'Param', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/spec/param.js');}();;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

var TYPES = ['address', 'bytes', 'int', 'uint', 'bool', 'string', 'array', 'fixedBytes', 'fixedArray'];var _default =

TYPES;/* harmony default export */ __webpack_exports__["a"] = _default;;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(TYPES, 'TYPES', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/spec/paramType/types.js');__REACT_HOT_LOADER__.register(_default, 'default', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/spec/paramType/types.js');}();;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_sha3__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_sha3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_js_sha3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spec_paramType_format__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["b"] = eventSignature;
/* harmony export (immutable) */ __webpack_exports__["a"] = methodSignature;
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

 // eslint-disable-line camelcase


function eventSignature(eventName, params) {var _parseName =
  parseName(eventName),strName = _parseName.strName,name = _parseName.name;
  var types = (params || []).map(__WEBPACK_IMPORTED_MODULE_1__spec_paramType_format__["a" /* fromParamType */]).join(',');
  var id = strName + '(' + types + ')';
  var signature = strName ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_js_sha3__["keccak_256"])(id) : '';

  return { id: id, name: name, signature: signature };
}

function methodSignature(methodName, params) {var _eventSignature =
  eventSignature(methodName, params),id = _eventSignature.id,name = _eventSignature.name,signature = _eventSignature.signature;

  return { id: id, name: name, signature: signature.substr(0, 8) };
}

function parseName(name) {
  var strName = '' + (name || '');
  var idx = strName.indexOf('(');

  if (idx === -1) {
    return { strName: strName, name: name };
  }

  var trimmedName = strName.slice(0, idx);

  return {
    strName: trimmedName,
    name: trimmedName };

};var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(eventSignature, 'eventSignature', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/util/signature.js');__REACT_HOT_LOADER__.register(methodSignature, 'methodSignature', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/util/signature.js');__REACT_HOT_LOADER__.register(parseName, 'parseName', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/util/signature.js');}();;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bignumber_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bignumber_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__address__ = __webpack_require__(11);
/* harmony export (immutable) */ __webpack_exports__["d"] = asU32;
/* harmony export (immutable) */ __webpack_exports__["c"] = asI32;
/* harmony export (immutable) */ __webpack_exports__["a"] = asAddress;
/* harmony export (immutable) */ __webpack_exports__["b"] = asBool;
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.





function asU32(slice) {
  // TODO: validation

  return new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(slice, 16);
}

function asI32(slice) {
  if (new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(slice.substr(0, 1), 16).toString(2)[0] === '1') {
    return new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(slice, 16).
    minus(new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 16)).
    minus(1);
  }

  return new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(slice, 16);
}

function asAddress(slice) {
  // TODO: address validation?

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__address__["a" /* toChecksumAddress */])('0x' + slice.slice(-40));
}

function asBool(slice) {
  // TODO: everything else should be 0

  return new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(slice[63]).eq(1);
};var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(asU32, 'asU32', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/util/sliceAs.js');__REACT_HOT_LOADER__.register(asI32, 'asI32', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/util/sliceAs.js');__REACT_HOT_LOADER__.register(asAddress, 'asAddress', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/util/sliceAs.js');__REACT_HOT_LOADER__.register(asBool, 'asBool', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/util/sliceAs.js');}();;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logging; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

var instance = null;var

Logging = function () {
  function Logging(updateSubscriptions) {_classCallCheck(this, Logging);
    this._updateSubscriptions = updateSubscriptions;

    instance = this;
  }_createClass(Logging, [{ key: 'start', value: function start()





    {
    } }, { key: 'isStarted', get: function get() {return true;} }], [{ key: 'send', value: function send(

    method, params, json) {
      if (!instance) {
        return;
      }

      return instance._updateSubscriptions('logging', null, {
        method: method,
        params: params,
        json: json });

    } }]);return Logging;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(instance, 'instance', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/subscriptions/logging.js');__REACT_HOT_LOADER__.register(Logging, 'Logging', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/subscriptions/logging.js');}();;

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eventemitter3__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eventemitter3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_eventemitter3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonRpcBase; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

var

JsonRpcBase = function (_EventEmitter) {_inherits(JsonRpcBase, _EventEmitter);
  function JsonRpcBase() {_classCallCheck(this, JsonRpcBase);var _this = _possibleConstructorReturn(this, (JsonRpcBase.__proto__ || Object.getPrototypeOf(JsonRpcBase)).call(this));


    _this._id = 1;
    _this._debug = false;
    _this._connected = false;return _this;
  }_createClass(JsonRpcBase, [{ key: 'encode', value: function encode(

    method, params) {
      var json = JSON.stringify({
        jsonrpc: '2.0',
        method: method,
        params: params,
        id: this._id++ });


      return json;
    } }, { key: '_setConnected', value: function _setConnected()

    {
      if (!this._connected) {
        this._connected = true;
        this.emit('open');
      }
    } }, { key: '_setDisconnected', value: function _setDisconnected()

    {
      if (this._connected) {
        this._connected = false;
        this.emit('close');
      }
    } }, { key: 'setDebug', value: function setDebug(













    flag) {
      this._debug = flag;
    } }, { key: 'error', value: function error(

    _error) {
      if (this.isDebug) {
        console.error(_error);
      }
    } }, { key: 'log', value: function log(

    _log) {
      if (this.isDebug) {
        console.log(_log);
      }
    } }, { key: 'id', get: function get() {return this._id;} }, { key: 'isDebug', get: function get() {return this._debug;} }, { key: 'isConnected', get: function get() {return this._connected;} }]);return JsonRpcBase;}(__WEBPACK_IMPORTED_MODULE_0_eventemitter3___default.a);;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(JsonRpcBase, 'JsonRpcBase', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/transport/jsonRpcBase.js');}();;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @api private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {Mixed} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Boolean} exists Only check if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Remove the listeners of a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {Mixed} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
         listeners.fn === fn
      && (!once || listeners.once)
      && (!context || listeners.context === context)
    ) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
           listeners[i].fn !== fn
        || (once && !listeners[i].once)
        || (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {String|Symbol} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(88);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(26),
    getRawTag = __webpack_require__(84),
    objectToString = __webpack_require__(87);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  value = Object(value);
  return (symToStringTag && symToStringTag in value)
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/utf8js v2.1.2 by @mathias */
;(function(root) {

	// Detect free variables `exports`
	var freeExports = typeof exports == 'object' && exports;

	// Detect free variable `module`
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var stringFromCharCode = String.fromCharCode;

	// Taken from https://mths.be/punycode
	function ucs2decode(string) {
		var output = [];
		var counter = 0;
		var length = string.length;
		var value;
		var extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	// Taken from https://mths.be/punycode
	function ucs2encode(array) {
		var length = array.length;
		var index = -1;
		var value;
		var output = '';
		while (++index < length) {
			value = array[index];
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
		}
		return output;
	}

	function checkScalarValue(codePoint) {
		if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
			throw Error(
				'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
				' is not a scalar value'
			);
		}
	}
	/*--------------------------------------------------------------------------*/

	function createByte(codePoint, shift) {
		return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
	}

	function encodeCodePoint(codePoint) {
		if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
			return stringFromCharCode(codePoint);
		}
		var symbol = '';
		if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
			symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
		}
		else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
			checkScalarValue(codePoint);
			symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
			symbol += createByte(codePoint, 6);
		}
		else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
			symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
			symbol += createByte(codePoint, 12);
			symbol += createByte(codePoint, 6);
		}
		symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
		return symbol;
	}

	function utf8encode(string) {
		var codePoints = ucs2decode(string);
		var length = codePoints.length;
		var index = -1;
		var codePoint;
		var byteString = '';
		while (++index < length) {
			codePoint = codePoints[index];
			byteString += encodeCodePoint(codePoint);
		}
		return byteString;
	}

	/*--------------------------------------------------------------------------*/

	function readContinuationByte() {
		if (byteIndex >= byteCount) {
			throw Error('Invalid byte index');
		}

		var continuationByte = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		if ((continuationByte & 0xC0) == 0x80) {
			return continuationByte & 0x3F;
		}

		// If we end up here, it’s not a continuation byte
		throw Error('Invalid continuation byte');
	}

	function decodeSymbol() {
		var byte1;
		var byte2;
		var byte3;
		var byte4;
		var codePoint;

		if (byteIndex > byteCount) {
			throw Error('Invalid byte index');
		}

		if (byteIndex == byteCount) {
			return false;
		}

		// Read first byte
		byte1 = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		// 1-byte sequence (no continuation bytes)
		if ((byte1 & 0x80) == 0) {
			return byte1;
		}

		// 2-byte sequence
		if ((byte1 & 0xE0) == 0xC0) {
			byte2 = readContinuationByte();
			codePoint = ((byte1 & 0x1F) << 6) | byte2;
			if (codePoint >= 0x80) {
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 3-byte sequence (may include unpaired surrogates)
		if ((byte1 & 0xF0) == 0xE0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
			if (codePoint >= 0x0800) {
				checkScalarValue(codePoint);
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 4-byte sequence
		if ((byte1 & 0xF8) == 0xF0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			byte4 = readContinuationByte();
			codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
				(byte3 << 0x06) | byte4;
			if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
				return codePoint;
			}
		}

		throw Error('Invalid UTF-8 detected');
	}

	var byteArray;
	var byteCount;
	var byteIndex;
	function utf8decode(byteString) {
		byteArray = ucs2decode(byteString);
		byteCount = byteArray.length;
		byteIndex = 0;
		var codePoints = [];
		var tmp;
		while ((tmp = decodeSymbol()) !== false) {
			codePoints.push(tmp);
		}
		return ucs2encode(codePoints);
	}

	/*--------------------------------------------------------------------------*/

	var utf8 = {
		'version': '2.1.2',
		'encode': utf8encode,
		'decode': utf8decode
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return utf8;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = utf8;
		} else { // in Narwhal or RingoJS v0.7.0-
			var object = {};
			var hasOwnProperty = object.hasOwnProperty;
			for (var key in utf8) {
				hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.utf8 = utf8;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(98)(module)))

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["a"]; });
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.
;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}}();;

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spec_interface__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Abi; });
function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

var

Abi = function (_Interface) {_inherits(Abi, _Interface);function Abi() {_classCallCheck(this, Abi);return _possibleConstructorReturn(this, (Abi.__proto__ || Object.getPrototypeOf(Abi)).apply(this, arguments));}return Abi;}(__WEBPACK_IMPORTED_MODULE_0__spec_interface__["a" /* default */]);;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(Abi, 'Abi', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/abi.js');}();;

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BytesTaken; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.
var
BytesTaken = function () {
  function BytesTaken(bytes, newOffset) {_classCallCheck(this, BytesTaken);
    this._bytes = bytes;
    this._newOffset = newOffset;
  }_createClass(BytesTaken, [{ key: "bytes", get: function get()

    {
      return this._bytes;
    } }, { key: "newOffset", get: function get()

    {
      return this._newOffset;
    } }]);return BytesTaken;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(BytesTaken, "BytesTaken", "/home/nicolas/Workspace/Ethcore/parity/js/src/abi/decoder/bytesTaken.js");}();;

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DecodeResult; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.
var
DecodeResult = function () {
  function DecodeResult(token, newOffset) {_classCallCheck(this, DecodeResult);
    this._token = token;
    this._newOffset = newOffset;
  }_createClass(DecodeResult, [{ key: "token", get: function get()

    {
      return this._token;
    } }, { key: "newOffset", get: function get()

    {
      return this._newOffset;
    } }]);return DecodeResult;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(DecodeResult, "DecodeResult", "/home/nicolas/Workspace/Ethcore/parity/js/src/abi/decoder/decodeResult.js");}();;

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_pad__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mediate; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

var TYPES = ['raw', 'prefixed', 'fixedArray', 'array'];

var

Mediate = function () {
  function Mediate(type, value) {_classCallCheck(this, Mediate);
    Mediate.validateType(type);

    this._type = type;
    this._value = value;
  }_createClass(Mediate, [{ key: 'initLength', value: function initLength()

    {
      switch (this._type) {
        case 'raw':
          return this._value.length / 2;

        case 'array':
        case 'prefixed':
          return 32;

        case 'fixedArray':
          return this._value.
          reduce(function (total, mediate) {
            return total + mediate.initLength();
          }, 0);}

    } }, { key: 'closingLength', value: function closingLength()

    {
      switch (this._type) {
        case 'raw':
          return 0;

        case 'prefixed':
          return this._value.length / 2;

        case 'array':
          return this._value.
          reduce(function (total, mediate) {
            return total + mediate.initLength();
          }, 32);

        case 'fixedArray':
          return this._value.
          reduce(function (total, mediate) {
            return total + mediate.initLength() + mediate.closingLength();
          }, 0);}

    } }, { key: 'init', value: function init(

    suffixOffset) {var _this = this;
      switch (this._type) {
        case 'raw':
          return this._value;

        case 'fixedArray':
          return this._value.
          map(function (mediate, idx) {return mediate.init(Mediate.offsetFor(_this._value, idx)).toString(16);}).
          join('');

        case 'prefixed':
        case 'array':
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_pad__["b" /* padU32 */])(suffixOffset);}

    } }, { key: 'closing', value: function closing(

    offset) {var _this2 = this;
      switch (this._type) {
        case 'raw':
          return '';

        case 'prefixed':
          return this._value;

        case 'fixedArray':
          return this._value.
          map(function (mediate, idx) {return mediate.closing(Mediate.offsetFor(_this2._value, idx)).toString(16);}).
          join('');

        case 'array':
          var prefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_pad__["b" /* padU32 */])(this._value.length);
          var inits = this._value.
          map(function (mediate, idx) {return mediate.init(offset + Mediate.offsetFor(_this2._value, idx) + 32).toString(16);}).
          join('');
          var closings = this._value.
          map(function (mediate, idx) {return mediate.closing(offset + Mediate.offsetFor(_this2._value, idx)).toString(16);}).
          join('');

          return '' + prefix + inits + closings;}

    } }, { key: 'type', get: function get()

    {
      return this._type;
    } }, { key: 'value', get: function get()

    {
      return this._value;
    } }], [{ key: 'offsetFor', value: function offsetFor(

    mediates, position) {
      if (position < 0 || position >= mediates.length) {
        throw new Error('Invalid position ' + position + ' specified for Mediate.offsetFor');
      }

      var initLength = mediates.
      reduce(function (total, mediate) {
        return total + mediate.initLength();
      }, 0);

      return mediates.
      slice(0, position).
      reduce(function (total, mediate) {
        return total + mediate.closingLength();
      }, initLength);
    } }, { key: 'validateType', value: function validateType(

    type) {
      if (TYPES.filter(function (_type) {return type === _type;}).length) {
        return true;
      }

      throw new Error('Invalid type ' + type + ' received for Mediate.validateType');
    } }]);return Mediate;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(TYPES, 'TYPES', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/encoder/mediate.js');__REACT_HOT_LOADER__.register(Mediate, 'Mediate', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/encoder/mediate.js');}();;

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__encoder_encoder__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__param__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constructor; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.


var

Constructor = function () {
  function Constructor(abi) {_classCallCheck(this, Constructor);
    this._inputs = __WEBPACK_IMPORTED_MODULE_1__param__["a" /* default */].toParams(abi.inputs || []);
  }_createClass(Constructor, [{ key: 'inputParamTypes', value: function inputParamTypes()





    {
      return this._inputs.map(function (input) {return input.kind;});
    } }, { key: 'encodeCall', value: function encodeCall(

    tokens) {
      return __WEBPACK_IMPORTED_MODULE_0__encoder_encoder__["a" /* default */].encode(tokens);
    } }, { key: 'inputs', get: function get() {return this._inputs;} }]);return Constructor;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(Constructor, 'Constructor', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/spec/constructor.js');}();;

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DecodedLog; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.
var
DecodedLog = function () {
  function DecodedLog(params, address) {_classCallCheck(this, DecodedLog);
    this._params = params;
    this._address = address;
  }_createClass(DecodedLog, [{ key: "address", get: function get()

    {
      return this._address;
    } }, { key: "params", get: function get()

    {
      return this._params;
    } }]);return DecodedLog;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(DecodedLog, "DecodedLog", "/home/nicolas/Workspace/Ethcore/parity/js/src/abi/spec/event/decodedLog.js");}();;

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__paramType_paramType__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__token_token__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_types__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DecodedLogParam; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.



var

DecodedLogParam = function () {
  function DecodedLogParam(name, kind, token) {_classCallCheck(this, DecodedLogParam);
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_types__["b" /* isInstanceOf */])(kind, __WEBPACK_IMPORTED_MODULE_0__paramType_paramType__["a" /* default */])) {
      throw new Error('kind not instanceof ParamType');
    } else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_types__["b" /* isInstanceOf */])(token, __WEBPACK_IMPORTED_MODULE_1__token_token__["a" /* default */])) {
      throw new Error('token not instanceof Token');
    }

    this._name = name;
    this._kind = kind;
    this._token = token;
  }_createClass(DecodedLogParam, [{ key: 'name', get: function get()

    {
      return this._name;
    } }, { key: 'kind', get: function get()

    {
      return this._kind;
    } }, { key: 'token', get: function get()

    {
      return this._token;
    } }]);return DecodedLogParam;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(DecodedLogParam, 'DecodedLogParam', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/spec/event/decodedLogParam.js');}();;

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decoder_decoder__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__decodedLog__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__decodedLogParam__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eventParam__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_sliceAs__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_signature__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.






var

Event = function () {
  function Event(abi) {_classCallCheck(this, Event);
    this._inputs = __WEBPACK_IMPORTED_MODULE_3__eventParam__["a" /* default */].toEventParams(abi.inputs || []);
    this._anonymous = !!abi.anonymous;var _eventSignature =

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util_signature__["b" /* eventSignature */])(abi.name, this.inputParamTypes()),id = _eventSignature.id,name = _eventSignature.name,signature = _eventSignature.signature;

    this._id = id;
    this._name = name;
    this._signature = signature;
  }_createClass(Event, [{ key: 'inputParamTypes', value: function inputParamTypes()





















    {
      return this._inputs.map(function (input) {return input.kind;});
    } }, { key: 'inputParamNames', value: function inputParamNames()

    {
      return this._inputs.map(function (input) {return input.name;});
    } }, { key: 'indexedParams', value: function indexedParams(

    indexed) {
      return this._inputs.filter(function (input) {return input.indexed === indexed;});
    } }, { key: 'decodeLog', value: function decodeLog(

    topics, data) {
      var topicParams = this.indexedParams(true);
      var dataParams = this.indexedParams(false);

      var address = void 0;
      var toSkip = void 0;

      if (!this.anonymous) {
        address = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_sliceAs__["a" /* asAddress */])(topics[0]);
        toSkip = 1;
      } else {
        toSkip = 0;
      }

      var topicTypes = topicParams.map(function (param) {return param.kind;});
      var flatTopics = topics.
      filter(function (topic, idx) {return idx >= toSkip;}).
      map(function (topic) {
        return topic.substr(0, 2) === '0x' ?
        topic.substr(2) :
        topic;
      }).join('');
      var topicTokens = __WEBPACK_IMPORTED_MODULE_0__decoder_decoder__["a" /* default */].decode(topicTypes, flatTopics);

      if (topicTokens.length !== topics.length - toSkip) {
        throw new Error('Invalid topic data');
      }

      var dataTypes = dataParams.map(function (param) {return param.kind;});
      var dataTokens = __WEBPACK_IMPORTED_MODULE_0__decoder_decoder__["a" /* default */].decode(dataTypes, data);

      var namedTokens = {};

      topicParams.forEach(function (param, idx) {
        namedTokens[param.name] = topicTokens[idx];
      });
      dataParams.forEach(function (param, idx) {
        namedTokens[param.name] = dataTokens[idx];
      });

      var inputParamTypes = this.inputParamTypes();
      var decodedParams = this.inputParamNames().
      map(function (name, idx) {return new __WEBPACK_IMPORTED_MODULE_2__decodedLogParam__["a" /* default */](name, inputParamTypes[idx], namedTokens[name]);});

      return new __WEBPACK_IMPORTED_MODULE_1__decodedLog__["a" /* default */](decodedParams, address);
    } }, { key: 'name', get: function get() {return this._name;} }, { key: 'id', get: function get() {return this._id;} }, { key: 'inputs', get: function get() {return this._inputs;} }, { key: 'anonymous', get: function get() {return this._anonymous;} }, { key: 'signature', get: function get() {return this._signature;} }]);return Event;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(Event, 'Event', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/spec/event/event.js');}();;

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__paramType_format__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventParam; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

var

EventParam = function () {
  function EventParam(name, type) {var indexed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;_classCallCheck(this, EventParam);
    this._name = name;
    this._indexed = indexed;
    this._kind = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__paramType_format__["b" /* toParamType */])(type, indexed);
  }_createClass(EventParam, [{ key: 'name', get: function get()

    {
      return this._name;
    } }, { key: 'kind', get: function get()

    {
      return this._kind;
    } }, { key: 'indexed', get: function get()

    {
      return this._indexed;
    } }], [{ key: 'toEventParams', value: function toEventParams(

    params) {
      return params.map(function (param) {return new EventParam(param.name, param.type, param.indexed);});
    } }]);return EventParam;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(EventParam, 'EventParam', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/spec/event/eventParam.js');}();;

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constructor__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_event__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__function__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__token__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Interface; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.




var

Interface = function () {
  function Interface(abi) {_classCallCheck(this, Interface);
    this._interface = Interface.parseABI(abi);
  }_createClass(Interface, [{ key: 'encodeTokens', value: function encodeTokens(

















    paramTypes, values) {
      return Interface.encodeTokens(paramTypes, values);
    } }, { key: 'interface', get: function get() {return this._interface;} }, { key: 'constructors', get: function get() {return this._interface.filter(function (item) {return item instanceof __WEBPACK_IMPORTED_MODULE_0__constructor__["a" /* default */];});} }, { key: 'events', get: function get() {return this._interface.filter(function (item) {return item instanceof __WEBPACK_IMPORTED_MODULE_1__event_event__["a" /* default */];});} }, { key: 'functions', get: function get() {return this._interface.filter(function (item) {return item instanceof __WEBPACK_IMPORTED_MODULE_2__function__["a" /* default */];});} }], [{ key: 'encodeTokens', value: function encodeTokens(

    paramTypes, values) {
      var createToken = function createToken(paramType, value) {
        if (paramType.subtype) {
          return new __WEBPACK_IMPORTED_MODULE_3__token__["a" /* default */](paramType.type, value.map(function (entry) {return createToken(paramType.subtype, entry);}));
        }

        return new __WEBPACK_IMPORTED_MODULE_3__token__["a" /* default */](paramType.type, value);
      };

      return paramTypes.map(function (paramType, idx) {return createToken(paramType, values[idx]);});
    } }, { key: 'parseABI', value: function parseABI(

    abi) {
      return abi.map(function (item) {
        switch (item.type) {
          case 'constructor':
            return new __WEBPACK_IMPORTED_MODULE_0__constructor__["a" /* default */](item);

          case 'event':
            return new __WEBPACK_IMPORTED_MODULE_1__event_event__["a" /* default */](item);

          case 'function':
          case 'fallback':
            return new __WEBPACK_IMPORTED_MODULE_2__function__["a" /* default */](item);

          default:
            throw new Error('Unknown ABI type ' + item.type);}

      });
    } }]);return Interface;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(Interface, 'Interface', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/spec/interface.js');}();;

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__token__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__token__["a"]; });
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.
;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}}();;

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pad__ = __webpack_require__(12);
/* harmony export (immutable) */ __webpack_exports__["a"] = sliceData;
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.



function sliceData(_data) {
  if (!_data || !_data.length) {
    return [];
  }

  var data = _data.substr(0, 2) === '0x' ? _data.substr(2) : _data;

  if (!data.length) {
    data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__pad__["a" /* padAddress */])('');
  }

  return data.match(/.{1,64}/g);
};var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(sliceData, 'sliceData', '/home/nicolas/Workspace/Ethcore/parity/js/src/abi/util/slice.js');}();;

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eventemitter3__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eventemitter3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_eventemitter3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transport__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contract__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rpc__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subscriptions__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_types__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
var _slicedToArray = function () {function sliceIterator(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"]) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}return function (arr, i) {if (Array.isArray(arr)) {return arr;} else if (Symbol.iterator in Object(arr)) {return sliceIterator(arr, i);} else {throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _class, _temp;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.









var

Api = (_temp = _class = function (_EventEmitter) {_inherits(Api, _EventEmitter);
  function Api(transport) {_classCallCheck(this, Api);var _this = _possibleConstructorReturn(this, (Api.__proto__ || Object.getPrototypeOf(Api)).call(this));


    if (!transport || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_types__["a" /* isFunction */])(transport.execute)) {
      throw new Error('EthApi needs transport with execute() function defined');
    }

    _this._transport = transport;

    _this._db = new __WEBPACK_IMPORTED_MODULE_3__rpc__["a" /* Db */](transport);
    _this._eth = new __WEBPACK_IMPORTED_MODULE_3__rpc__["b" /* Eth */](transport);
    _this._net = new __WEBPACK_IMPORTED_MODULE_3__rpc__["c" /* Net */](transport);
    _this._parity = new __WEBPACK_IMPORTED_MODULE_3__rpc__["d" /* Parity */](transport);
    _this._personal = new __WEBPACK_IMPORTED_MODULE_3__rpc__["e" /* Personal */](transport);
    _this._shh = new __WEBPACK_IMPORTED_MODULE_3__rpc__["f" /* Shh */](transport);
    _this._signer = new __WEBPACK_IMPORTED_MODULE_3__rpc__["g" /* Signer */](transport);
    _this._trace = new __WEBPACK_IMPORTED_MODULE_3__rpc__["h" /* Trace */](transport);
    _this._web3 = new __WEBPACK_IMPORTED_MODULE_3__rpc__["i" /* Web3 */](transport);

    _this._subscriptions = new __WEBPACK_IMPORTED_MODULE_4__subscriptions__["a" /* default */](_this);return _this;
  }_createClass(Api, [{ key: 'newContract', value: function newContract(













































    abi, address) {
      return new __WEBPACK_IMPORTED_MODULE_2__contract__["a" /* default */](this, abi).at(address);
    } }, { key: 'subscribe', value: function subscribe(

    subscriptionName, callback) {
      return this._subscriptions.subscribe(subscriptionName, callback);
    } }, { key: 'unsubscribe', value: function unsubscribe(

    subscriptionId) {
      return this._subscriptions.unsubscribe(subscriptionId);
    } }, { key: 'pollMethod', value: function pollMethod(

    method, input, validate) {var _this2 = this;var _method$split =
      method.split('_'),_method$split2 = _slicedToArray(_method$split, 2),_group = _method$split2[0],endpoint = _method$split2[1];
      var group = '_' + _group;

      return new Promise(function (resolve, reject) {
        var timeout = function timeout() {
          _this2[group][endpoint](input).
          then(function (result) {
            if (validate ? validate(result) : result) {
              resolve(result);
            } else {
              setTimeout(timeout, 500);
            }
          }).
          catch(function (error) {
            // Don't print if the request is rejected: that's ok
            if (error.type !== 'REQUEST_REJECTED') {
              console.error('pollMethod', error);
            }

            reject(error);
          });
        };

        timeout();
      });
    } }, { key: 'db', get: function get() {return this._db;} }, { key: 'eth', get: function get() {return this._eth;} }, { key: 'parity', get: function get() {return this._parity;} }, { key: 'net', get: function get() {return this._net;} }, { key: 'personal', get: function get() {return this._personal;} }, { key: 'shh', get: function get() {return this._shh;} }, { key: 'signer', get: function get() {return this._signer;} }, { key: 'trace', get: function get() {return this._trace;} }, { key: 'transport', get: function get() {return this._transport;} }, { key: 'web3', get: function get() {return this._web3;} }, { key: 'util', get: function get() {return __WEBPACK_IMPORTED_MODULE_5__util__["a" /* default */];} }]);return Api;}(__WEBPACK_IMPORTED_MODULE_0_eventemitter3___default.a), _class.

util = __WEBPACK_IMPORTED_MODULE_5__util__["a" /* default */], _class.

Transport = {
  Http: __WEBPACK_IMPORTED_MODULE_1__transport__["a" /* Http */],
  Ws: __WEBPACK_IMPORTED_MODULE_1__transport__["b" /* Ws */] }, _temp);;var _temp2 = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(Api, 'Api', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/api.js');}();;

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abi__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contract; });
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _slicedToArray = function () {function sliceIterator(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"]) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}return function (arr, i) {if (Array.isArray(arr)) {return arr;} else if (Symbol.iterator in Object(arr)) {return sliceIterator(arr, i);} else {throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.



var nextSubscriptionId = 0;var

Contract = function () {
  function Contract(api, abi) {var _this = this;_classCallCheck(this, Contract);this.







































































































































































    _pollCheckRequest = function () {return _this.___pollCheckRequest__REACT_HOT_LOADER__.apply(_this, arguments);};this.



    _pollTransactionReceipt = function () {return _this.___pollTransactionReceipt__REACT_HOT_LOADER__.apply(_this, arguments);};this.









    getCallData = function () {return _this.__getCallData__REACT_HOT_LOADER__.apply(_this, arguments);};this.




























    _bindFunction = function () {return _this.___bindFunction__REACT_HOT_LOADER__.apply(_this, arguments);};this.




































































    _bindEvent = function () {return _this.___bindEvent__REACT_HOT_LOADER__.apply(_this, arguments);};this.














































































































































    _subscribeToChanges = function () {return _this.___subscribeToChanges__REACT_HOT_LOADER__.apply(_this, arguments);};this.



















    _unsubscribeFromChanges = function () {return _this.___unsubscribeFromChanges__REACT_HOT_LOADER__.apply(_this, arguments);};this.



















    _subscribeToBlock = function () {return _this.___subscribeToBlock__REACT_HOT_LOADER__.apply(_this, arguments);};this.



















    _subscribeToPendings = function () {return _this.___subscribeToPendings__REACT_HOT_LOADER__.apply(_this, arguments);};this.











    _sendSubscriptionChanges = function () {return _this.___sendSubscriptionChanges__REACT_HOT_LOADER__.apply(_this, arguments);};if (!api) {throw new Error('API instance needs to be provided to Contract');}if (!abi) {throw new Error('ABI needs to be provided to Contract instance');}this._api = api;this._abi = new __WEBPACK_IMPORTED_MODULE_0__abi__["a" /* default */](abi);this._subscriptions = {};this._constructors = this._abi.constructors.map(this._bindFunction);this._functions = this._abi.functions.map(this._bindFunction);this._events = this._abi.events.map(this._bindEvent);this._instance = {};this._events.forEach(function (evt) {_this._instance[evt.name] = evt;_this._instance[evt.signature] = evt;});this._functions.forEach(function (fn) {_this._instance[fn.name] = fn;_this._instance[fn.signature] = fn;});this._subscribedToPendings = false;this._pendingsSubscriptionId = null;this._subscribedToBlock = false;this._blockSubscriptionId = null;if (api && api.patch && api.patch.contract) {api.patch.contract(this);}}_createClass(Contract, [{ key: 'at', value: function at(address) {this._address = address;return this;} }, { key: 'deployEstimateGas', value: function deployEstimateGas(options, values) {var _options = this._encodeOptions(this.constructors[0], options, values);return this._api.eth.estimateGas(_options).then(function (gasEst) {return [gasEst, gasEst.mul(1.2)];});} }, { key: 'deploy', value: function deploy(options, values) {var _this2 = this;var statecb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};statecb(null, { state: 'estimateGas' });return this.deployEstimateGas(options, values).then(function (_ref) {var _ref2 = _slicedToArray(_ref, 2),gasEst = _ref2[0],gas = _ref2[1];options.gas = gas.toFixed(0);statecb(null, { state: 'postTransaction', gas: gas });var encodedOptions = _this2._encodeOptions(_this2.constructors[0], options, values);return _this2._api.parity.postTransaction(encodedOptions).then(function (requestId) {statecb(null, { state: 'checkRequest', requestId: requestId });return _this2._pollCheckRequest(requestId);}).then(function (txhash) {statecb(null, { state: 'getTransactionReceipt', txhash: txhash });return _this2._pollTransactionReceipt(txhash, gas);}).then(function (receipt) {if (receipt.gasUsed.eq(gas)) {throw new Error('Contract not deployed, gasUsed == ' + gas.toFixed(0));}statecb(null, { state: 'hasReceipt', receipt: receipt });_this2._receipt = receipt;_this2._address = receipt.contractAddress;return _this2._address;}).then(function (address) {statecb(null, { state: 'getCode' });return _this2._api.eth.getCode(_this2._address);}).then(function (code) {if (code === '0x') {throw new Error('Contract not deployed, getCode returned 0x');}statecb(null, { state: 'completed' });return _this2._address;});});} }, { key: 'parseEventLogs', value: function parseEventLogs(logs) {var _this3 = this;return logs.map(function (log) {var signature = log.topics[0].substr(2);var event = _this3.events.find(function (evt) {return evt.signature === signature;});if (!event) {console.warn('Unable to find event matching signature ' + signature);return null;}var decoded = event.decodeLog(log.topics, log.data);log.params = {};log.event = event.name;decoded.params.forEach(function (param) {var _param$token = param.token,type = _param$token.type,value = _param$token.value;log.params[param.name] = { type: type, value: value };});return log;}).filter(function (log) {return log;});} }, { key: 'parseTransactionEvents', value: function parseTransactionEvents(receipt) {receipt.logs = this.parseEventLogs(receipt.logs);return receipt;} }, { key: '___pollCheckRequest__REACT_HOT_LOADER__', value: function ___pollCheckRequest__REACT_HOT_LOADER__() {return this.___pollCheckRequest__REACT_HOT_LOADER__.apply(this, arguments);} }, { key: '___pollCheckRequest__REACT_HOT_LOADER__', value: function ___pollCheckRequest__REACT_HOT_LOADER__(requestId) {return this._api.pollMethod('parity_checkRequest', requestId);} }, { key: '___pollTransactionReceipt__REACT_HOT_LOADER__', value: function ___pollTransactionReceipt__REACT_HOT_LOADER__() {return this.___pollTransactionReceipt__REACT_HOT_LOADER__.apply(this, arguments);} }, { key: '___pollTransactionReceipt__REACT_HOT_LOADER__', value: function ___pollTransactionReceipt__REACT_HOT_LOADER__(txhash, gas) {return this.api.pollMethod('eth_getTransactionReceipt', txhash, function (receipt) {if (!receipt || !receipt.blockNumber || receipt.blockNumber.eq(0)) {return false;}return true;});} }, { key: '__getCallData__REACT_HOT_LOADER__', value: function __getCallData__REACT_HOT_LOADER__() {return this.__getCallData__REACT_HOT_LOADER__.apply(this, arguments);} }, { key: '__getCallData__REACT_HOT_LOADER__', value: function __getCallData__REACT_HOT_LOADER__(func, options, values) {var data = options.data;var tokens = func ? __WEBPACK_IMPORTED_MODULE_0__abi__["a" /* default */].encodeTokens(func.inputParamTypes(), values) : null;var call = tokens ? func.encodeCall(tokens) : null;if (data && data.substr(0, 2) === '0x') {data = data.substr(2);}return '0x' + (data || '') + (call || '');} }, { key: '_encodeOptions', value: function _encodeOptions(func, options, values) {var data = this.getCallData(func, options, values);return _extends({}, options, { data: data });} }, { key: '_addOptionsTo', value: function _addOptionsTo() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};return _extends({ to: this._address }, options);} }, { key: '___bindFunction__REACT_HOT_LOADER__', value: function ___bindFunction__REACT_HOT_LOADER__() {return this.___bindFunction__REACT_HOT_LOADER__.apply(this, arguments);} }, { key: '___bindFunction__REACT_HOT_LOADER__', value: function ___bindFunction__REACT_HOT_LOADER__(func) {var _this4 = this;func.contract = this;func.call = function () {var _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];var rawTokens = !!_options.rawTokens;var options = _extends({}, _options);delete options.rawTokens;var callParams = void 0;try {callParams = _this4._encodeOptions(func, _this4._addOptionsTo(options), values);} catch (error) {return Promise.reject(error);}return _this4._api.eth.call(callParams).then(function (encoded) {return func.decodeOutput(encoded);}).then(function (tokens) {if (rawTokens) {return tokens;}return tokens.map(function (token) {return token.value;});}).then(function (returns) {return returns.length === 1 ? returns[0] : returns;}).catch(function (error) {console.warn(func.name + '.call', values, error);throw error;});};if (!func.constant) {func.postTransaction = function (options) {var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];var _options = void 0;try {_options = _this4._encodeOptions(func, _this4._addOptionsTo(options), values);} catch (error) {return Promise.reject(error);}return _this4._api.parity.postTransaction(_options).catch(function (error) {console.warn(func.name + '.postTransaction', values, error);throw error;});};func.estimateGas = function (options) {var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];var _options = _this4._encodeOptions(func, _this4._addOptionsTo(options), values);return _this4._api.eth.estimateGas(_options).catch(function (error) {console.warn(func.name + '.estimateGas', values, error);throw error;});};}return func;} }, { key: '___bindEvent__REACT_HOT_LOADER__', value: function ___bindEvent__REACT_HOT_LOADER__() {return this.___bindEvent__REACT_HOT_LOADER__.apply(this, arguments);} }, { key: '___bindEvent__REACT_HOT_LOADER__', value: function ___bindEvent__REACT_HOT_LOADER__(event) {var _this5 = this;event.subscribe = function () {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var callback = arguments[1];var autoRemove = arguments[2];return _this5._subscribe(event, options, callback, autoRemove);};event.unsubscribe = function (subscriptionId) {return _this5.unsubscribe(subscriptionId);};event.getAllLogs = function () {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};return _this5.getAllLogs(event);};return event;} }, { key: 'getAllLogs', value: function getAllLogs(event, _options) {var _this6 = this; // Options as first parameter
      if (!_options && event && event.topics) {return this.getAllLogs(null, event);}var options = this._getFilterOptions(event, _options);options.fromBlock = 0;options.toBlock = 'latest';return this._api.eth.getLogs(options).then(function (logs) {return _this6.parseEventLogs(logs);});} }, { key: '_findEvent', value: function _findEvent() {var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var event = eventName ? this._events.find(function (evt) {return evt.name === eventName;}) : null;if (eventName && !event) {var events = this._events.map(function (evt) {return evt.name;}).join(', ');throw new Error(eventName + ' is not a valid eventName, subscribe using one of ' + events + ' (or null to include all)');}return event;} }, { key: '_getFilterOptions', value: function _getFilterOptions() {var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var optionTopics = _options.topics || [];var signature = event && event.signature || null; // If event provided, remove the potential event signature
      // as the first element of the topics
      var topics = signature ? [signature].concat(optionTopics.filter(function (t, idx) {return idx > 0 || t !== signature;})) : optionTopics;var options = Object.assign({}, _options, { address: this._address, topics: topics });return options;} }, { key: '_createEthFilter', value: function _createEthFilter() {var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var _options = arguments[1];var options = this._getFilterOptions(event, _options);return this._api.eth.newFilter(options);} }, { key: 'subscribe', value: function subscribe() {var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var callback = arguments[2];var autoRemove = arguments[3];try {var event = this._findEvent(eventName);return this._subscribe(event, options, callback, autoRemove);} catch (e) {return Promise.reject(e);}} }, { key: '_sendData', value: function _sendData(subscriptionId, error, logs) {var _subscriptions$subscr = this._subscriptions[subscriptionId],autoRemove = _subscriptions$subscr.autoRemove,callback = _subscriptions$subscr.callback;var result = true;try {result = callback(error, logs);} catch (error) {console.warn('_sendData', subscriptionId, error);}if (autoRemove && result && typeof result === 'boolean') {this.unsubscribe(subscriptionId);}} }, { key: '_subscribe', value: function _subscribe() {var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var _options = arguments[1];var _this7 = this;var callback = arguments[2];var autoRemove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;var subscriptionId = nextSubscriptionId++;var skipInitFetch = _options.skipInitFetch;delete _options['skipInitFetch'];return this._createEthFilter(event, _options).then(function (filterId) {_this7._subscriptions[subscriptionId] = { options: _options, autoRemove: autoRemove, callback: callback, filterId: filterId, id: subscriptionId };if (skipInitFetch) {_this7._subscribeToChanges();return subscriptionId;}return _this7._api.eth.getFilterLogs(filterId).then(function (logs) {_this7._sendData(subscriptionId, null, _this7.parseEventLogs(logs));_this7._subscribeToChanges();return subscriptionId;});}).catch(function (error) {console.warn('subscribe', event, _options, error);throw error;});} }, { key: 'unsubscribe', value: function unsubscribe(subscriptionId) {var _this8 = this;return this._api.eth.uninstallFilter(this._subscriptions[subscriptionId].filterId).catch(function (error) {console.error('unsubscribe', error);}).then(function () {delete _this8._subscriptions[subscriptionId];_this8._unsubscribeFromChanges();});} }, { key: '___subscribeToChanges__REACT_HOT_LOADER__', value: function ___subscribeToChanges__REACT_HOT_LOADER__() {return this.___subscribeToChanges__REACT_HOT_LOADER__.apply(this, arguments);} }, { key: '___subscribeToChanges__REACT_HOT_LOADER__', value: function ___subscribeToChanges__REACT_HOT_LOADER__() {var subscriptions = Object.values(this._subscriptions);var pendingSubscriptions = subscriptions.filter(function (s) {return s.options.toBlock && s.options.toBlock === 'pending';});var otherSubscriptions = subscriptions.filter(function (s) {return !(s.options.toBlock && s.options.toBlock === 'pending');});if (pendingSubscriptions.length > 0 && !this._subscribedToPendings) {this._subscribedToPendings = true;this._subscribeToPendings();}if (otherSubscriptions.length > 0 && !this._subscribedToBlock) {this._subscribedToBlock = true;this._subscribeToBlock();}} }, { key: '___unsubscribeFromChanges__REACT_HOT_LOADER__', value: function ___unsubscribeFromChanges__REACT_HOT_LOADER__() {return this.___unsubscribeFromChanges__REACT_HOT_LOADER__.apply(this, arguments);} }, { key: '___unsubscribeFromChanges__REACT_HOT_LOADER__', value: function ___unsubscribeFromChanges__REACT_HOT_LOADER__() {var subscriptions = Object.values(this._subscriptions);var pendingSubscriptions = subscriptions.filter(function (s) {return s.options.toBlock && s.options.toBlock === 'pending';});var otherSubscriptions = subscriptions.filter(function (s) {return !(s.options.toBlock && s.options.toBlock === 'pending');});if (pendingSubscriptions.length === 0 && this._subscribedToPendings) {this._subscribedToPendings = false;clearTimeout(this._pendingsSubscriptionId);}if (otherSubscriptions.length === 0 && this._subscribedToBlock) {this._subscribedToBlock = false;this._api.unsubscribe(this._blockSubscriptionId);}} }, { key: '___subscribeToBlock__REACT_HOT_LOADER__', value: function ___subscribeToBlock__REACT_HOT_LOADER__() {return this.___subscribeToBlock__REACT_HOT_LOADER__.apply(this, arguments);} }, { key: '___subscribeToBlock__REACT_HOT_LOADER__', value: function ___subscribeToBlock__REACT_HOT_LOADER__() {var _this9 = this;this._api.subscribe('eth_blockNumber', function (error) {if (error) {console.error('::_subscribeToBlock', error, error && error.stack);}var subscriptions = Object.values(_this9._subscriptions).filter(function (s) {return !(s.options.toBlock && s.options.toBlock === 'pending');});_this9._sendSubscriptionChanges(subscriptions);}).then(function (blockSubId) {_this9._blockSubscriptionId = blockSubId;}).catch(function (e) {console.error('::_subscribeToBlock', e, e && e.stack);});} }, { key: '___subscribeToPendings__REACT_HOT_LOADER__', value: function ___subscribeToPendings__REACT_HOT_LOADER__() {return this.___subscribeToPendings__REACT_HOT_LOADER__.apply(this, arguments);} }, { key: '___subscribeToPendings__REACT_HOT_LOADER__', value: function ___subscribeToPendings__REACT_HOT_LOADER__() {var _this10 = this;var subscriptions = Object.values(this._subscriptions).filter(function (s) {return s.options.toBlock && s.options.toBlock === 'pending';});var timeout = function timeout() {return setTimeout(function () {return _this10._subscribeToPendings();}, 1000);};this._sendSubscriptionChanges(subscriptions).then(function () {_this10._pendingsSubscriptionId = timeout();});} }, { key: '___sendSubscriptionChanges__REACT_HOT_LOADER__', value: function ___sendSubscriptionChanges__REACT_HOT_LOADER__() {return this.___sendSubscriptionChanges__REACT_HOT_LOADER__.apply(this, arguments);} }, { key: '___sendSubscriptionChanges__REACT_HOT_LOADER__', value: function ___sendSubscriptionChanges__REACT_HOT_LOADER__(subscriptions) {var _this11 = this;return Promise.all(subscriptions.map(function (subscription) {
        return _this11._api.eth.getFilterChanges(subscription.filterId);
      })).

      then(function (logsArray) {
        logsArray.forEach(function (logs, index) {
          if (!logs || !logs.length) {
            return;
          }

          try {
            _this11._sendData(subscriptions[index].id, null, _this11.parseEventLogs(logs));
          } catch (error) {
            console.error('_sendSubscriptionChanges', error);
          }
        });
      }).
      catch(function (error) {
        console.error('_sendSubscriptionChanges', error);
      });
    } }, { key: 'address', get: function get() {return this._address;} }, { key: 'constructors', get: function get() {return this._constructors;} }, { key: 'events', get: function get() {return this._events;} }, { key: 'functions', get: function get() {return this._functions;} }, { key: 'receipt', get: function get() {return this._receipt;} }, { key: 'instance', get: function get() {this._instance.address = this._address;return this._instance;} }, { key: 'api', get: function get() {return this._api;} }, { key: 'abi', get: function get() {return this._abi;} }]);return Contract;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(nextSubscriptionId, 'nextSubscriptionId', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/contract/contract.js');__REACT_HOT_LOADER__.register(Contract, 'Contract', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/contract/contract.js');}();;

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contract__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__contract__["a"]; });
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.
;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}}();;

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_input__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Db; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

var

Db = function () {
  function Db(transport) {_classCallCheck(this, Db);
    this._transport = transport;
  }_createClass(Db, [{ key: 'getHex', value: function getHex(

    dbName, keyName) {
      return this._transport.
      execute('db_getHex', dbName, keyName);
    } }, { key: 'getString', value: function getString(

    dbName, keyName) {
      return this._transport.
      execute('db_getString', dbName, keyName);
    } }, { key: 'putHex', value: function putHex(

    dbName, keyName, hexData) {
      return this._transport.
      execute('db_putHex', dbName, keyName, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["a" /* inHex */])(hexData));
    } }, { key: 'putString', value: function putString(

    dbName, keyName, stringData) {
      return this._transport.
      execute('db_putString', dbName, keyName, stringData);
    } }]);return Db;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(Db, 'Db', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/rpc/db/db.js');}();;

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__db__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__db__["a"]; });
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.
;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}}();;

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_input__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__format_output__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Eth; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.


var

Eth = function () {
  function Eth(transport) {_classCallCheck(this, Eth);
    this._transport = transport;
  }_createClass(Eth, [{ key: 'accounts', value: function accounts()

    {
      return this._transport.
      execute('eth_accounts').
      then(function (accounts) {return (accounts || []).map(__WEBPACK_IMPORTED_MODULE_1__format_output__["d" /* outAddress */]);});
    } }, { key: 'blockNumber', value: function blockNumber()

    {
      return this._transport.
      execute('eth_blockNumber').
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["e" /* outNumber */]);
    } }, { key: 'call', value: function call(

    options) {var blockNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'latest';
      return this._transport.
      execute('eth_call', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["c" /* inOptions */])(options), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["b" /* inBlockNumber */])(blockNumber));
    } }, { key: 'coinbase', value: function coinbase()

    {
      return this._transport.
      execute('eth_coinbase').
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["d" /* outAddress */]);
    } }, { key: 'compileLLL', value: function compileLLL(

    code) {
      return this._transport.
      execute('eth_compileLLL', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["g" /* inData */])(code));
    } }, { key: 'compileSerpent', value: function compileSerpent(

    code) {
      return this._transport.
      execute('eth_compileSerpent', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["g" /* inData */])(code));
    } }, { key: 'compileSolidity', value: function compileSolidity(

    code) {
      return this._transport.
      execute('eth_compileSolidity', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["g" /* inData */])(code));
    } }, { key: 'estimateGas', value: function estimateGas(

    options) {
      return this._transport.
      execute('eth_estimateGas', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["c" /* inOptions */])(options)).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["e" /* outNumber */]);
    } }, { key: 'fetchQueuedTransactions', value: function fetchQueuedTransactions()

    {
      return this._transport.
      execute('eth_fetchQueuedTransactions');
    } }, { key: 'flush', value: function flush()

    {
      return this._transport.
      execute('eth_flush');
    } }, { key: 'gasPrice', value: function gasPrice()

    {
      return this._transport.
      execute('eth_gasPrice').
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["e" /* outNumber */]);
    } }, { key: 'getBalance', value: function getBalance(

    address) {var blockNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'latest';
      return this._transport.
      execute('eth_getBalance', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["h" /* inAddress */])(address), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["b" /* inBlockNumber */])(blockNumber)).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["e" /* outNumber */]);
    } }, { key: 'getBlockByHash', value: function getBlockByHash(

    hash) {var full = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this._transport.
      execute('eth_getBlockByHash', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["a" /* inHex */])(hash), full).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["o" /* outBlock */]);
    } }, { key: 'getBlockByNumber', value: function getBlockByNumber()

    {var blockNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'latest';var full = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this._transport.
      execute('eth_getBlockByNumber', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["b" /* inBlockNumber */])(blockNumber), full).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["o" /* outBlock */]);
    } }, { key: 'getBlockTransactionCountByHash', value: function getBlockTransactionCountByHash(

    hash) {
      return this._transport.
      execute('eth_getBlockTransactionCountByHash', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["a" /* inHex */])(hash)).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["e" /* outNumber */]);
    } }, { key: 'getBlockTransactionCountByNumber', value: function getBlockTransactionCountByNumber()

    {var blockNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'latest';
      return this._transport.
      execute('eth_getBlockTransactionCountByNumber', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["b" /* inBlockNumber */])(blockNumber)).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["e" /* outNumber */]);
    } }, { key: 'getCode', value: function getCode(

    address) {var blockNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'latest';
      return this._transport.
      execute('eth_getCode', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["h" /* inAddress */])(address), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["b" /* inBlockNumber */])(blockNumber));
    } }, { key: 'getCompilers', value: function getCompilers()

    {
      return this._transport.
      execute('eth_getCompilers');
    } }, { key: 'getFilterChanges', value: function getFilterChanges(

    filterId) {
      return this._transport.
      execute('eth_getFilterChanges', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["f" /* inNumber16 */])(filterId)).
      then(function (logs) {return logs.map(__WEBPACK_IMPORTED_MODULE_1__format_output__["p" /* outLog */]);});
    } }, { key: 'getFilterChangesEx', value: function getFilterChangesEx(

    filterId) {
      return this._transport.
      execute('eth_getFilterChangesEx', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["f" /* inNumber16 */])(filterId));
    } }, { key: 'getFilterLogs', value: function getFilterLogs(

    filterId) {
      return this._transport.
      execute('eth_getFilterLogs', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["f" /* inNumber16 */])(filterId)).
      then(function (logs) {return logs.map(__WEBPACK_IMPORTED_MODULE_1__format_output__["p" /* outLog */]);});
    } }, { key: 'getFilterLogsEx', value: function getFilterLogsEx(

    filterId) {
      return this._transport.
      execute('eth_getFilterLogsEx', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["f" /* inNumber16 */])(filterId));
    } }, { key: 'getLogs', value: function getLogs(

    options) {
      return this._transport.
      execute('eth_getLogs', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["k" /* inFilter */])(options)).
      then(function (logs) {return logs.map(__WEBPACK_IMPORTED_MODULE_1__format_output__["p" /* outLog */]);});
    } }, { key: 'getLogsEx', value: function getLogsEx(

    options) {
      return this._transport.
      execute('eth_getLogsEx', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["k" /* inFilter */])(options));
    } }, { key: 'getStorageAt', value: function getStorageAt(

    address) {var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var blockNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'latest';
      return this._transport.
      execute('eth_getStorageAt', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["h" /* inAddress */])(address), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["f" /* inNumber16 */])(index), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["b" /* inBlockNumber */])(blockNumber));
    } }, { key: 'getTransactionByBlockHashAndIndex', value: function getTransactionByBlockHashAndIndex(

    hash) {var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this._transport.
      execute('eth_getTransactionByBlockHashAndIndex', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["a" /* inHex */])(hash), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["f" /* inNumber16 */])(index)).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["m" /* outTransaction */]);
    } }, { key: 'getTransactionByBlockNumberAndIndex', value: function getTransactionByBlockNumberAndIndex()

    {var blockNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'latest';var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this._transport.
      execute('eth_getTransactionByBlockNumberAndIndex', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["b" /* inBlockNumber */])(blockNumber), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["f" /* inNumber16 */])(index)).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["m" /* outTransaction */]);
    } }, { key: 'getTransactionByHash', value: function getTransactionByHash(

    hash) {
      return this._transport.
      execute('eth_getTransactionByHash', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["a" /* inHex */])(hash)).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["m" /* outTransaction */]);
    } }, { key: 'getTransactionCount', value: function getTransactionCount(

    address) {var blockNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'latest';
      return this._transport.
      execute('eth_getTransactionCount', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["h" /* inAddress */])(address), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["b" /* inBlockNumber */])(blockNumber)).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["e" /* outNumber */]);
    } }, { key: 'getTransactionReceipt', value: function getTransactionReceipt(

    txhash) {
      return this._transport.
      execute('eth_getTransactionReceipt', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["a" /* inHex */])(txhash)).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["q" /* outReceipt */]);
    } }, { key: 'getUncleByBlockHashAndIndex', value: function getUncleByBlockHashAndIndex(

    hash) {var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this._transport.
      execute('eth_getUncleByBlockHashAndIndex', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["a" /* inHex */])(hash), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["f" /* inNumber16 */])(index));
    } }, { key: 'getUncleByBlockNumberAndIndex', value: function getUncleByBlockNumberAndIndex()

    {var blockNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'latest';var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this._transport.
      execute('eth_getUncleByBlockNumberAndIndex', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["b" /* inBlockNumber */])(blockNumber), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["f" /* inNumber16 */])(index));
    } }, { key: 'getUncleCountByBlockHash', value: function getUncleCountByBlockHash(

    hash) {
      return this._transport.
      execute('eth_getUncleCountByBlockHash', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["a" /* inHex */])(hash)).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["e" /* outNumber */]);
    } }, { key: 'getUncleCountByBlockNumber', value: function getUncleCountByBlockNumber()

    {var blockNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'latest';
      return this._transport.
      execute('eth_getUncleCountByBlockNumber', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["b" /* inBlockNumber */])(blockNumber)).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["e" /* outNumber */]);
    } }, { key: 'getWork', value: function getWork()

    {
      return this._transport.
      execute('eth_getWork');
    } }, { key: 'hashrate', value: function hashrate()

    {
      return this._transport.
      execute('eth_hashrate').
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["e" /* outNumber */]);
    } }, { key: 'inspectTransaction', value: function inspectTransaction()

    {
      return this._transport.
      execute('eth_inspectTransaction');
    } }, { key: 'mining', value: function mining()

    {
      return this._transport.
      execute('eth_mining');
    } }, { key: 'newBlockFilter', value: function newBlockFilter()

    {
      return this._transport.
      execute('eth_newBlockFilter');
    } }, { key: 'newFilter', value: function newFilter(

    options) {
      return this._transport.
      execute('eth_newFilter', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["k" /* inFilter */])(options));
    } }, { key: 'newFilterEx', value: function newFilterEx(

    options) {
      return this._transport.
      execute('eth_newFilterEx', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["k" /* inFilter */])(options));
    } }, { key: 'newPendingTransactionFilter', value: function newPendingTransactionFilter()

    {
      return this._transport.
      execute('eth_newPendingTransactionFilter');
    } }, { key: 'notePassword', value: function notePassword()

    {
      return this._transport.
      execute('eth_notePassword');
    } }, { key: 'pendingTransactions', value: function pendingTransactions()

    {
      return this._transport.
      execute('eth_pendingTransactions');
    } }, { key: 'protocolVersion', value: function protocolVersion()

    {
      return this._transport.
      execute('eth_protocolVersion');
    } }, { key: 'register', value: function register()

    {
      return this._transport.
      execute('eth_register');
    } }, { key: 'sendRawTransaction', value: function sendRawTransaction(

    data) {
      return this._transport.
      execute('eth_sendRawTransaction', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["g" /* inData */])(data));
    } }, { key: 'sendTransaction', value: function sendTransaction(

    options) {
      return this._transport.
      execute('eth_sendTransaction', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["c" /* inOptions */])(options));
    } }, { key: 'sign', value: function sign(

    address, hash) {
      return this._transport.
      execute('eth_sign', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["h" /* inAddress */])(address), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["l" /* inHash */])(hash));
    } }, { key: 'signTransaction', value: function signTransaction()

    {
      return this._transport.
      execute('eth_signTransaction');
    } }, { key: 'submitHashrate', value: function submitHashrate(

    hashrate, clientId) {
      return this._transport.
      execute('eth_submitHashrate', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["f" /* inNumber16 */])(hashrate), clientId);
    } }, { key: 'submitWork', value: function submitWork(

    nonce, powHash, mixDigest) {
      return this._transport.
      execute('eth_submitWork', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["f" /* inNumber16 */])(nonce), powHash, mixDigest);
    } }, { key: 'syncing', value: function syncing()

    {
      return this._transport.
      execute('eth_syncing').
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["r" /* outSyncing */]);
    } }, { key: 'uninstallFilter', value: function uninstallFilter(

    filterId) {
      return this._transport.
      execute('eth_uninstallFilter', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["a" /* inHex */])(filterId));
    } }, { key: 'unregister', value: function unregister()

    {
      return this._transport.
      execute('eth_unregister');
    } }]);return Eth;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(Eth, 'Eth', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/rpc/eth/eth.js');}();;

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eth__ = __webpack_require__(47);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__eth__["a"]; });
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.
;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}}();;

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__db__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__db__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eth__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__eth__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parity__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__parity__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__net__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__net__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__personal__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__personal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shh__ = __webpack_require__(56);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__shh__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signer__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__signer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trace__ = __webpack_require__(60);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__trace__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__web3__ = __webpack_require__(62);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__web3__["a"]; });
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.
;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}}();;

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__net__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__net__["a"]; });
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.
;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}}();;

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_output__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Net; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

var

Net = function () {
  function Net(transport) {_classCallCheck(this, Net);
    this._transport = transport;
  }_createClass(Net, [{ key: 'listening', value: function listening()

    {
      return this._transport.
      execute('net_listening');
    } }, { key: 'peerCount', value: function peerCount()

    {
      return this._transport.
      execute('net_peerCount').
      then(__WEBPACK_IMPORTED_MODULE_0__format_output__["e" /* outNumber */]);
    } }, { key: 'version', value: function version()

    {
      return this._transport.
      execute('net_version');
    } }]);return Net;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(Net, 'Net', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/rpc/net/net.js');}();;

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parity__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__parity__["a"]; });
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.
;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}}();;

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_input__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__format_output__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parity; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.


var

Parity = function () {
  function Parity(transport) {_classCallCheck(this, Parity);
    this._transport = transport;
  }_createClass(Parity, [{ key: 'acceptNonReservedPeers', value: function acceptNonReservedPeers()

    {
      return this._transport.
      execute('parity_acceptNonReservedPeers');
    } }, { key: 'accountsInfo', value: function accountsInfo()

    {
      return this._transport.
      execute('parity_accountsInfo').
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["f" /* outAccountInfo */]);
    } }, { key: 'allAccountsInfo', value: function allAccountsInfo()

    {
      return this._transport.
      execute('parity_allAccountsInfo').
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["f" /* outAccountInfo */]);
    } }, { key: 'addReservedPeer', value: function addReservedPeer(

    encode) {
      return this._transport.
      execute('parity_addReservedPeer', encode);
    } }, { key: 'chainStatus', value: function chainStatus()

    {
      return this._transport.
      execute('parity_chainStatus').
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["g" /* outChainStatus */]);
    } }, { key: 'changePassword', value: function changePassword(

    account, password, newPassword) {
      return this._transport.
      execute('parity_changePassword', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["h" /* inAddress */])(account), password, newPassword);
    } }, { key: 'changeVault', value: function changeVault(

    account, vaultName) {
      return this._transport.
      execute('parity_changeVault', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["h" /* inAddress */])(account), vaultName);
    } }, { key: 'changeVaultPassword', value: function changeVaultPassword(

    vaultName, password) {
      return this._transport.
      execute('parity_changeVaultPassword', vaultName, password);
    } }, { key: 'checkRequest', value: function checkRequest(

    requestId) {
      return this._transport.
      execute('parity_checkRequest', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["f" /* inNumber16 */])(requestId));
    } }, { key: 'closeVault', value: function closeVault(

    vaultName) {
      return this._transport.
      execute('parity_closeVault', vaultName);
    } }, { key: 'consensusCapability', value: function consensusCapability()

    {
      return this._transport.
      execute('parity_consensusCapability');
    } }, { key: 'dappsPort', value: function dappsPort()

    {
      return this._transport.
      execute('parity_dappsPort').
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["e" /* outNumber */]);
    } }, { key: 'dappsInterface', value: function dappsInterface()

    {
      return this._transport.
      execute('parity_dappsInterface');
    } }, { key: 'decryptMessage', value: function decryptMessage(

    address, data) {
      return this._transport.
      execute('parity_decryptMessage', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["h" /* inAddress */])(address), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["a" /* inHex */])(data));
    } }, { key: 'defaultAccount', value: function defaultAccount()

    {
      return this._transport.
      execute('parity_defaultAccount').
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["d" /* outAddress */]);
    } }, { key: 'defaultExtraData', value: function defaultExtraData()

    {
      return this._transport.
      execute('parity_defaultExtraData');
    } }, { key: 'devLogs', value: function devLogs()

    {
      return this._transport.
      execute('parity_devLogs');
    } }, { key: 'devLogsLevels', value: function devLogsLevels()

    {
      return this._transport.
      execute('parity_devLogsLevels');
    } }, { key: 'dropNonReservedPeers', value: function dropNonReservedPeers()

    {
      return this._transport.
      execute('parity_dropNonReservedPeers');
    } }, { key: 'enode', value: function enode()

    {
      return this._transport.
      execute('parity_enode');
    } }, { key: 'encryptMessage', value: function encryptMessage(

    pubkey, data) {
      return this._transport.
      execute('parity_encryptMessage', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["a" /* inHex */])(pubkey), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["a" /* inHex */])(data));
    } }, { key: 'executeUpgrade', value: function executeUpgrade()

    {
      return this._transport.
      execute('parity_executeUpgrade');
    } }, { key: 'extraData', value: function extraData()

    {
      return this._transport.
      execute('parity_extraData');
    } }, { key: 'futureTransactions', value: function futureTransactions()

    {
      return this._transport.
      execute('parity_futureTransactions');
    } }, { key: 'gasCeilTarget', value: function gasCeilTarget()

    {
      return this._transport.
      execute('parity_gasCeilTarget').
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["e" /* outNumber */]);
    } }, { key: 'gasFloorTarget', value: function gasFloorTarget()

    {
      return this._transport.
      execute('parity_gasFloorTarget').
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["e" /* outNumber */]);
    } }, { key: 'gasPriceHistogram', value: function gasPriceHistogram()

    {
      return this._transport.
      execute('parity_gasPriceHistogram').
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["h" /* outHistogram */]);
    } }, { key: 'generateSecretPhrase', value: function generateSecretPhrase()

    {
      return this._transport.
      execute('parity_generateSecretPhrase');
    } }, { key: 'getDappAddresses', value: function getDappAddresses(

    dappId) {
      return this._transport.
      execute('parity_getDappAddresses', dappId).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["i" /* outAddresses */]);
    } }, { key: 'getDappDefaultAddress', value: function getDappDefaultAddress(

    dappId) {
      return this._transport.
      execute('parity_getDappDefaultAddress', dappId).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["d" /* outAddress */]);
    } }, { key: 'getNewDappsAddresses', value: function getNewDappsAddresses()

    {
      return this._transport.
      execute('parity_getNewDappsAddresses').
      then(function (addresses) {return addresses ? addresses.map(__WEBPACK_IMPORTED_MODULE_1__format_output__["d" /* outAddress */]) : null;});
    } }, { key: 'getNewDappsDefaultAddress', value: function getNewDappsDefaultAddress()

    {
      return this._transport.
      execute('parity_getNewDappsDefaultAddress').
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["d" /* outAddress */]);
    } }, { key: 'getVaultMeta', value: function getVaultMeta(

    vaultName) {
      return this._transport.
      execute('parity_getVaultMeta', vaultName).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["j" /* outVaultMeta */]);
    } }, { key: 'hardwareAccountsInfo', value: function hardwareAccountsInfo()

    {
      return this._transport.
      execute('parity_hardwareAccountsInfo').
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["k" /* outHwAccountInfo */]);
    } }, { key: 'hashContent', value: function hashContent(

    url) {
      return this._transport.
      execute('parity_hashContent', url);
    } }, { key: 'importGethAccounts', value: function importGethAccounts(

    accounts) {
      return this._transport.
      execute('parity_importGethAccounts', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["j" /* inAddresses */])(accounts)).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["i" /* outAddresses */]);
    } }, { key: 'killAccount', value: function killAccount(

    account, password) {
      return this._transport.
      execute('parity_killAccount', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["h" /* inAddress */])(account), password);
    } }, { key: 'listAccounts', value: function listAccounts(

    count) {var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;var blockNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'latest';
      return this._transport.
      execute('parity_listAccounts', count, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["h" /* inAddress */])(offset), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["b" /* inBlockNumber */])(blockNumber)).
      then(function (accounts) {return (accounts || []).map(__WEBPACK_IMPORTED_MODULE_1__format_output__["d" /* outAddress */]);});
    } }, { key: 'listOpenedVaults', value: function listOpenedVaults()

    {
      return this._transport.
      execute('parity_listOpenedVaults');
    } }, { key: 'listVaults', value: function listVaults()

    {
      return this._transport.
      execute('parity_listVaults');
    } }, { key: 'listRecentDapps', value: function listRecentDapps()

    {
      return this._transport.
      execute('parity_listRecentDapps').
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["l" /* outRecentDapps */]);
    } }, { key: 'listStorageKeys', value: function listStorageKeys(

    address, count) {var hash = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;var blockNumber = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'latest';
      return this._transport.
      execute('parity_listStorageKeys', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["h" /* inAddress */])(address), count, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["a" /* inHex */])(hash), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["b" /* inBlockNumber */])(blockNumber));
    } }, { key: 'removeAddress', value: function removeAddress(

    address) {
      return this._transport.
      execute('parity_removeAddress', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["h" /* inAddress */])(address));
    } }, { key: 'listGethAccounts', value: function listGethAccounts()

    {
      return this._transport.
      execute('parity_listGethAccounts').
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["i" /* outAddresses */]);
    } }, { key: 'localTransactions', value: function localTransactions()

    {
      return this._transport.
      execute('parity_localTransactions').
      then(function (transactions) {
        Object.values(transactions).
        filter(function (tx) {return tx.transaction;}).
        map(function (tx) {
          tx.transaction = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__format_output__["m" /* outTransaction */])(tx.transaction);
        });
        return transactions;
      });
    } }, { key: 'minGasPrice', value: function minGasPrice()

    {
      return this._transport.
      execute('parity_minGasPrice').
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["e" /* outNumber */]);
    } }, { key: 'mode', value: function mode()

    {
      return this._transport.
      execute('parity_mode');
    } }, { key: 'netChain', value: function netChain()

    {
      return this._transport.
      execute('parity_netChain');
    } }, { key: 'netPeers', value: function netPeers()

    {
      return this._transport.
      execute('parity_netPeers').
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["n" /* outPeers */]);
    } }, { key: 'netMaxPeers', value: function netMaxPeers()

    {
      return this._transport.
      execute('parity_netMaxPeers').
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["e" /* outNumber */]);
    } }, { key: 'netPort', value: function netPort()

    {
      return this._transport.
      execute('parity_netPort').
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["e" /* outNumber */]);
    } }, { key: 'newAccountFromPhrase', value: function newAccountFromPhrase(

    phrase, password) {
      return this._transport.
      execute('parity_newAccountFromPhrase', phrase, password).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["d" /* outAddress */]);
    } }, { key: 'newAccountFromSecret', value: function newAccountFromSecret(

    secret, password) {
      return this._transport.
      execute('parity_newAccountFromSecret', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["a" /* inHex */])(secret), password).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["d" /* outAddress */]);
    } }, { key: 'newAccountFromWallet', value: function newAccountFromWallet(

    json, password) {
      return this._transport.
      execute('parity_newAccountFromWallet', json, password).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["d" /* outAddress */]);
    } }, { key: 'newVault', value: function newVault(

    vaultName, password) {
      return this._transport.
      execute('parity_newVault', vaultName, password);
    } }, { key: 'nextNonce', value: function nextNonce(

    account) {
      return this._transport.
      execute('parity_nextNonce', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["h" /* inAddress */])(account)).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["e" /* outNumber */]);
    } }, { key: 'nodeName', value: function nodeName()

    {
      return this._transport.
      execute('parity_nodeName');
    } }, { key: 'openVault', value: function openVault(

    vaultName, password) {
      return this._transport.
      execute('parity_openVault', vaultName, password);
    } }, { key: 'pendingTransactions', value: function pendingTransactions()

    {
      return this._transport.
      execute('parity_pendingTransactions').
      then(function (data) {return data.map(__WEBPACK_IMPORTED_MODULE_1__format_output__["m" /* outTransaction */]);});
    } }, { key: 'pendingTransactionsStats', value: function pendingTransactionsStats()

    {
      return this._transport.
      execute('parity_pendingTransactionsStats');
    } }, { key: 'phraseToAddress', value: function phraseToAddress(

    phrase) {
      return this._transport.
      execute('parity_phraseToAddress', phrase).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["d" /* outAddress */]);
    } }, { key: 'postSign', value: function postSign(

    address, hash) {
      return this._transport.
      execute('parity_postSign', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["h" /* inAddress */])(address), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["a" /* inHex */])(hash));
    } }, { key: 'postTransaction', value: function postTransaction(

    options) {
      return this._transport.
      execute('parity_postTransaction', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["c" /* inOptions */])(options));
    } }, { key: 'registryAddress', value: function registryAddress()

    {
      return this._transport.
      execute('parity_registryAddress').
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["d" /* outAddress */]);
    } }, { key: 'releasesInfo', value: function releasesInfo()

    {
      return this._transport.
      execute('parity_releasesInfo');
    } }, { key: 'removeReservedPeer', value: function removeReservedPeer(

    encode) {
      return this._transport.
      execute('parity_removeReservedPeer', encode);
    } }, { key: 'rpcSettings', value: function rpcSettings()

    {
      return this._transport.
      execute('parity_rpcSettings');
    } }, { key: 'setAccountName', value: function setAccountName(

    address, name) {
      return this._transport.
      execute('parity_setAccountName', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["h" /* inAddress */])(address), name);
    } }, { key: 'setAccountMeta', value: function setAccountMeta(

    address, meta) {
      return this._transport.
      execute('parity_setAccountMeta', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["h" /* inAddress */])(address), JSON.stringify(meta));
    } }, { key: 'setAuthor', value: function setAuthor(

    address) {
      return this._transport.
      execute('parity_setAuthor', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["h" /* inAddress */])(address));
    } }, { key: 'setDappAddresses', value: function setDappAddresses(

    dappId, addresses) {
      return this._transport.
      execute('parity_setDappAddresses', dappId, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["j" /* inAddresses */])(addresses));
    } }, { key: 'setDappDefaultAddress', value: function setDappDefaultAddress(

    dappId, address) {
      return this._transport.
      execute('parity_setDappDefaultAddress', dappId, address ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["h" /* inAddress */])(address) : null);
    } }, { key: 'setEngineSigner', value: function setEngineSigner(

    address, password) {
      return this._transport.
      execute('parity_setEngineSigner', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["h" /* inAddress */])(address), password);
    } }, { key: 'setExtraData', value: function setExtraData(

    data) {
      return this._transport.
      execute('parity_setExtraData', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["g" /* inData */])(data));
    } }, { key: 'setGasCeilTarget', value: function setGasCeilTarget(

    quantity) {
      return this._transport.
      execute('parity_setGasCeilTarget', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["f" /* inNumber16 */])(quantity));
    } }, { key: 'setGasFloorTarget', value: function setGasFloorTarget(

    quantity) {
      return this._transport.
      execute('parity_setGasFloorTarget', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["f" /* inNumber16 */])(quantity));
    } }, { key: 'setMaxTransactionGas', value: function setMaxTransactionGas(

    quantity) {
      return this._transport.
      execute('parity_setMaxTransactionGas', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["f" /* inNumber16 */])(quantity));
    } }, { key: 'setMinGasPrice', value: function setMinGasPrice(

    quantity) {
      return this._transport.
      execute('parity_setMinGasPrice', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["f" /* inNumber16 */])(quantity));
    } }, { key: 'setMode', value: function setMode(

    mode) {
      return this._transport.
      execute('parity_setMode', mode);
    } }, { key: 'setNewDappsAddresses', value: function setNewDappsAddresses(

    addresses) {
      return this._transport.
      execute('parity_setNewDappsAddresses', addresses ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["j" /* inAddresses */])(addresses) : null);
    } }, { key: 'setNewDappsDefaultAddress', value: function setNewDappsDefaultAddress(

    address) {
      return this._transport.
      execute('parity_setNewDappsDefaultAddress', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["h" /* inAddress */])(address));
    } }, { key: 'setTransactionsLimit', value: function setTransactionsLimit(

    quantity) {
      return this._transport.
      execute('parity_setTransactionsLimit', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["f" /* inNumber16 */])(quantity));
    } }, { key: 'setVaultMeta', value: function setVaultMeta(

    vaultName, meta) {
      return this._transport.
      execute('parity_setVaultMeta', vaultName, JSON.stringify(meta));
    } }, { key: 'signerPort', value: function signerPort()

    {
      return this._transport.
      execute('parity_signerPort').
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["e" /* outNumber */]);
    } }, { key: 'testPassword', value: function testPassword(

    account, password) {
      return this._transport.
      execute('parity_testPassword', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["h" /* inAddress */])(account), password);
    } }, { key: 'transactionsLimit', value: function transactionsLimit()

    {
      return this._transport.
      execute('parity_transactionsLimit').
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["e" /* outNumber */]);
    } }, { key: 'unsignedTransactionsCount', value: function unsignedTransactionsCount()

    {
      return this._transport.
      execute('parity_unsignedTransactionsCount').
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["e" /* outNumber */]);
    } }, { key: 'upgradeReady', value: function upgradeReady()

    {
      return this._transport.
      execute('parity_upgradeReady');
    } }, { key: 'versionInfo', value: function versionInfo()

    {
      return this._transport.
      execute('parity_versionInfo');
    } }]);return Parity;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(Parity, 'Parity', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/rpc/parity/parity.js');}();;

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__personal__ = __webpack_require__(55);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__personal__["a"]; });
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.
;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}}();;

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_input__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__format_output__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Personal; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.


var

Personal = function () {
  function Personal(transport) {_classCallCheck(this, Personal);
    this._transport = transport;
  }_createClass(Personal, [{ key: 'listAccounts', value: function listAccounts()

    {
      return this._transport.
      execute('personal_listAccounts').
      then(function (accounts) {return (accounts || []).map(__WEBPACK_IMPORTED_MODULE_1__format_output__["d" /* outAddress */]);});
    } }, { key: 'newAccount', value: function newAccount(

    password) {
      return this._transport.
      execute('personal_newAccount', password).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["d" /* outAddress */]);
    } }, { key: 'sendTransaction', value: function sendTransaction(

    options, password) {
      return this._transport.
      execute('personal_sendTransaction', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["c" /* inOptions */])(options), password);
    } }, { key: 'unlockAccount', value: function unlockAccount(

    account, password) {var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      return this._transport.
      execute('personal_unlockAccount', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["h" /* inAddress */])(account), password, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["i" /* inNumber10 */])(duration));
    } }]);return Personal;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(Personal, 'Personal', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/rpc/personal/personal.js');}();;

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shh__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__shh__["a"]; });
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.
;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}}();;

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Personal; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.
var
Personal = function () {
  function Personal(transport) {_classCallCheck(this, Personal);
    this._transport = transport;
  }_createClass(Personal, [{ key: 'addToGroup', value: function addToGroup(

    identity) {
      return this._transport.
      execute('shh_addToGroup', identity);
    } }, { key: 'getFilterChanges', value: function getFilterChanges(

    filterId) {
      return this._transport.
      execute('shh_getFilterChanges', filterId);
    } }, { key: 'getMessages', value: function getMessages(

    filterId) {
      return this._transport.
      execute('shh_getMessages', filterId);
    } }, { key: 'hasIdentity', value: function hasIdentity(

    identity) {
      return this._transport.
      execute('shh_hasIdentity', identity);
    } }, { key: 'newFilter', value: function newFilter(

    options) {
      return this._transport.
      execute('shh_newFilter', options);
    } }, { key: 'newGroup', value: function newGroup()

    {
      return this._transport.
      execute('shh_newGroup');
    } }, { key: 'newIdentity', value: function newIdentity()

    {
      return this._transport.
      execute('shh_newIdentity');
    } }, { key: 'post', value: function post(

    options) {
      return this._transport.
      execute('shh_post', options);
    } }, { key: 'uninstallFilter', value: function uninstallFilter(

    filterId) {
      return this._transport.
      execute('shh_uninstallFilter', filterId);
    } }, { key: 'version', value: function version()

    {
      return this._transport.
      execute('shh_version');
    } }]);return Personal;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(Personal, 'Personal', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/rpc/shh/shh.js');}();;

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signer__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__signer__["a"]; });
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.
;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}}();;

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_input__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__format_output__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signer; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.


var

Signer = function () {
  function Signer(transport) {_classCallCheck(this, Signer);
    this._transport = transport;
  }_createClass(Signer, [{ key: 'confirmRequest', value: function confirmRequest(

    requestId, options, password) {
      return this._transport.
      execute('signer_confirmRequest', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["f" /* inNumber16 */])(requestId), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["c" /* inOptions */])(options), password);
    } }, { key: 'confirmRequestRaw', value: function confirmRequestRaw(

    requestId, data) {
      return this._transport.
      execute('signer_confirmRequestRaw', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["f" /* inNumber16 */])(requestId), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["g" /* inData */])(data));
    } }, { key: 'confirmRequestWithToken', value: function confirmRequestWithToken(

    requestId, options, password) {
      return this._transport.
      execute('signer_confirmRequestWithToken', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["f" /* inNumber16 */])(requestId), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["c" /* inOptions */])(options), password);
    } }, { key: 'generateAuthorizationToken', value: function generateAuthorizationToken()

    {
      return this._transport.
      execute('signer_generateAuthorizationToken');
    } }, { key: 'generateWebProxyAccessToken', value: function generateWebProxyAccessToken()

    {
      return this._transport.
      execute('signer_generateWebProxyAccessToken');
    } }, { key: 'rejectRequest', value: function rejectRequest(

    requestId) {
      return this._transport.
      execute('signer_rejectRequest', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["f" /* inNumber16 */])(requestId));
    } }, { key: 'requestsToConfirm', value: function requestsToConfirm()

    {
      return this._transport.
      execute('signer_requestsToConfirm').
      then(function (requests) {return (requests || []).map(__WEBPACK_IMPORTED_MODULE_1__format_output__["c" /* outSignerRequest */]);});
    } }, { key: 'signerEnabled', value: function signerEnabled()

    {
      return this._transport.
      execute('signer_signerEnabled');
    } }]);return Signer;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(Signer, 'Signer', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/rpc/signer/signer.js');}();;

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trace__ = __webpack_require__(61);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__trace__["a"]; });
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.
;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}}();;

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_input__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__format_output__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trace; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.


var

Trace = function () {
  function Trace(transport) {_classCallCheck(this, Trace);
    this._transport = transport;
  }_createClass(Trace, [{ key: 'block', value: function block()

    {var blockNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'latest';
      return this._transport.
      execute('trace_block', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["b" /* inBlockNumber */])(blockNumber)).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["a" /* outTraces */]);
    } }, { key: 'call', value: function call(

    options) {var blockNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'latest';var whatTrace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['trace'];
      return this._transport.
      execute('trace_call', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["c" /* inOptions */])(options), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["b" /* inBlockNumber */])(blockNumber), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["d" /* inTraceType */])(whatTrace)).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["b" /* outTraceReplay */]);
    } }, { key: 'filter', value: function filter(

    filterObj) {
      return this._transport.
      execute('trace_filter', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["e" /* inTraceFilter */])(filterObj)).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["a" /* outTraces */]);
    } }, { key: 'get', value: function get(

    txHash, position) {
      return this._transport.
      execute('trace_get', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["a" /* inHex */])(txHash), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["f" /* inNumber16 */])(position)).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["a" /* outTraces */]);
    } }, { key: 'rawTransaction', value: function rawTransaction(

    data) {var whatTrace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['trace'];
      return this._transport.
      execute('trace_rawTransaction', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["g" /* inData */])(data), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["d" /* inTraceType */])(whatTrace)).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["b" /* outTraceReplay */]);
    } }, { key: 'replayTransaction', value: function replayTransaction(

    txHash) {var whatTrace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['trace'];
      return this._transport.
      execute('trace_replayTransaction', txHash, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["d" /* inTraceType */])(whatTrace)).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["b" /* outTraceReplay */]);
    } }, { key: 'transaction', value: function transaction(

    txHash) {
      return this._transport.
      execute('trace_transaction', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["a" /* inHex */])(txHash)).
      then(__WEBPACK_IMPORTED_MODULE_1__format_output__["a" /* outTraces */]);
    } }]);return Trace;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(Trace, 'Trace', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/rpc/trace/trace.js');}();;

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__web3__ = __webpack_require__(63);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__web3__["a"]; });
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.
;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}}();;

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_input__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Web3; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

var

Web3 = function () {
  function Web3(transport) {_classCallCheck(this, Web3);
    this._transport = transport;
  }_createClass(Web3, [{ key: 'clientVersion', value: function clientVersion()

    {
      return this._transport.
      execute('web3_clientVersion');
    } }, { key: 'sha3', value: function sha3(

    hexStr) {
      return this._transport.
      execute('web3_sha3', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_input__["a" /* inHex */])(hexStr));
    } }]);return Web3;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(Web3, 'Web3', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/rpc/web3/web3.js');}();;

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bignumber_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bignumber_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Eth; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

var

Eth = function () {
  function Eth(updateSubscriptions, api) {var _this = this;_classCallCheck(this, Eth);this.


















    _blockNumber = function () {return _this.___blockNumber__REACT_HOT_LOADER__.apply(_this, arguments);};this._api = api;this._updateSubscriptions = updateSubscriptions;this._started = false;this._lastBlock = new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(-1);this._pollTimerId = null;}_createClass(Eth, [{ key: 'start', value: function start() {this._started = true;return this._blockNumber();} }, { key: '___blockNumber__REACT_HOT_LOADER__', value: function ___blockNumber__REACT_HOT_LOADER__() {return this.___blockNumber__REACT_HOT_LOADER__.apply(this, arguments);} }, { key: '___blockNumber__REACT_HOT_LOADER__', value: function ___blockNumber__REACT_HOT_LOADER__() {var _this2 = this;
      var nextTimeout = function nextTimeout() {var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
        _this2._pollTimerId = setTimeout(function () {
          _this2._blockNumber();
        }, timeout);
      };

      if (!this._api.transport.isConnected) {
        nextTimeout(500);
        return;
      }

      return this._api.eth.
      blockNumber().
      then(function (blockNumber) {
        if (!blockNumber.eq(_this2._lastBlock)) {
          _this2._lastBlock = blockNumber;
          _this2._updateSubscriptions('eth_blockNumber', null, blockNumber);
        }

        nextTimeout();
      }).
      catch(function () {return nextTimeout();});
    } }, { key: 'isStarted', get: function get() {return this._started;} }]);return Eth;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(Eth, 'Eth', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/subscriptions/eth.js');}();;

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logging__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personal__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signer__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Manager; });
/* unused harmony export events */
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.








var events = {
  'logging': { module: 'logging' },
  'eth_blockNumber': { module: 'eth' },
  'parity_accountsInfo': { module: 'personal' },
  'parity_allAccountsInfo': { module: 'personal' },
  'parity_defaultAccount': { module: 'personal' },
  'eth_accounts': { module: 'personal' },
  'signer_requestsToConfirm': { module: 'signer' } };var


Manager = function () {
  function Manager(api) {var _this = this;_classCallCheck(this, Manager);this.





















































































    _updateSubscriptions = function () {return _this.___updateSubscriptions__REACT_HOT_LOADER__.apply(_this, arguments);};this._api = api;this.subscriptions = [];this.values = {};Object.keys(events).forEach(function (subscriptionName) {_this.values[subscriptionName] = { error: null, data: null };});this._logging = new __WEBPACK_IMPORTED_MODULE_2__logging__["a" /* default */](this._updateSubscriptions);this._eth = new __WEBPACK_IMPORTED_MODULE_1__eth__["a" /* default */](this._updateSubscriptions, api);this._personal = new __WEBPACK_IMPORTED_MODULE_3__personal__["a" /* default */](this._updateSubscriptions, api, this);this._signer = new __WEBPACK_IMPORTED_MODULE_4__signer__["a" /* default */](this._updateSubscriptions, api, this);}_createClass(Manager, [{ key: '_validateType', value: function _validateType(subscriptionName) {var subscription = events[subscriptionName];if (!subscription) {return new Error(subscriptionName + ' is not a valid interface, subscribe using one of ' + Object.keys(events).join(', '));}return subscription;} }, { key: 'subscribe', value: function subscribe(subscriptionName, callback) {var _this2 = this;var autoRemove = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;return new Promise(function (resolve, reject) {var subscription = _this2._validateType(subscriptionName);if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_types__["b" /* isError */])(subscription)) {reject(subscription);return;}var subscriptionId = _this2.subscriptions.length;var _values$subscriptionN = _this2.values[subscriptionName],error = _values$subscriptionN.error,data = _values$subscriptionN.data;var engine = _this2['_' + subscription.module];_this2.subscriptions[subscriptionId] = { name: subscriptionName, id: subscriptionId, autoRemove: autoRemove, callback: callback };if (!engine.isStarted) {engine.start();} else {_this2._sendData(subscriptionId, error, data);}resolve(subscriptionId);});} }, { key: 'unsubscribe', value: function unsubscribe(subscriptionId) {var _this3 = this;return new Promise(function (resolve, reject) {if (!_this3.subscriptions[subscriptionId]) {reject(new Error('Cannot find subscription ' + subscriptionId));return;}delete _this3.subscriptions[subscriptionId];resolve();});} }, { key: '_sendData', value: function _sendData(subscriptionId, error, data) {var _subscriptions$subscr = this.subscriptions[subscriptionId],autoRemove = _subscriptions$subscr.autoRemove,callback = _subscriptions$subscr.callback;var result = true;try {result = callback(error, data);} catch (error) {console.error('Unable to update callback for subscriptionId ' + subscriptionId, error);}if (autoRemove && result && typeof result === 'boolean') {this.unsubscribe(subscriptionId);}} }, { key: '___updateSubscriptions__REACT_HOT_LOADER__', value: function ___updateSubscriptions__REACT_HOT_LOADER__() {return this.___updateSubscriptions__REACT_HOT_LOADER__.apply(this, arguments);} }, { key: '___updateSubscriptions__REACT_HOT_LOADER__', value: function ___updateSubscriptions__REACT_HOT_LOADER__(subscriptionName, error, data) {var _this4 = this;
      var subscriptions = this.subscriptions.
      filter(function (subscription) {return subscription.name === subscriptionName;});

      this.values[subscriptionName] = { error: error, data: data };

      subscriptions.
      forEach(function (subscription) {
        _this4._sendData(subscription.id, error, data);
      });
    } }]);return Manager;}();


;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(events, 'events', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/subscriptions/manager.js');__REACT_HOT_LOADER__.register(Manager, 'Manager', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/subscriptions/manager.js');}();;

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Personal; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.
var
Personal = function () {
  function Personal(updateSubscriptions, api, subscriber) {var _this = this;_classCallCheck(this, Personal);this.




























    _defaultAccount = function () {return _this.___defaultAccount__REACT_HOT_LOADER__.apply(_this, arguments);};this.


























    _listAccounts = function () {return _this.___listAccounts__REACT_HOT_LOADER__.apply(_this, arguments);};this.







    _accountsInfo = function () {return _this.___accountsInfo__REACT_HOT_LOADER__.apply(_this, arguments);};this._subscriber = subscriber;this._api = api;this._updateSubscriptions = updateSubscriptions;this._started = false;this._lastDefaultAccount = '0x0';this._pollTimerId = null;}_createClass(Personal, [{ key: 'start', value: function start() {this._started = true;return Promise.all([this._defaultAccount(), this._listAccounts(), this._accountsInfo(), this._loggingSubscribe()]);} // FIXME: Because of the different API instances, the "wait for valid changes" approach
    // doesn't work. Since the defaultAccount is critical to operation, we poll in exactly
    // same way we do in ../eth (ala eth_blockNumber) and update. This should be moved
    // to pub-sub as it becomes available
  }, { key: '___defaultAccount__REACT_HOT_LOADER__', value: function ___defaultAccount__REACT_HOT_LOADER__() {return this.___defaultAccount__REACT_HOT_LOADER__.apply(this, arguments);} }, { key: '___defaultAccount__REACT_HOT_LOADER__', value: function ___defaultAccount__REACT_HOT_LOADER__() {var _this2 = this;var timerDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;var nextTimeout = function nextTimeout() {var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;if (!timerDisabled) {_this2._pollTimerId = setTimeout(function () {_this2._defaultAccount();}, timeout);}};if (!this._api.transport.isConnected) {nextTimeout(500);return;}return this._api.parity.defaultAccount().then(function (defaultAccount) {if (_this2._lastDefaultAccount !== defaultAccount) {_this2._lastDefaultAccount = defaultAccount;_this2._updateSubscriptions('parity_defaultAccount', null, defaultAccount);}nextTimeout();}).catch(function () {return nextTimeout();});} }, { key: '___listAccounts__REACT_HOT_LOADER__', value: function ___listAccounts__REACT_HOT_LOADER__() {return this.___listAccounts__REACT_HOT_LOADER__.apply(this, arguments);} }, { key: '___listAccounts__REACT_HOT_LOADER__', value: function ___listAccounts__REACT_HOT_LOADER__() {var _this3 = this;return this._api.eth.accounts().then(function (accounts) {_this3._updateSubscriptions('eth_accounts', null, accounts);});} }, { key: '___accountsInfo__REACT_HOT_LOADER__', value: function ___accountsInfo__REACT_HOT_LOADER__() {return this.___accountsInfo__REACT_HOT_LOADER__.apply(this, arguments);} }, { key: '___accountsInfo__REACT_HOT_LOADER__', value: function ___accountsInfo__REACT_HOT_LOADER__() {var _this4 = this;return this._api.parity.accountsInfo().then(function (info) {_this4._updateSubscriptions('parity_accountsInfo', null, info);

        return _this4._api.parity.
        allAccountsInfo().
        catch(function () {
          // NOTE: This fails on non-secure APIs, swallow error
          return {};
        }).
        then(function (allInfo) {
          _this4._updateSubscriptions('parity_allAccountsInfo', null, allInfo);
        });
      });
    } }, { key: '_loggingSubscribe', value: function _loggingSubscribe()

    {var _this5 = this;
      return this._subscriber.subscribe('logging', function (error, data) {
        if (error || !data) {
          return;
        }

        switch (data.method) {
          case 'parity_closeVault':
          case 'parity_openVault':
          case 'parity_killAccount':
          case 'parity_importGethAccounts':
          case 'parity_newAccountFromPhrase':
          case 'parity_newAccountFromWallet':
          case 'personal_newAccount':
            _this5._defaultAccount(true);
            _this5._listAccounts();
            _this5._accountsInfo();
            return;

          case 'parity_removeAddress':
          case 'parity_setAccountName':
          case 'parity_setAccountMeta':
            _this5._accountsInfo();
            return;

          case 'parity_setDappAddresses':
          case 'parity_setDappDefaultAddress':
          case 'parity_setNewDappsAddresses':
          case 'parity_setNewDappsDefaultAddress':
            _this5._defaultAccount(true);
            _this5._listAccounts();
            return;}

      });
    } }, { key: 'isStarted', get: function get() {return this._started;} }]);return Personal;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(Personal, 'Personal', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/subscriptions/personal.js');}();;

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signer; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.
var
Signer = function () {
  function Signer(updateSubscriptions, api, subscriber) {var _this = this;_classCallCheck(this, Signer);this.



















    _listRequests = function () {return _this.___listRequests__REACT_HOT_LOADER__.apply(_this, arguments);};this._subscriber = subscriber;this._api = api;this._updateSubscriptions = updateSubscriptions;this._started = false;}_createClass(Signer, [{ key: 'start', value: function start() {this._started = true;return Promise.all([this._listRequests(true), this._loggingSubscribe()]);} }, { key: '___listRequests__REACT_HOT_LOADER__', value: function ___listRequests__REACT_HOT_LOADER__() {return this.___listRequests__REACT_HOT_LOADER__.apply(this, arguments);} }, { key: '___listRequests__REACT_HOT_LOADER__', value: function ___listRequests__REACT_HOT_LOADER__(doTimeout) {var _this2 = this;
      var nextTimeout = function nextTimeout() {var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
        if (doTimeout) {
          setTimeout(function () {
            _this2._listRequests(true);
          }, timeout);
        }
      };

      if (!this._api.transport.isConnected) {
        nextTimeout(500);
        return;
      }

      return this._api.signer.
      requestsToConfirm().
      then(function (requests) {
        _this2._updateSubscriptions('signer_requestsToConfirm', null, requests);
        nextTimeout();
      }).
      catch(nextTimeout);
    } }, { key: '_loggingSubscribe', value: function _loggingSubscribe()

    {var _this3 = this;
      return this._subscriber.subscribe('logging', function (error, data) {
        if (error || !data) {
          return;
        }

        switch (data.method) {
          case 'parity_postTransaction':
          case 'eth_sendTranasction':
          case 'eth_sendRawTransaction':
            _this3._listRequests(false);
            return;}

      });
    } }, { key: 'isStarted', get: function get() {return this._started;} }]);return Signer;}();;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(Signer, 'Signer', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/subscriptions/signer.js');}();;

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__subscriptions__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonRpcBase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Http; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.





/* global fetch */var
Http = function (_JsonRpcBase) {_inherits(Http, _JsonRpcBase);
  function Http(url) {var connectTimeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;_classCallCheck(this, Http);var _this = _possibleConstructorReturn(this, (Http.__proto__ || Object.getPrototypeOf(Http)).call(this));_this.































































    _pollConnection = function () {return _this.___pollConnection__REACT_HOT_LOADER__.apply(_this, arguments);};_this._connected = true;_this._url = url;_this._connectTimeout = connectTimeout;_this._pollConnection();return _this;}_createClass(Http, [{ key: '_encodeOptions', value: function _encodeOptions(method, params) {var json = this.encode(method, params);this.log(json);return { method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Content-Length': json.length }, body: json };} }, { key: 'execute', value: function execute(method) {var _this2 = this;for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {params[_key - 1] = arguments[_key];}var request = this._encodeOptions(method, params);return fetch(this._url, request).catch(function (error) {_this2._setDisconnected();throw error;}).then(function (response) {_this2._setConnected();if (response.status !== 200) {_this2._setDisconnected();_this2.error(JSON.stringify({ status: response.status, statusText: response.statusText }));console.error(method + '(' + JSON.stringify(params) + '): ' + response.status + ': ' + response.statusText);throw new Error(response.status + ': ' + response.statusText);}return response.json();}).then(function (response) {__WEBPACK_IMPORTED_MODULE_0__subscriptions__["b" /* Logging */].send(method, params, { request: request, response: response });if (response.error) {_this2.error(JSON.stringify(response));console.error(method + '(' + JSON.stringify(params) + '): ' + response.error.code + ': ' + response.error.message);var error = new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* default */](method, response.error.code, response.error.message);throw error;}_this2.log(JSON.stringify(response));return response.result;});} }, { key: '___pollConnection__REACT_HOT_LOADER__', value: function ___pollConnection__REACT_HOT_LOADER__() {return this.___pollConnection__REACT_HOT_LOADER__.apply(this, arguments);} }, { key: '___pollConnection__REACT_HOT_LOADER__', value: function ___pollConnection__REACT_HOT_LOADER__() {var _this3 = this;
      if (this._connectTimeout <= 0) {
        return;
      }

      var nextTimeout = function nextTimeout() {return setTimeout(_this3._pollConnection, _this3._connectTimeout);};

      this.
      execute('net_listening').
      then(nextTimeout).
      catch(nextTimeout);
    } }]);return Http;}(__WEBPACK_IMPORTED_MODULE_1__jsonRpcBase__["a" /* default */]);;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(Http, 'Http', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/transport/http/http.js');}();;

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http__ = __webpack_require__(68);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__http__["a"]; });
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.
;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}}();;

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http__ = __webpack_require__(69);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__http__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ws__ = __webpack_require__(71);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ws__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_js__ = __webpack_require__(14);
/* unused harmony reexport TransportError */
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.
;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}}();;

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ws__ = __webpack_require__(72);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ws__["a"]; });
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.
;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}}();;

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_sha3__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_sha3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_js_sha3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subscriptions__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonRpcBase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ws; });
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

 // eslint-disable-line camelcase





/* global WebSocket */var
Ws = function (_JsonRpcBase) {_inherits(Ws, _JsonRpcBase);
  function Ws(url, token) {var autoconnect = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;_classCallCheck(this, Ws);var _this = _possibleConstructorReturn(this, (Ws.__proto__ || Object.getPrototypeOf(Ws)).call(this));_this.







































































































    _onOpen = function () {return _this.___onOpen__REACT_HOT_LOADER__.apply(_this, arguments);};_this.














    _onClose = function () {return _this.___onClose__REACT_HOT_LOADER__.apply(_this, arguments);};_this.
































    _onError = function () {return _this.___onError__REACT_HOT_LOADER__.apply(_this, arguments);};_this.



















    _onMessage = function () {return _this.___onMessage__REACT_HOT_LOADER__.apply(_this, arguments);};_this.


































    _send = function () {return _this.___send__REACT_HOT_LOADER__.apply(_this, arguments);};_this._url = url;_this._token = token;_this._messages = {};_this._sessionHash = null;_this._connecting = false;_this._connected = false;_this._lastError = null;_this._autoConnect = autoconnect;_this._retries = 0;_this._reconnectTimeoutId = null;_this._connectPromise = null;_this._connectPromiseFunctions = {};if (autoconnect) {_this.connect();}return _this;}_createClass(Ws, [{ key: 'updateToken', value: function updateToken(token) {var connect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;this._token = token; // this._autoConnect = true;
      if (connect) {this.connect();}} }, { key: 'connect', value: function connect() {var _this2 = this;if (this._connected) {return Promise.resolve();}if (this._connecting) {return this._connectPromise || Promise.resolve();}if (this._reconnectTimeoutId) {window.clearTimeout(this._reconnectTimeoutId);this._reconnectTimeoutId = null;}var time = parseInt(new Date().getTime() / 1000, 10);var sha3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_js_sha3__["keccak_256"])(this._token + ':' + time);var hash = sha3 + '_' + time;if (this._ws) {this._ws.onerror = null;this._ws.onopen = null;this._ws.onclose = null;this._ws.onmessage = null;this._ws.close();this._ws = null;this._sessionHash = null;}this._connecting = true;this._connected = false;this._lastError = null;this._sessionHash = sha3;this._ws = new WebSocket(this._url, hash);this._ws.onerror = this._onError;this._ws.onopen = this._onOpen;this._ws.onclose = this._onClose;this._ws.onmessage = this._onMessage; // Get counts in dev mode only
      if (true) {this._count = 0;this._lastCount = { timestamp: Date.now(), count: 0 };window.setInterval(function () {var n = _this2._count - _this2._lastCount.count;var t = (Date.now() - _this2._lastCount.timestamp) / 1000;var s = Math.round(1000 * n / t) / 1000;if (_this2._debug) {console.log('::parityWS', 'speed: ' + s + ' req/s', 'count: ' + _this2._count, '(+' + n + ')');}_this2._lastCount = { timestamp: Date.now(), count: _this2._count };}, 5000);window._parityWS = this;}this._connectPromise = new Promise(function (resolve, reject) {_this2._connectPromiseFunctions = { resolve: resolve, reject: reject };});return this._connectPromise;} }, { key: '___onOpen__REACT_HOT_LOADER__', value: function ___onOpen__REACT_HOT_LOADER__() {return this.___onOpen__REACT_HOT_LOADER__.apply(this, arguments);} }, { key: '___onOpen__REACT_HOT_LOADER__', value: function ___onOpen__REACT_HOT_LOADER__(event) {var _this3 = this;this._setConnected();this._connecting = false;this._retries = 0;Object.keys(this._messages).filter(function (id) {return _this3._messages[id].queued;}).forEach(this._send);this._connectPromiseFunctions.resolve();this._connectPromise = null;this._connectPromiseFunctions = {};} }, { key: '___onClose__REACT_HOT_LOADER__', value: function ___onClose__REACT_HOT_LOADER__() {return this.___onClose__REACT_HOT_LOADER__.apply(this, arguments);} }, { key: '___onClose__REACT_HOT_LOADER__', value: function ___onClose__REACT_HOT_LOADER__(event) {var _this4 = this;this._setDisconnected();this._connecting = false;event.timestamp = Date.now();this._lastError = event;if (this._autoConnect) {var timeout = this.retryTimeout;var time = timeout < 1000 ? Math.round(timeout) + 'ms' : Math.round(timeout / 10) / 100 + 's';console.log('ws:onClose', 'trying again in ' + time + '...');this._reconnectTimeoutId = setTimeout(function () {_this4.connect();}, timeout);return;}if (this._connectPromise) {this._connectPromiseFunctions.reject(event);this._connectPromise = null;this._connectPromiseFunctions = {};}console.log('ws:onClose');} }, { key: '___onError__REACT_HOT_LOADER__', value: function ___onError__REACT_HOT_LOADER__() {return this.___onError__REACT_HOT_LOADER__.apply(this, arguments);} }, { key: '___onError__REACT_HOT_LOADER__', value: function ___onError__REACT_HOT_LOADER__(event) {var _this5 = this; // Only print error if the WS is connected
      // ie. don't print if error == closed
      window.setTimeout(function () {if (_this5._connected) {console.error('ws:onError');event.timestamp = Date.now();_this5._lastError = event;if (_this5._connectPromise) {_this5._connectPromiseFunctions.reject(event);_this5._connectPromise = null;_this5._connectPromiseFunctions = {};}}}, 50);} }, { key: '___onMessage__REACT_HOT_LOADER__', value: function ___onMessage__REACT_HOT_LOADER__() {return this.___onMessage__REACT_HOT_LOADER__.apply(this, arguments);} }, { key: '___onMessage__REACT_HOT_LOADER__', value: function ___onMessage__REACT_HOT_LOADER__(event) {// Event sent by Signer Broadcaster
      if (event.data === 'new_message') {return false;}try {var result = JSON.parse(event.data);var _messages$result$id = this._messages[result.id],method = _messages$result$id.method,params = _messages$result$id.params,json = _messages$result$id.json,resolve = _messages$result$id.resolve,reject = _messages$result$id.reject;__WEBPACK_IMPORTED_MODULE_1__subscriptions__["b" /* Logging */].send(method, params, { json: json, result: result });if (result.error) {this.error(event.data); // Don't print error if request rejected or not is not yet up...
          if (!/(rejected|not yet up)/.test(result.error.message)) {console.error(method + '(' + JSON.stringify(params) + '): ' + result.error.code + ': ' + result.error.message);}var error = new __WEBPACK_IMPORTED_MODULE_3__error__["a" /* default */](method, result.error.code, result.error.message);reject(error);delete this._messages[result.id];return;}resolve(result.result);delete this._messages[result.id];} catch (e) {console.error('ws::_onMessage', event.data, e);}} }, { key: '___send__REACT_HOT_LOADER__', value: function ___send__REACT_HOT_LOADER__() {return this.___send__REACT_HOT_LOADER__.apply(this, arguments);} }, { key: '___send__REACT_HOT_LOADER__', value: function ___send__REACT_HOT_LOADER__(id) {var message = this._messages[id];if (this._connected) {if (true) {this._count++;}

        return this._ws.send(message.json);
      }

      message.queued = !this._connected;
      message.timestamp = Date.now();
    } }, { key: 'execute', value: function execute(

    method) {var _this6 = this;for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {params[_key - 1] = arguments[_key];}
      return new Promise(function (resolve, reject) {
        var id = _this6.id;
        var json = _this6.encode(method, params);

        _this6._messages[id] = { id: id, method: method, params: params, json: json, resolve: resolve, reject: reject };
        _this6._send(id);
      });
    } }, { key: 'token', get: function get()

    {
      return this._token;
    } }, { key: 'sessionHash', get: function get()

    {
      return this._sessionHash;
    } }, { key: 'isAutoConnect', get: function get()

    {
      return this._autoConnect;
    } }, { key: 'isConnecting', get: function get()

    {
      return this._connecting;
    } }, { key: 'lastError', get: function get()

    {
      return this._lastError;
    }

    /**
       * Exponential Timeout for Retries
       *
       * @see http://dthain.blogspot.de/2009/02/exponential-backoff-in-distributed.html
       */ }, { key: 'retryTimeout', get: function get()
    {
      // R between 1 and 2
      var R = Math.random() + 1;
      // Initial timeout (100ms)
      var T = 100;
      // Exponential Factor
      var F = 2;
      // Max timeout (4s)
      var M = 4000;
      // Current number of retries
      var N = this._retries;

      // Increase retries number
      this._retries++;

      return Math.min(R * T * Math.pow(F, N), M);
    } }]);return Ws;}(__WEBPACK_IMPORTED_MODULE_2__jsonRpcBase__["a" /* default */]);;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(Ws, 'Ws', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/transport/ws/ws.js');}();;

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abi_spec_function__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abi_spec_paramType_format__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["b"] = decodeCallData;
/* harmony export (immutable) */ __webpack_exports__["c"] = decodeMethodInput;
/* harmony export (immutable) */ __webpack_exports__["d"] = methodToAbi;
/* harmony export (immutable) */ __webpack_exports__["a"] = abiDecode;
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.






function decodeCallData(data) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__types__["d" /* isHex */])(data)) {
    throw new Error('Input to decodeCallData should be a hex value');
  }

  if (data.substr(0, 2) === '0x') {
    return decodeCallData(data.slice(2));
  }

  if (data.length < 8) {
    throw new Error('Input to decodeCallData should be method signature + data');
  }

  var signature = data.substr(0, 8);
  var paramdata = data.substr(8);

  return {
    signature: '0x' + signature,
    paramdata: '0x' + paramdata };

}

function decodeMethodInput(methodAbi, paramdata) {
  if (!methodAbi) {
    throw new Error('decodeMethodInput should receive valid method-specific ABI');
  }

  if (paramdata && paramdata.length) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__types__["d" /* isHex */])(paramdata)) {
      throw new Error('Input to decodeMethodInput should be a hex value');
    }

    if (paramdata.substr(0, 2) === '0x') {
      return decodeMethodInput(methodAbi, paramdata.slice(2));
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_1__abi_spec_function__["a" /* default */](methodAbi).decodeInput(paramdata).map(function (decoded) {return decoded.value;});
}

// takes a method in form name(...,types) and returns the inferred abi definition
function methodToAbi(method) {
  var length = method.length;
  var typesStart = method.indexOf('(');
  var typesEnd = method.indexOf(')');

  if (typesStart === -1) {
    throw new Error('Missing start ( in call to decodeMethod with ' + method);
  } else if (typesEnd === -1) {
    throw new Error('Missing end ) in call to decodeMethod with ' + method);
  } else if (typesEnd < typesStart) {
    throw new Error('End ) is before start ( in call to decodeMethod with ' + method);
  } else if (typesEnd !== length - 1) {
    throw new Error('Extra characters after end ) in call to decodeMethod with ' + method);
  }

  var name = method.substr(0, typesStart);
  var types = method.substr(typesStart + 1, length - (typesStart + 1) - 1).split(',');
  var inputs = types.filter(function (_type) {return _type.length;}).map(function (_type) {
    var type = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__abi_spec_paramType_format__["a" /* fromParamType */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__abi_spec_paramType_format__["b" /* toParamType */])(_type));

    return { type: type };
  });

  return { type: 'function', name: name, inputs: inputs };
}

function abiDecode(inputTypes, data) {
  return decodeMethodInput({
    inputs: inputTypes.map(function (type) {
      return { type: type };
    }) },
  data);
};var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(decodeCallData, 'decodeCallData', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/decode.js');__REACT_HOT_LOADER__.register(decodeMethodInput, 'decodeMethodInput', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/decode.js');__REACT_HOT_LOADER__.register(methodToAbi, 'methodToAbi', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/decode.js');__REACT_HOT_LOADER__.register(abiDecode, 'abiDecode', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/decode.js');}();;

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abi__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abi_spec_function__ = __webpack_require__(9);
/* harmony export (immutable) */ __webpack_exports__["b"] = encodeMethodCallAbi;
/* harmony export (immutable) */ __webpack_exports__["a"] = abiEncode;
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.




function encodeMethodCallAbi() {var methodAbi = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var func = new __WEBPACK_IMPORTED_MODULE_1__abi_spec_function__["a" /* default */](methodAbi);
  var tokens = __WEBPACK_IMPORTED_MODULE_0__abi__["a" /* default */].encodeTokens(func.inputParamTypes(), values);
  var call = func.encodeCall(tokens);

  return '0x' + call;
}

function abiEncode(methodName, inputTypes, data) {
  var result = encodeMethodCallAbi({
    name: methodName || '',
    type: 'function',
    inputs: inputTypes.map(function (type) {
      return { type: type };
    }) },
  data);

  return result;
};var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(encodeMethodCallAbi, 'encodeMethodCallAbi', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/encode.js');__REACT_HOT_LOADER__.register(abiEncode, 'abiEncode', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/encode.js');}();;

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blockies__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blockies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_blockies__);
/* harmony export (immutable) */ __webpack_exports__["a"] = createIdentityImg;
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.



// jsdom doesn't have all the browser features, blockies fail
var TEST_ENV = "development" === 'test';

function createIdentityImg(address) {var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  return TEST_ENV ?
  'test-createIdentityImg' :
  __WEBPACK_IMPORTED_MODULE_0_blockies___default()({
    seed: (address || '').toLowerCase(),
    size: 8,
    scale: scale }).
  toDataURL();
};var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(TEST_ENV, 'TEST_ENV', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/identity.js');__REACT_HOT_LOADER__.register(createIdentityImg, 'createIdentityImg', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/identity.js');}();;

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abi_util_address__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__decode__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__encode__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__format__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wei__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sha3__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__identity__ = __webpack_require__(75);
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.








var _default =

{
  abiDecode: __WEBPACK_IMPORTED_MODULE_1__decode__["a" /* abiDecode */],
  abiEncode: __WEBPACK_IMPORTED_MODULE_2__encode__["a" /* abiEncode */],
  isAddressValid: __WEBPACK_IMPORTED_MODULE_0__abi_util_address__["b" /* isAddress */],
  isArray: __WEBPACK_IMPORTED_MODULE_6__types__["c" /* isArray */],
  isFunction: __WEBPACK_IMPORTED_MODULE_6__types__["a" /* isFunction */],
  isHex: __WEBPACK_IMPORTED_MODULE_6__types__["d" /* isHex */],
  isInstanceOf: __WEBPACK_IMPORTED_MODULE_6__types__["e" /* isInstanceOf */],
  isString: __WEBPACK_IMPORTED_MODULE_6__types__["f" /* isString */],
  bytesToHex: __WEBPACK_IMPORTED_MODULE_3__format__["a" /* bytesToHex */],
  hexToAscii: __WEBPACK_IMPORTED_MODULE_3__format__["b" /* hexToAscii */],
  asciiToHex: __WEBPACK_IMPORTED_MODULE_3__format__["c" /* asciiToHex */],
  createIdentityImg: __WEBPACK_IMPORTED_MODULE_7__identity__["a" /* createIdentityImg */],
  decodeCallData: __WEBPACK_IMPORTED_MODULE_1__decode__["b" /* decodeCallData */],
  decodeMethodInput: __WEBPACK_IMPORTED_MODULE_1__decode__["c" /* decodeMethodInput */],
  encodeMethodCallAbi: __WEBPACK_IMPORTED_MODULE_2__encode__["b" /* encodeMethodCallAbi */],
  methodToAbi: __WEBPACK_IMPORTED_MODULE_1__decode__["d" /* methodToAbi */],
  fromWei: __WEBPACK_IMPORTED_MODULE_4__wei__["a" /* fromWei */],
  toChecksumAddress: __WEBPACK_IMPORTED_MODULE_0__abi_util_address__["a" /* toChecksumAddress */],
  toWei: __WEBPACK_IMPORTED_MODULE_4__wei__["b" /* toWei */],
  sha3: __WEBPACK_IMPORTED_MODULE_5__sha3__["a" /* sha3 */] };/* harmony default export */ __webpack_exports__["a"] = _default;;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(_default, 'default', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/index.js');}();;

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_sha3__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_sha3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_js_sha3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__format__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = sha3;
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

 // eslint-disable-line




function sha3(value, options) {
  var forceHex = options && options.encoding === 'hex';

  if (forceHex || !options && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__types__["d" /* isHex */])(value)) {
    var bytes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__format__["d" /* hexToBytes */])(value);

    return sha3(bytes);
  }

  var hash = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_js_sha3__["keccak_256"])(value);

  return '0x' + hash;
}

sha3.text = function (val) {return sha3(val, { encoding: 'raw' });};;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(sha3, 'sha3', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/sha3.js');}();;

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bignumber_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bignumber_js__);
/* unused harmony export _getUnitMultiplier */
/* harmony export (immutable) */ __webpack_exports__["a"] = fromWei;
/* harmony export (immutable) */ __webpack_exports__["b"] = toWei;
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.



var UNITS = ['wei', 'ada', 'babbage', 'shannon', 'szabo', 'finney', 'ether', 'kether', 'mether', 'gether', 'tether'];

function _getUnitMultiplier(unit) {
  var position = UNITS.indexOf(unit.toLowerCase());

  if (position === -1) {
    throw new Error('Unknown unit ' + unit + ' passed to wei formatter');
  }

  return Math.pow(10, position * 3);
}

function fromWei(value) {var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ether';
  return new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(value).div(_getUnitMultiplier(unit));
}

function toWei(value) {var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ether';
  return new __WEBPACK_IMPORTED_MODULE_0_bignumber_js___default.a(value).mul(_getUnitMultiplier(unit));
};var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}__REACT_HOT_LOADER__.register(UNITS, 'UNITS', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/wei.js');__REACT_HOT_LOADER__.register(_getUnitMultiplier, '_getUnitMultiplier', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/wei.js');__REACT_HOT_LOADER__.register(fromWei, 'fromWei', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/wei.js');__REACT_HOT_LOADER__.register(toWei, 'toWei', '/home/nicolas/Workspace/Ethcore/parity/js/src/api/util/wei.js');}();;

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports=function(){function r(r){for(var t=0;t<l.length;t++)l[t]=0;for(var t=0;t<r.length;t++)l[t%4]=(l[t%4]<<5)-l[t%4]+r.charCodeAt(t)}function t(){var r=l[0]^l[0]<<11;return l[0]=l[1],l[1]=l[2],l[2]=l[3],l[3]=l[3]^l[3]>>19^r^r>>8,(l[3]>>>0)/(1<<31>>>0)}function e(){var r=Math.floor(360*t()),e=60*t()+40+"%",o=25*(t()+t()+t()+t())+"%",n="hsl("+r+","+e+","+o+")";return n}function o(r){for(var e=r,o=r,n=Math.ceil(e/2),a=e-n,l=[],f=0;o>f;f++){for(var h=[],c=0;n>c;c++)h[c]=Math.floor(2.3*t());var i=h.slice(0,a);i.reverse(),h=h.concat(i);for(var v=0;v<h.length;v++)l.push(h[v])}return l}function n(r,t,e,o,n){var a=document.createElement("canvas"),l=Math.sqrt(r.length);a.width=a.height=l*e;var f=a.getContext("2d");f.fillStyle=o,f.fillRect(0,0,a.width,a.height),f.fillStyle=t;for(var h=0;h<r.length;h++){var c=Math.floor(h/l),i=h%l;f.fillStyle=1==r[h]?t:n,r[h]&&f.fillRect(i*e,c*e,e,e)}return a}function a(t){t=t||{};var a=t.size||8,l=t.scale||4,f=t.seed||Math.floor(Math.random()*Math.pow(10,16)).toString(16);r(f);var h=t.color||e(),c=t.bgcolor||e(),i=t.spotcolor||e(),v=o(a),u=n(v,h,l,c,i);return u}var l=Array(4);return a}();

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    cls.apply(this, arguments);
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

var ExtendableError = function (_extendableBuiltin2) {
  _inherits(ExtendableError, _extendableBuiltin2);

  function ExtendableError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, ExtendableError);

    // extending Error is weird and does not propagate `message`
    var _this = _possibleConstructorReturn(this, (ExtendableError.__proto__ || Object.getPrototypeOf(ExtendableError)).call(this, message));

    Object.defineProperty(_this, 'message', {
      configurable: true,
      enumerable: false,
      value: message,
      writable: true
    });

    Object.defineProperty(_this, 'name', {
      configurable: true,
      enumerable: false,
      value: _this.constructor.name,
      writable: true
    });

    if (Error.hasOwnProperty('captureStackTrace')) {
      Error.captureStackTrace(_this, _this.constructor);
      return _possibleConstructorReturn(_this);
    }

    Object.defineProperty(_this, 'stack', {
      configurable: true,
      enumerable: false,
      value: new Error(message).stack,
      writable: true
    });
    return _this;
  }

  return ExtendableError;
}(_extendableBuiltin(Error));

exports.default = ExtendableError;
module.exports = exports['default'];

/***/ }),
/* 81 */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

module.exports = baseRange;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var baseRange = __webpack_require__(81),
    isIterateeCall = __webpack_require__(86),
    toFinite = __webpack_require__(96);

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
    return baseRange(start, end, step, fromRight);
  };
}

module.exports = createRange;


/***/ }),
/* 83 */
/***/ (function(module, exports) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(26);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 85 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(89),
    isArrayLike = __webpack_require__(90),
    isIndex = __webpack_require__(85),
    isObject = __webpack_require__(16);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(83);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(91),
    isLength = __webpack_require__(92);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(27),
    isObject = __webpack_require__(16);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(27),
    isObjectLike = __webpack_require__(93);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var createRange = __webpack_require__(82);

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = createRange();

module.exports = range;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(97);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(16),
    isSymbol = __webpack_require__(94);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abi__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return __WEBPACK_IMPORTED_MODULE_1__api__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Abi", function() { return __WEBPACK_IMPORTED_MODULE_0__abi__["a"]; });
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

// import 'babel-polyfill/dist/polyfill.js';
// import es6Promise from 'es6-promise';
// es6Promise.polyfill();

// const isNode = typeof global !== 'undefined' && typeof global !== 'undefined';
// const isBrowser = typeof self !== 'undefined' && typeof self.window !== 'undefined';

// if (isBrowser) {
//   require('whatwg-fetch');
// }

// if (isNode) {
//   global.fetch = require('node-fetch');
// }




;var _temp = function () {if (typeof __REACT_HOT_LOADER__ === 'undefined') {return;}}();;

/***/ })
/******/ ]);
});
//# sourceMappingURL=library.js.map