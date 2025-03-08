async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve,millis))
  }
  sleep(100).then(() => console.log('After 100ms'));