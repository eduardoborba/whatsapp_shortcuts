var openNewChat = `
  document.addEventListener('openNewChat', function() {
    var searchBox = document.querySelector('div[role="button"][title="New chat"]');
    var reactMethods = Object.getOwnPropertyNames(searchBox);
    var eventHandler = reactMethods.find(value => /reactEventHandlers/.test(value))
    var event = new Event('mousedown');
    event.isDefaultPrevented = function() { return false; };

    console.log(searchBox);
    console.log(reactMethods);
    console.log(eventHandler);
    console.log(searchBox[eventHandler]);
    searchBox[eventHandler].onMouseDown(event);
  });
`;

var scriptTag = document.createElement("script");
scriptTag.innerHTML = openNewChat;
document.head.appendChild(scriptTag);
