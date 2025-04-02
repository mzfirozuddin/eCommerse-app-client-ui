import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router-dom";
import { useAuthStore } from "@/store";

const Navbar = () => {
  const navigationMenuTriggerStyle =
    "group inline-flex h-10 w-max items-center justify-center px-2 py-2 text-sm font-medium hover:underline hover:bg-transparent focus:bg-accent focus:text-accent-foreground";

  const { user } = useAuthStore();

  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <>
      <nav className="flex items-center justify-end pr-6">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `bg-transparent ${isActive ? "text-gray-500" : ""}`
                }
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle}>
                  Home
                </NavigationMenuLink>
              </NavLink>
            </NavigationMenuItem>

            {!user ? (
              <>
                <NavigationMenuItem>
                  <NavLink
                    to="/auth/register"
                    className={({ isActive }) =>
                      `bg-transparent ${isActive ? "text-gray-500" : ""}`
                    }
                  >
                    <NavigationMenuLink className={navigationMenuTriggerStyle}>
                      Register
                    </NavigationMenuLink>
                  </NavLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavLink
                    to="/auth/login"
                    className={({ isActive }) =>
                      `bg-transparent ${isActive ? "text-gray-500" : ""}`
                    }
                  >
                    <NavigationMenuLink className={navigationMenuTriggerStyle}>
                      Login
                    </NavigationMenuLink>
                  </NavLink>
                </NavigationMenuItem>
              </>
            ) : (
              <NavigationMenuItem>
                <NavLink
                  to="/auth/login"
                  className={({ isActive }) =>
                    `bg-transparent ${isActive ? "text-gray-500" : ""}`
                  }
                >
                  <NavigationMenuLink
                    onClick={handleLogout}
                    className={navigationMenuTriggerStyle}
                  >
                    Logout
                  </NavigationMenuLink>
                </NavLink>
              </NavigationMenuItem>
            )}

            {user && user.role === "admin" ? (
              <NavigationMenuItem>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `bg-transparent ${isActive ? "text-gray-500" : ""}`
                  }
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle}>
                    Dashboard
                  </NavigationMenuLink>
                </NavLink>
              </NavigationMenuItem>
            ) : null}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </>
  );
};

export default Navbar;
