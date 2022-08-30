import { useState } from "react";
import { BurgerButton } from "../../atoms/BurgerButton";

export const MenuBurger = () => {
    const [openMenu, setOpen] = useState(false);
    const onClose = () => setOpen(false);
    return (
      <>
        {!openMenu && (
          <BurgerButton
            isOpen={openMenu}
            onClick={() => setOpen((prev) => !prev)}
          />
        )}
  
        {openMenu && (
          <div className="menu-bar">
            <BurgerButton
              isOpen={openMenu}
              onClick={() => setOpen((prev) => !prev)}
            />
            <nav className="headernav">
              <ul>
                
            
              </ul>
            </nav>
            
          </div>
        )}
      </>
    );
  };
  