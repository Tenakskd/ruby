function settingsPage(value) {
    if (value === true) {
        document.getElementById('settings-container').classList.remove('dnone');
        setPage('settings');
    }
    if (value === false) {
        document.getElementById('settings-container').classList.add('dnone');
    }
}
function gamesPage(value) {
    if (value === true) {
        document.getElementById('games-container').classList.remove('dnone');
        setPage('games');
        fetchGames();
    }
    if (value === false) {
        document.getElementById('games-container').classList.add('dnone');
    }
}
function refreshPage() {
    let currentTab = getCurrentTab();
    let iframe = document.querySelector(`[data-iframe-id="${currentTab}"]`);
    try {
        iframe.contentWindow.location.reload();
    } catch (err) {};
}
function previousPage() {
    let currentTab = getCurrentTab();
    let iframe = document.querySelector(`[data-iframe-id="${currentTab}"]`);
    try {
        iframe.contentWindow.history.back();
    } catch (err) {};
}
function nextPage() {
    let currentTab = getCurrentTab();
    let iframe = document.querySelector(`[data-iframe-id="${currentTab}"]`);
    try {
        iframe.contentWindow.history.forward();
    } catch (err) {};
}
function popout() {
    let currentTab = getCurrentTab();
    let iframe = document.querySelector(`[data-iframe-id="${currentTab}"]`);
    try {
        let url = iframe.src;
        let win = window.open(url, '_blank');
        win.focus();
    } catch (err) {};
}
function fullscreen() {
    //this has two options, fullscreen the page, and fullscreen the tab to the window (add later)
    let currentTab = getCurrentTab();
    let iframe = document.querySelector(`[data-iframe-id="${currentTab}"]`);
    try {
        if (localStorage.getItem('fullScreen') === 'full') {
            iframe.requestFullscreen();
        }
        if (localStorage.getItem('fullScreen') === 'page') {
            //set to position absolute
            iframe.style.position = 'absolute';
            //set to top left corner
            iframe.style.top = '0';
            iframe.style.left = '0';
            //set to full width and height
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            //set z-index to 9999
            iframe.style.zIndex = '9998';
            //add a transition
            iframe.style.transition = 'all 0.5s ease-in-out';
            //listen for escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    //reset all styles
                    iframe.style.position = '';
                    iframe.style.top = '';
                    iframe.style.left = '';
                    iframe.style.width = '';
                    iframe.style.height = '';
                    iframe.style.zIndex = '';
                    iframe.style.transition = '';
                }
            });
        }
    } catch (err) {};
}
function searchBar(value) {
    const f = document.getElementById('uv-form');
    const i = document.getElementById('uv-address');
    i.value = value;
    f.dispatchEvent(new Event('submit'));
}