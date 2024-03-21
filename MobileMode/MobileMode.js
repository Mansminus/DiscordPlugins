//simulate a mobile device by setting the user agent
navigator.__defineGetter__('userAgent', function () {
    return "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.149 Mobile Safari/537.36";
});

//remove discord dev overlay if it exists
document.addEventListener("DOMContentLoaded", (event) => {
    const element = document.querySelector('[class*="headerBar"][class*="mobileHeaderCollapsed"][class*="container"][class*="themed"]');
    if (element) {
        element.style.display = 'none';
    } else {
        console.log("Element not found.");
    }
});
