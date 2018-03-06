var recipes = new Object();

updateObjectWithKeyAndValue(obj, key, value) {
  var update = obj[key] = value;
  return update;
}
