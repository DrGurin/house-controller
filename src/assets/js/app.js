// INITING CONNECTION TO SOCKET AT FIRST
function updateWsStatus(msg) {
  document.getElementById("wsStatus").innerHTML = msg;
  return true;
}
function initWebSocket() {
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

      document.getElementById("outsc").innerHTML = received_msg.outsc;
      document.getElementById("insc").innerHTML = received_msg.insc;
      document.getElementById("flowsc").innerHTML = received_msg.flowsc;
      document.getElementById("powersc").innerHTML = received_msg.powersc;
      document.getElementById("dailysc").innerHTML = received_msg.dailysc;
      document.getElementById("hws").innerHTML = received_msg.hws;
      document.getElementById("tank").innerHTML = received_msg.tank;
      document.getElementById("pres").innerHTML = received_msg.pres;


      // VALVES BLOCK 
        // sollar collector
          document.getElementById("vsc").innerHTML = received_msg.vsc ? "ON" : "OFF";
          document.getElementById("vsc").style.color = received_msg.vsc ? "green" : "red";
          document.getElementById("scr").innerHTML = received_msg.scr;
        // END sollar collector
        // Solid Fuel Boiler
          document.getElementById("vsfb").innerHTML = received_msg.vsfb ? "ON" : "OFF";
          document.getElementById("vsfb").style.color = received_msg.vsfb ? "green" : "red";
          document.getElementById("sfbr").innerHTML = received_msg.sfbr;
        // END Solid Fuel Boiler
        // HWS
          document.getElementById("vhws").innerHTML = received_msg.vhws ? "ON" : "OFF";
          document.getElementById("vhws").style.color = received_msg.vhws ? "green" : "red";
          document.getElementById("hwsr").innerHTML = received_msg.hwsr;
      // END HWS

       // HEATING
          document.getElementById("vheat").innerHTML = received_msg.vheat ? "ON" : "OFF";
          document.getElementById("vheat").style.color = received_msg.vheat ? "green" : "red";
          document.getElementById("hr").innerHTML = received_msg.hr;
      // END HEATING
      // Tank
          document.getElementById("vtank").innerHTML = received_msg.vtank ? "ON" : "OFF";
          document.getElementById("vtank").style.color = received_msg.vtank ? "green" : "red";
          document.getElementById("tr").innerHTML = received_msg.tr;
      // END Tank
      // Pool
          document.getElementById("vpool").innerHTML = received_msg.vpool ? "ON" : "OFF";
          document.getElementById("vpool").style.color = received_msg.vpool ? "green" : "red";
          document.getElementById("pr").innerHTML = received_msg.pr;
      // END Pool


      // Pump
        document.getElementById("pump").innerHTML = received_msg.pump ? "ON" : "OFF";
        document.getElementById("pump").style.color = received_msg.pump ? "green" : "red";
      // END Pump
      // Pump Tank
        document.getElementById("pumpt").innerHTML = received_msg.pumpt ? "ON" : "OFF";
        document.getElementById("pumpt").style.color = received_msg.pumpt ? "green" : "red";
      // END Pump Tank
      // Gas Boiler
        document.getElementById("pumpgb").innerHTML = received_msg.pumpgb ? "ON" : "OFF";
        document.getElementById("pumpgb").style.color = received_msg.pumpgb ? "green" : "red";
      // END Gas Boiler
  



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
