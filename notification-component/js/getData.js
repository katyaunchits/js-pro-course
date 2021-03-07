import { showNotificationsModal } from './index.js'

async function getNotifications() {
    const response = await fetch('./data.json');
    const notifications = await response.json();
    showNotificationsModal(notifications);
}

getNotifications();