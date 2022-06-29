import React from "react";

const Header = () => {

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Project Manager</a>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                Log in
                </button>
            </div>
        </div>
    )
}

export default Header;
