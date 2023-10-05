function flipOnClick() {
    const btn = document.querySelector("[data-navbar-btn]")
    const expanded = btn.getAttribute("aria-expanded")
    const caret = document.querySelector("[data-navbar-caret]")
    console.log(expanded);
    console.log(caret);
    if (JSON.parse(expanded)) {
        caret.style.transform = "rotate(180deg)"
    } else {
        caret.style.transform = "rotate(0deg)"
    }
}