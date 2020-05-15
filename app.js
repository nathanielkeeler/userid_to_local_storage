(function () {
  var STORAGE_KEY = "d5_gclid";
  var PARAM_NAME = "gclid";
  var CHECK_REFERRER = true;

  // Checks if the local Storage Feature is there.
  function hasSessionStorage() {
      var test = 'test';
      try {
          window.sessionStorage.setItem(test, test);
          window.sessionStorage.removeItem(test);
          return true;
      } catch (e) {
          return false;
      }
  } 

  // Fail fast if local storage is not there
  if (hasSessionStorage === false) {
      return null;
  }

  // Get the current urls query parameters
  var pStr =  window.location.search;

  // Try to extract the parameters from the referrer when
  // the current url has none and this feature is enabled.
  if (pStr === '' && document['referrer'] && CHECK_REFERRER) {
  // TODO check here if the refererrer is the same hostname as the current location - do nothing otherwise
    if(location.hostname === document.referrer.split('/')[2].split(':')[0].split('?')[0].split('#')[0]) {
          var rStr = document['referrer'].split('?')[1];
          pStr = (rStr !== undefined) ? '?' + rstr.split('#')[0] : '';
      }
        
  }

  // Parse the parameter string and add the key/values to an object.
  var params = {};
  if (pStr !== '') {
      pStr.substring(1).split('&').map(function (value) {
          var kv = value.split('=');
          params[kv[0]] = kv[1]; 
      });
  }

  // Get the value from the session storage if it's set or
  var storageValue = window.sessionStorage.getItem(STORAGE_KEY);
  if (params[PARAM_NAME]) {
      window.sessionStorage.setItem(STORAGE_KEY, params[PARAM_NAME]); 
      storageValue = params[PARAM_NAME];
  }
  
  return storageValue || "";
})();