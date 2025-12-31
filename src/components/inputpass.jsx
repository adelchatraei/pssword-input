import { useState } from "react";
import eyeShow from "../assets/image/eye-show.svg";
import eyeHidden from "../assets/image/eye-hidden.svg";

const Inputpass = () => {
    const [icon, SetIcon] = useState(eyeHidden);
    const [type, SetType] = useState("password");
    const [toggle, SetToggle] = useState(true);

    function handleClick() {
        SetToggle((previousValue) => !previousValue);

        toggle
            ? SetIcon(eyeHidden) & SetType("password")
            : SetIcon(eyeShow) & SetType("text");
    }
    return (
        <div className="flex m-2 bg-gray-200 w-fit  py-1.5 px-4 rounded-full ">
            <input
                type={type}
                placeholder="Enter your Password..."
                className="outline-none"
            />
            <img
                src={icon}
                alt=""
                onClick={handleClick}
                className="w-5 hover:cursor-pointer"
            />
        </div>
    );
};

export default Inputpass;
