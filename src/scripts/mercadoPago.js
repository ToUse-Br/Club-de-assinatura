(function () {
    function $MPC_load() {
      window.$MPC_loaded !== true &&
        (function () {
          var s = document.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src =
            document.location.protocol +
            "//secure.mlstatic.com/mptools/render.js";
          var x = document.getElementsByTagName("script")[0];
          x.parentNode.insertBefore(s, x);
          window.$MPC_loaded = true;
        })();
    }
    window.$MPC_loaded !== true
      ? window.attachEvent
        ? window.attachEvent("onload", $MPC_load)
        : window.addEventListener("load", $MPC_load, false)
      : null;
  })();

  (function () {
    function $MPC_load() {
      window.$MPC_loaded !== true &&
        (function () {
          var s = document.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src =
            document.location.protocol +
            "//secure.mlstatic.com/mptools/render.js";
          var x = document.getElementsByTagName("script")[0];
          x.parentNode.insertBefore(s, x);
          window.$MPC_loaded = true;
        })();
    }
    window.$MPC_loaded !== true
      ? window.attachEvent
        ? window.attachEvent("onload", $MPC_load)
        : window.addEventListener("load", $MPC_load, false)
      : null;
  })();

  (function () {
    function $MPC_load() {
      window.$MPC_loaded !== true &&
        (function () {
          var s = document.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src =
            document.location.protocol +
            "//secure.mlstatic.com/mptools/render.js";
          var x = document.getElementsByTagName("script")[0];
          x.parentNode.insertBefore(s, x);
          window.$MPC_loaded = true;
        })();
    }
    window.$MPC_loaded !== true
      ? window.attachEvent
        ? window.attachEvent("onload", $MPC_load)
        : window.addEventListener("load", $MPC_load, false)
      : null;
  })();

  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("close-btn");
  const iframe = document.getElementById("modal-iframe");

  function openModal(url) {
    iframe.src = url;
    modal.style.display = "block";
  }

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    iframe.src = ""; // Limpa o iframe ao fechar o modal
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      iframe.src = "";
    }
  });