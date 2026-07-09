const intervalId = setInterval(() => {

  const input = document.querySelector('input[type="text"]');

  const button = document.querySelector('button[type="submit"]');

  if (!input || !button) {

    console.warn("Input or button not found!");

    return;

  }

  const nativeInputSetter = Object.getOwnPropertyDescriptor(

    window.HTMLInputElement.prototype, 'value'

  ).set;

  nativeInputSetter.call(input, ' !');

  input.dispatchEvent(new Event('input', { bubbles: true }));

  button.click();

  console.log("Message sent at", new Date().toLocaleTimeString());

}, 10000);