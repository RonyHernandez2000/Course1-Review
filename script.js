//get all animal  sections
let animals = document.querySelectorAll(".animal")

//create dog vote button 
let dogVoteBtn = document.createElement("button")
dogVoteBtn.textContent = "vote for Doggo"
animals[0].append(dogVoteBtn)

let catVoteBtn = document.createElement("button")
catVoteBtn.textContent = "vote for catto"
animals[1].append(catVoteBtn)

let fishVoteBtn = document.createElement("button")
fishVoteBtn.textContent = "vote for fish"
animals[2].append(fishVoteBtn)

//isolate the vote count for the dog in the voting table
let dogVotesCell = document.querySelector("#doggo-votes");
let dogVotes = localStorage.getItem('dog-votes')
if (dogVotes){
    dogVotesCell.textContent = dogVotes;
}
//let this the dog button that we created and appended previously 
let dogVoteBtn1 = document.createElement("button")
dogVoteBtn.textContent = "vote for Doggo"

//now, we're adding this event listener
dogVoteBtn.addEventListener('click',function(e) {
    let dogVotesCount = parseInt(dogVotesCell.textContent);
    dogVotesCount = dogVotesCount + 1;
    dogVotesCell.textContent = dogVotesCount;
    localStorage.setItem('dog-votes',dogVotesCount);

});

let catVotesCell = document.querySelector("#catto-votes");
let catVotes = localStorage.getItem('cat-votes')
if (catVotes){
    catVotesCell.textContent = catVotes;
}

let catVoteBtn1 = document.createElement("button")
catVoteBtn.textContent = "vote for catto"

catVoteBtn.addEventListener('click',function(e) {
    let catVotesCount = parseInt(catVotesCell.textContent);
    catVotesCount = catVotesCount + 1;
    catVotesCell.textContent = catVotesCount;
    localStorage.setItem('cat-votes',catVotesCount);
});

let fishVotesCell = document.querySelector("#fish-votes");
let fishVotes = localStorage.getItem('fish-votes')
if (fishVotes){
    fishVotesCell.textContent = fishVotes;
}

let fishVoteBtn1 = document.createElement("button")
fishVoteBtn.textContent = "vote for fish"

fishVoteBtn.addEventListener('click',function(e) {
    let fishVotesCount = parseInt(fishVotesCell.textContent);
    fishVotesCount = fishVotesCount + 1;
    fishVotesCell.textContent = fishVotesCount;
    localStorage.setItem('fish-votes',fishVotesCount);
});
