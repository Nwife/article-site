import { useLocation } from "react-router-dom";
export default function Contact() {
    const queryString = useLocation().search;
    console.log(queryString);

    const queryParams = new URLSearchParams(queryString);
    const name = queryParams.get("name");
    return (
        <div>
            <h2>Hey {name}, Contact us here...</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iste exercitationem eveniet non voluptates possimus, consequatur cum obcaecati est laboriosam quos velit perferendis nemo veritatis facilis explicabo voluptatum blanditiis cupiditate!</p>
        </div>
    )
}
