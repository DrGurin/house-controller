// INITING CONNECTION TO SOCKET AT FIRST
function updateWsStatus(msg) {
  document.getElementById("wsStatus").innerHTML = msg;
  return true;
}
function initWebSocket() {
  if ("WebSocket" in window) {
    console.log("WebSocket is supported by your Browser! Initing connection");
    updateWsStatus("Initializing Websocket...");
    const WSURI = `wss://echo.websocket.org/`;
    let ws = new WebSocket(WSURI);
    ws.onopen = function () {
      ws.send("Connection succesfull");
      console.log("Sending PING on opening connection");
      updateWsStatus("Opening Websocket...");
    };
    ws.onmessage = function (evt) {
      document.getElementById("wsStatus").classList.toggle("success");
      var received_msg = evt.data;
      console.log(`Getting PONG: ${received_msg}`);
      updateWsStatus("Connected to Websocket successfully &#128513;");
      showContent(true);
    };
    ws.onclose = function () {
      document.getElementById("wsStatus").classList.toggle("error");
      console.log("Connection has been closed.");
      updateWsStatus("Connection has been closed.");
      showContent(false);
    };
    ws.onerror = function (event) {
      document.getElementById("wsStatus").classList.toggle("error");
      console.error(`Error: ${event}`);
      updateWsStatus(`Error: ${event}`);
      showContent(false);
    };
  } else {
    console.log("WebSocket NOT supported by your Browser!");
    updateWsStatus("WebSocket NOT supported by your Browser!");
    document.getElementById("wsStatus").classList.toggle("error");
    showContent(false);
  }
}
// initWebSocket();
window.addEventListener("load", initWebSocket, false);
// INITING CONNECTION TO SOCKET AT FIRST

function showContent(argument) {
  if (argument) {
    document.getElementById("loader").classList.add("--unactivated");
    document.getElementById("viewWrapper").classList.add("--active");
  } else {
    document.getElementById("loader").classList.remove("--unactivated");
    document.getElementById("viewWrapper").classList.remove("--active");
  }
}
