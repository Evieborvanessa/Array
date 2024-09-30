import { click } from "@testing-library/user-event/dist/click";

function ClickMe () {
    const onUserClick = () => console.log ("Clicked");
    return <button onClick={onUserClick}>Click me</button>;
}
export default click