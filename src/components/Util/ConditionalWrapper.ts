import { FunctionComponent } from "react";

interface ConditionalWrapperProps {
    condition: Boolean;
    wrapper: Function;
}

const ConditionalWrapper: FunctionComponent<ConditionalWrapperProps> = ({ condition, wrapper, children }) => (condition ? wrapper(children) : children);

export default ConditionalWrapper;
