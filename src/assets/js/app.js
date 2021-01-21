let arr = require("./../../data/data.json")
// INITING CONNECTION TO SOCKET AT FIRST
function updateWsStatus(msg) {
  document.getElementById("wsStatus").innerHTML = msg;
  return true;
}
function initWebSocket() {
  // let buttons = document.getElementsByClassName("burger__wrapper__button");
  // let accordions = document.getElementsByClassName("accordion");
  // let pannels = document.getElementsByClassName("accordion__panel");
  // buttons[0].click();
  // accordions[0].classList.toggle("active");
  // pannels[0].style.maxHeight = pannels[0].scrollHeight + "px";
  if ("WebSocket" in window) {
    console.log("WebSocket is supported by your Browser! Initing connection");
    updateWsStatus("Initializing Websocket...");
    
    // from another ip 
    // const WSURI = `ws://192.168.0.109/ws`;

    // for local usage 
    const WSURI = `ws://192.168.4.1/ws`;

    let ws = new WebSocket(WSURI);
    ws.onopen = function () {
      ws.send("Connection succesfull");
      console.log("Sending PING on opening connection");
      updateWsStatus("Opening Websocket...");
    };
    ws.onmessage = function (evt) {
      document.getElementById("wsStatus").classList.toggle("success");
      var received_msg = JSON.parse(evt.data);
      console.log(`Getting PONG: ${received_msg}`);
      document.getElementById("inside").innerHTML = received_msg.inside;
      document.getElementById("inh").innerHTML = received_msg.inh;
      document.getElementById("outside").innerHTML = received_msg.outside;
      document.getElementById("outh").innerHTML = received_msg.outh;
      document.getElementById("atm").innerHTML = received_msg.atm;
      // console.log("GIgit", arr);
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
