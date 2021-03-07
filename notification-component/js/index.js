export function showNotificationsModal(data) {

    const isNotificationsDisabled = JSON.parse(localStorage.getItem(`isNotificationsDisabled`));

    if (isNotificationsDisabled) {
        return
    }

    let currentNotification = localStorage.getItem('currentNotification') || 0;

    const notificationWindow = `
 <div id='' class="notification_window">
     <div class="container"> 
                <div class="notification_content">
                        <h4 class="notification_title">${data[currentNotification].title}</h4>
                        <p class="notification_description">${data[currentNotification].phrase}</p>
                </div>
                <div>
                <button id="closeWindow">x</button>
                </div>
                <div class="notification_footer">
                    <label for="disableNotifications"><input type="checkbox" name="disableNotifications" id="disableNotifications">Disable Tips</label>
                    <div class="pagination">
                        <button class='button pevious'><</button>
                        <div class="buttons_radio">${data.map(notification =>`<input type="radio" name="pagination" id="${notification.id}" class="button radio" ${notification.id-1==currentNotification ? 'checked':''}></input>`).join('')}</div>
                        <button class='button next'>></button>
             </div>
        </div>
     </div>
</div>`;
    document.body.innerHTML = notificationWindow; 
    setItemsInLocalStorage(currentNotification);
    setEventListeners(currentNotification,data);          
}


function setItemsInLocalStorage(notification) {
  const disableNotifications = document.getElementById("disableNotifications");
  if (disableNotifications.checked) {
    localStorage.setItem("isNotificationsDisabled", "true");
  } else {
    localStorage.setItem("currentNotification", `${notification}`);
  }
}

function setEventListeners(notification, data) {
  const btnPrevious = document.querySelector(".pevious");
  const btnNext = document.querySelector(".next");
  const btnsRadio = document.querySelector(".buttons_radio");
  const btnCloseModal = document.getElementById("closeWindow");
  const notificationWindow = document.querySelector(".notification_window");
  const notificationTitle = document.querySelector(".notification_title");
  const notificationDescr = document.querySelector(".notification_description");

  function setNotification(notification) {
    btnsRadio.children[notification].checked = true;
    notificationTitle.innerHTML = data[notification].title;
    notificationDescr.innerHTML = data[notification].phrase;
    setItemsInLocalStorage(notification);
  }

  btnPrevious.addEventListener(`click`, () => {
    if (notification - 1 == -1) {
      notification = data.length - 1;
    } else {
      notification = notification - 1;
    }
    setNotification(notification);
  });

  btnNext.addEventListener(`click`, () => {
    if (notification == data.length - 1) {
      notification = 0;
    } else {
      notification = +notification + 1;
    }
    setNotification(notification);
  });

  btnsRadio.addEventListener(`click`, (event) => {
    notification = event.target.id - 1;
    setNotification(notification);
  });

  btnCloseModal.addEventListener(`click`, () => {
    setItemsInLocalStorage(notification);
    notificationWindow.remove();
  });
}