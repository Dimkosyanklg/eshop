import React from "react";
import styled from "styled-components";

const SidebarContent = styled.div`
    background-color: rgb(250, 234, 204);
    position: absolute;
    right: 0;
    top: 0;
    width: 20%;
    height: 50%;
    box-sizing: border-box;
`;

const Sidebar = () =>(
    <SidebarContent>
        Тут должен быть какой-то сайдбар
    </SidebarContent>
)

export default Sidebar;
