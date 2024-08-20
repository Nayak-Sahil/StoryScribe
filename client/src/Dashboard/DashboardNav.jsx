import React from "react";
import { NavLink } from "react-router-dom";

export default function DashboardNav({ listData, isMobileNav }) {
  return (
    <NavLink
      to={`${listData.link}`}
      className={({ isActive }) => `flex items-center gap-3 rounded-lg ${isMobileNav ? "px-2 py-2 text-sm" : "px-3 py-3"}  ${
          isActive ? "text-primary bg-muted" : "text-muted-foreground"
        } transition-all hover:text-primary`}
    end>
      {listData.icon}
      {listData.title}
    </NavLink>
  );
}
