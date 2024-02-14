// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";
import ContainerComponent from "@/chunk/containerComponent";
import TitleComponent from "@/chunk/titleComponent";
import ButtonComponent from "@/chunk/buttonComponent";
import DropdownComponent from "@/chunk/dropdown/dropdownComponent";
import DropDownLinkComponent from "@/chunk/dropdown/dropdownLinkComponent";

// Creating and exporting header component as default
export default function HeaderComponent():ReactNode {
  // Returning JSX
  return (
    <header className="bg-darkBg fixed top-0 left-0 w-full z-20">
      <ContainerComponent size="large" className="flex items-center justify-between gap-[20px]">
        <TitleComponent noMargin tier={1} theme="dark">WatchLog</TitleComponent>
        <div className="flex items-center justify-between gap-[20px]">
          <ButtonComponent link="/login">Log In</ButtonComponent>
          <DropdownComponent title="Links">
            <DropDownLinkComponent link="#">Link 1</DropDownLinkComponent> 
            <DropDownLinkComponent link="#">Link 2</DropDownLinkComponent>
            <DropDownLinkComponent link="#">Link 3</DropDownLinkComponent>
          </DropdownComponent>
        </div>
      </ContainerComponent>
    </header>
  );
}
