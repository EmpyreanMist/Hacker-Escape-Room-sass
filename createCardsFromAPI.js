/* Fetching challenges from API */

async function fetchAPI() {
  try {
    // Fetch data from the API
    const response = await fetch(
      "https://lernia-sjj-assignments.vercel.app/api/challenges"
    );

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    createCardsFromAPI(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchAPI();

 const cardContainer = document.querySelector(".api-cards-container"); 


function createCardsFromAPI(api) {
  const challenges = [];
  const images = [];
  const titles = [];
  const rating = [];

  api.challenges.forEach((challenge) => {
    challenges.push(challenge);
    if (challenge.image) {
      images.push(challenge.image);
    }
    titles.push(challenge.title);
    rating.push(challenge.rating);
  });

  console.log("Challenges:", challenges);
  console.log("Images:", images);
  console.log("Titles: " + titles);
  console.log("rating: " + rating);

  for (let i = 0; i < challenges.length; i++) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const stars = createStars(rating[i]);
    const minParticipants = [];
    const maxParticipants = [];


    h3.innerText = titles[i];
    img.setAttribute("src", images[i]);
    
    div.append(img); 
    div.append(h3);

    cardContainer.append(div);
    stars.forEach((star) => div.appendChild(star));
    
  }
}

function getParticipants(minParticipants, maxParticipants, data) {

}

function createStars(rating) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    const star = document.createElement("i");

    if (rating >= i + 1) {
      star.classList.add("fa-solid", "fa-star", "red");
    } else if (rating > i && rating < i + 1) {
      star.classList.add("fa-regular", "fa-star-half-stroke", "red");
    } else {
      star.classList.add("fa-regular", "fa-star", "red");
    }

    stars.push(star);
  }
  return stars;
}