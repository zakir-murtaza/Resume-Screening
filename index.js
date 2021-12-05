console.log("This is my js file");

// Data is an array of objects which contains information about the candidates.
const data = [
    {
        name: 'Rohan Das',
        age: 80,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/77.jpg'
    },
    {
        name: 'Shubham Sharma',
        age: 25,
        city: 'Mumbai',
        language: 'Java',
        framework: 'Spring',
        image: 'https://randomuser.me/api/portraits/men/78.jpg'
    },
    {
        name: 'Jacob Statham',
        age: 55,
        city: 'America',
        language: 'Javascript',
        framework: 'Express',
        image: 'https://randomuser.me/api/portraits/men/80.jpg'
    },
    {
        name: 'Aishwariya Rai',
        age: 60,
        city: 'Chennai',
        language: 'C++',
        framework: 'Node',
        image: 'https://randomuser.me/api/portraits/women/77.jpg'
    },
    {
        name: 'Deepika',
        age: 40,
        city: 'New Delhi',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/women/72.jpg'
    }
]


// CV iterator

function cvIterator(profiles){
    let nextIndex=0;
    return{
        next: function(){
            return nextIndex<profiles.length ? 
            {value: profiles[nextIndex++],done:false} :
            {done: true}
        }
    };
}

const candidates = cvIterator(data);


// Button listener for next button

   window.onload = function() {
        document.getElementById('next');
        next.addEventListener('click', nextCV);
    }
    
    




function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src = '${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name is ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Knowledge of ${currentCandidate.language} langauge</li>
    <li class="list-group-item">uses ${currentCandidate.framework} framework</li>
      </ul>`
    }else{
        alert('End of Applications');
        window.location.reload();
    }
}