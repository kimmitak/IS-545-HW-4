const outputDiv = document.getElementById('output')

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul1 = document.createElement('ul')
const url = 'http://jsonplaceholder.typicode.com/users'
const ul = document.createElement('ul')

var title1 = document.createElement("h2")
title1.innerHTML = "User emails from XMLHttpRequest:";
outputDiv.appendChild(title1)

var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'json';
xhr.onload = function(e) {
    if (this.status ==200) {
        let users = this.response
        process(users)
}
};
xhr.send()

function process(users) {
    let emails = []
    users.forEach(function(user) {
       
        emails.push(user.email)
       
    })

    emails.sort()
    emails.forEach( email => {
        let li = createNode('li');
        li.innerHTML = email;
          append (ul1, li);
    })
   
   
}
outputDiv.appendChild(ul1);




var title2 = document.createElement("h2")
title2.innerHTML = "User usernames from fetch:";
outputDiv.appendChild(title2)

fetch(url)
    .then((response) => response.json())
        .then(function(data) {
            let users = data
            let usernames= []
            users.forEach(function(user) {
                usernames.push(user.username)
            }
            )
                function sortNames(n1,n2) {
                 const len1 = n1.length
                 const len2 = n2.length
                 return len1-len2
                }

            usernames.sort(sortNames)
            usernames.forEach (username => {
                let li = createNode('li')
                li.innerHTML = username;
                    append (ul,li);
                return ul;
            })

        
            
            })
     

  
outputDiv.appendChild(ul);
