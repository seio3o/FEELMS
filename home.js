function changeContent() {
    const content = document.getElementById("content");
    const menu = document.getElementById("menu").value;

    const contentData = {
        about: "<h2>About FEELMS</h2><p>FEELMS is a website that recommends movies based on moods. Users can input their feelings or desired emotions, and the website suggests films that match their current state of mind. The goal is to provide a personalized and enjoyable movie-watching experience, helping users find the perfect film for any mood.</p>",
        request: "<h2>Request a Movie</h2><p>Submit a request for a movie to be added to our database.</p>,<p>Coming soon!</p>",
        changelogs: `
            <h2>Changelogs</h2>
            <p>View the latest updates and improvements to FEELMS.</p>
            <ul>
                <li><strong>v1.0 - March 6, 2025</strong>
                    <ul>
                        <li>Website launched with mood-based movie recommendations.</li>
                    </ul>
                </li>
            </ul>

            <ul>
                <li><strong>v1.1 - March 22, 2025</strong>
                    <ul>
                        <li>Added changeable region watch providers.</li>
                        <li>Added more films to lists.</li>
                    </ul>
                </li>
            </ul>
        `,
        acknowledgements: "<h2>Acknowledgements</h2><p>Thank you for visiting this website! I hope this website may help you to watch films. <br><br> Thank you to Pitchang for supporting me in anything. <3 <br><br> - Kai <br><br> Long live Cinema.</p>"
    };

    content.innerHTML = contentData[menu];
}

