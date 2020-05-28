import React, { useState, useEffect } from "react";
import TopBar from "Components/Layout/TopBar";
import FooterMenu from "Components/Layout/FooterMenu";
import Content from "Components/Data Display/Content";
import useWindowResize from "Hooks/useWindowResize";

export default function App() {
    const windowDimensions = useWindowResize();

    return (
        <React.Fragment>
            <TopBar />
            <Content />
            <FooterMenu
                menuItems={[
                    {
                        text: "Rendered at: " + windowDimensions.width + "x" + windowDimensions.height + "!",
                    },
                ]}
            />
        </React.Fragment>
    );
}
