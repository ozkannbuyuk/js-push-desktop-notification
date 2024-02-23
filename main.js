window.onload = function () {
  let btn = document.querySelector("button#btn");
  let closeBtn = document.querySelector("button#closeBtn");

  let permission = Push.Permission.has();

  btn.addEventListener("click", function () {
    Push.create("Notification", {
      title: "Notification",
      body: "Hey, how's it going?",
      icon: "/logo.png",
      tag: "notification",
      link: "https://www.example.com",
      timeout: 3000,
      onClick: function () {
        this.close();
      },
      onShow: function () {
        console.log("Displayed on the screen...");
      },
    });
  });
  closeBtn.addEventListener("click", function () {
    Push.clear();
  });
};
