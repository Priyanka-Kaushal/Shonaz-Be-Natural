import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const BreadcrumbsNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" onClick={() => navigate("/")}>
        Home
      </Link>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Typography color="text.primary" key={to}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Typography>
        ) : (
          <Link
            underline="hover"
            color="inherit"
            onClick={() => navigate(to)}
            key={to}
          >
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadcrumbsNav;

