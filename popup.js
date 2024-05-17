document.getElementById('setAlarmButton').addEventListener('click', () => {
  const alarmTime = document.getElementById('alarmTime').value;
  if (alarmTime) {
    const [hours, minutes] = alarmTime.split(':').map(Number);
    const now = new Date();
    const alarmDate = new Date();
    alarmDate.setHours(hours, minutes, 0, 0);

    if (alarmDate < now) {
      alarmDate.setDate(alarmDate.getDate() + 1); // Set for next day if time has passed
    }

    chrome.storage.sync.set({ alarmTime: alarmDate.getTime() }, () => {
      chrome.runtime.sendMessage({ action: 'setAlarm', time: alarmDate.getTime() });
      alert('Alarm set for ' + alarmDate.toLocaleTimeString());
    });
  } else {
    alert('Please select a valid time.');
  }
});
