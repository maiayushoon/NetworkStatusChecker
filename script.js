window.addEventListener("load",checkInternetConnection);

function checkInternetConnection(){
    const statusText = document.getElementById("statusText");
    const ipAddressText = document.getElementById("idAddressText");
    const networkStrengthText = document.getElementById("networkStrengthText");

    statusText.textContent='Checking...';


    if(navigator.onLine){
        fetch('https://api.ipify.org?format=json')
        .then((response)=>response.json())  //then method convert the data cmg frm fetch to the json form 
        .then((data)=>{  //use for handling the coming data
            ipAddressText.textContent = data.ip;
            statusText.textContent='Connected';
            
            const connection = navigator.connection;
            const networkStrength = connection ?connection.downlink + 'Mbps' : Unknown;
            networkStrengthText.textContent= networkStrength;
        })
        .catch(()=>
        {
            statusText.textContent='Disconnected';
            ipAddressText.textContent='-';
            networkStrengthText.textContent='-';
        })

    }
    else{
        statusText.textContent='Disconnected';
        ipAddressText.textContent='-';
        networkStrengthText.textContent='-';
    }
}