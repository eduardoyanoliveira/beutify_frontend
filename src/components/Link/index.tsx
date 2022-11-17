import { LinkLabel } from "./styles";

interface IProps {
    to: string,
    text: string
};

const LinkComponent = ({ to, text} : IProps) => {
    return(
        <LinkLabel to={to}>{text}</LinkLabel>        
    );
};

export default LinkComponent;