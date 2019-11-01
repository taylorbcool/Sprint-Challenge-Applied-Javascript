// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function createTab(topic) {
    const 
        tab = document.createElement('div'),
        tabContainer = document.querySelector('.topics');
    
    tab.textContent = topic;

    tab.classList.add('tab');
    tabContainer.appendChild(tab);
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((response) => {
        response.data.topics.forEach(element => {
            createTab(element);
        });
    })
    .catch((error) => {
        console.log('Could not fetch data; ' + error)
    })
