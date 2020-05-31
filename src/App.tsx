import React from "react";
import ResumePage from "Components/Layout/ResumePage";
import { ThemeProvider } from "@material-ui/core/styles";
import { CrownTheme } from "Themes/Themes";
import ConditionalWrapper from "Components/Util/ConditionalWrapper";

const useCustomTheme = true;

// TODO: Flesh out theme, especially contrast colors, and make all sub components use them

export default function App() {
    return (
        <ConditionalWrapper condition={useCustomTheme} wrapper={(children: React.ReactNode) => <ThemeProvider theme={CrownTheme}>{children}</ThemeProvider>}>
            <ResumePage />
        </ConditionalWrapper>
    );
}
