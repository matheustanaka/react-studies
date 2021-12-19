import "./CustomButton.scss";

const CustomButton = ({ onClick, children }) => {
    <div className="custom-button-container" onclick={onClick}>
        {children}
    </div>;
};

export default CustomButton;
