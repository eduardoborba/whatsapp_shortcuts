chrome.commands.onCommand.addListener(function(command) {
  switch (command) {
  case 'focus-on-search-bar':
    let searchBox = document.querySelector('div[role="button"][title="New chat"]');
    let reactMethods = Object.getOwnPropertyNames(searchBox);
    let eventHandler = reactMethods.find(value => /reactEventHandlers/.test(value))
    let event = new Event('mousedown');
    event.isDefaultPrevented = function() { return false; }
    searchBox[eventHandler].onMouseDown(event);

    break;
  default:
    console.log(`Command not found: ${expr}.`);
}

});
