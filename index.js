var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}


function deleteFromObjectByKey(object, key){
  var newObj = delete object[key]
  return (newObj)
  return (object[key])
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
