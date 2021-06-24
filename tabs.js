const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));
const animate = document.body.querySelector('.animate');

function handleTabClick(e) {
    console.log(e.currentTarget);
    // hide all tab panels 
    tabPanels.forEach(panel => {
        panel.hidden = true;
    });
    // mark all tabs as unselected
    tabButtons.forEach(tab => {
        tab.ariaSelected = false;
        tab.setAttribute('aria-selected', false);
    })
    // mark the clicked tab as selected
    e.currentTarget.setAttribute('aria-selected', true);
    // find the associated tabPanel and show it!
    const id = e.currentTarget.id;
    console.log(id); 
    // const tabPanel = tabs.querySelector(`[aria-labelledby='${id}']`);
    const tabPanel = tabs.querySelector(`.${id}`);
    tabPanel.hidden = false;
    tabPanel.style.animate = `anim 1s ease-in forwards`;
    
}


tabButtons.forEach(button => button.addEventListener('click', handleTabClick));


