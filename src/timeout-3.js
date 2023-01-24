let counter = 0;

const timeout = setTimeout(function fun() {
  console.log(`timeout: ${++counter}`);

  timeout.refresh()
}, 2000);
