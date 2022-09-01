import React from 'react';

import "./Sidebar.scss";
import CreateEventButton from "../../components/CreateEventButton/CreateEventButton";

function Sidebar() {
    return (
        <aside className="sidebar">
            <CreateEventButton/>
        </aside>
    );
}

export default Sidebar;