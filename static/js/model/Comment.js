define(function(require) {
  //TODO fill in details
  var breeze = require('breeze');
  // var Q = require('Q');
  var DT = breeze.DataType;

  var initialize = function(metadataStore) {
    metadataStore.addEntityType({
      shortName: 'Comment',
      dataProperties: {
        id: {
          dataType: DT.String,
          isPartOfKey: true
        },
        type: {
          dataType: DT.String
        },
        icon: {
          dataType: DT.String
        },
        picture: {
          dataType: DT.String
        },
        link: {
          dataType: DT.String
        },
        name: {
          dataType: DT.String
        },
        message: {
          dataType: DT.String
        },
        created_time: {
          dataType: DT.Date
        }
      }
    });
  };

  var downloadComments = function(manager) {
    var p = {
      _VOXSUPMETHOD_: 'EDGE'
    };

    q = breeze.EntityQuery.from('me/posts').withParameters(p).toType('Post');
    return manager.executeQuery(q);
  };

  return {
    initialize: initialize,
    downloadComments: downloadComments
  };
});
