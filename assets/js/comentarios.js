let reviewCount = 27;
let totalRating = reviewCount * 5; 
let selectedRating = 5; 

document.querySelectorAll("#star-rating span").forEach(star => {
    star.addEventListener("click", () => {
        selectedRating = parseInt(star.getAttribute("data-value"));
        updateStars(selectedRating);
    });
});

function updateStars(rating) {
    document.querySelectorAll("#star-rating span").forEach(star => {
        if (parseInt(star.getAttribute("data-value")) <= rating) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });
}

function addComment() {
    const commentInput = document.getElementById("comment-input");
    const commentsSection = document.getElementById("comments-section");

    if (commentInput.value.trim() !== "") {
        
        const newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.innerHTML = `<span class="user">Usuário</span> ${"★".repeat(selectedRating)}
                                <p>${commentInput.value}</p>`;

       
        commentsSection.appendChild(newComment);
        

        
        reviewCount++;
        totalRating += selectedRating;
        const averageRating = (totalRating / reviewCount).toFixed(1);

       
        document.getElementById("review-count").textContent = reviewCount;
        document.getElementById("average-rating").textContent = averageRating;

        
        commentInput.value = "";
        
        
        selectedRating = 5;
        updateStars(selectedRating);
    }
}

updateStars(selectedRating);
