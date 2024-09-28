import Logo from "./richi-white.png"
let test = function() {
//header
let header = document.querySelector(".primaryPageHeader");
let buttonContainer = document.createElement("div");
let buttonGetStarted = document.createElement("button");
let buttonLogin = document.createElement("button");
let Icon = new Image();

Icon.src = Logo;

Icon.className = "logo"
buttonGetStarted.className = "buttonGetStarted"
buttonLogin.className = "buttonLogin"
buttonContainer.className = "buttonContainer"

buttonGetStarted.textContent = "Get our contact"
buttonLogin.textContent = "Login"

header.appendChild(Icon)
header.appendChild(buttonContainer)
buttonContainer.appendChild(buttonGetStarted)
buttonContainer.appendChild(buttonLogin)
//Content
let content = document.querySelector(".primaryPageContent");
let contentWelcome = document.createElement("h2")

contentWelcome.className = "contentWelcome"

contentWelcome.innerHTML = "A simple to do list for millionaires" + "<br>" + "or future millionaires"
content.appendChild(contentWelcome)
}
export { test }