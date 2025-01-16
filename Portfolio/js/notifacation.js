

export function notify(type,messages){

    const container = document.createElement("div")
    const icon = document.createElement("i")
    
    switch(type){
        case"warning": icon.className("fa-regular fa-circle-check")
        break;
        case"success": icon.className = "fa-solid fa-triangle-exclamation"
        break;
        default: 
        
    }

    const message = document.createElement("p")
    message.className="notify--p"
    message.textContent = messages

    const button = document.createElement("button")
    
    button.className ="notify--button fa-regular fa-circle-xmark"
   

    container.appendChild(icon)
    container.appendChild(message)
    container.appendChild(message)
    container.appendChild(button)

    container.className="notify"
    container.classList.add("notify--open")
    return container

}

