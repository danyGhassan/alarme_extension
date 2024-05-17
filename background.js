chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'setAlarm') {
      const alarmTime = message.time;
  
      chrome.alarms.create('alarm', { when: alarmTime });
  
      chrome.alarms.onAlarm.addListener((alarm) => {
        if (alarm.name === 'alarm') {
          chrome.notifications.create('alarm-notification', {
            type: 'basic',
            iconUrl: 'icon48.png',
            title: 'Alarm',
            message: 'It\'s time!'
          });
        }
      });
    }
  });
  