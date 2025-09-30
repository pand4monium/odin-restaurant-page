export const loadHome = () => {
    const pageContent = document.getElementById("content");
    content.innerHTML = `
    <div id="res-name">PANDA Restaurant</div>
    <div id="res-descript">
        PANDA Restaurant is famous for the many food options it is able to provide. 
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio voluptate eius velit sapiente nulla quis obcaecati ratione blanditiis dolore sed? Obcaecati aspernatur enim autem natus! Nulla magnam id cum temporibus.</div>
    <div id="res-hours">
        <span class="title">Opening Hours</span>
        <table>
            <tr>
                <th>Day</th>
                <th>Hours</th>
            </tr>
            <tr>
                <td>Monday</td>
                <td>CLOSED</td>
            </tr>
            <tr>
                <td>Tuesday</td>
                <td>0830-2130</td>
            </tr>
            <tr>
                <td>Wednesday</td>
                <td>0830-2130</td>
            </tr>
            <tr>
                <td>Thursday</td>
                <td>0830-2130</td>
            </tr>
            <tr>
                <td>Friday</td>
                <td>0830-2130</td>
            </tr>
            <tr>
                <td>Saturday</td>
                <td>1000-2300</td>
            </tr>
            <tr>
                <td>Sunday</td>
                <td>1000-2300</td>
            </tr>
        </table>
    </div>
    <div id="res-location">
        <span class="title">Location</span>
        <span>314 Panda Lane, S159265</span>
    </div>
    `
}
