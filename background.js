chrome.commands.onCommand.addListener(function(command) {
  switch (command) {
    case 'focus-on-search-bar':
      chrome.tabs.executeScript({
        code: `document.dispatchEvent(new Event('openNewChat'));`
      });

      break;
    default:
      console.log(`Command not found: ${expr}.`);
  }
});
