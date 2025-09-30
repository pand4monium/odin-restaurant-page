export const loadAbout = () => {
    const aboutHTML = `
        <div id="about">
            <div class="title">About</div>
            <div>
                PANDA Restaurant is famous for the many food options it is able to provide. 
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio voluptate eius velit sapiente nulla quis obcaecati ratione blanditiis dolore sed? Obcaecati aspernatur enim autem natus! Nulla magnam id cum temporibus.
            </div>
        </div>

        <div id="contact-us">
            <div class="title">Contact Us</div>
            <div>+65 6314 1592</div>
            <div>PANDA-restaurant6536@panda.com</div>
        </div>
    `;

    const pageContent = document.getElementById("content");
    pageContent.innerHTML = aboutHTML;
}