import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface NavigationButtonProps {
  label: string;
  to: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ label, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Button
      type="button" 
      variant="text"
      fullWidth
      sx={{ mb: 1 }}
      onClick={handleClick}
    >
      {label}
    </Button>
  );
};

export default NavigationButton;
