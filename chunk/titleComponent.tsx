// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";

// Defining type of prop
interface propsType {
  tier: 1 | 2 | 3;
  children: ReactNode;
  noMargin?: boolean;
}

// Creating and exporting the title component as default
export default function TitleComponent({tier, children, noMargin = false}:propsType):ReactNode {
  // Conditional rendering
  if (tier === 1) {
    return (
      <h1 
        data-has-margin={(noMargin === false)}
        className="lg:text-[18px] text-[14px] font-bold lg:data-[has-margin='true']:mb-[15px] data-[has-margin='true']:mb-[10px] text-lightText dark:text-darkText"
      >
        {children}
      </h1>
    );
  } else if (tier === 2) {
    return (
      <h3 
        data-has-margin={(noMargin === false)}
        className="lg:text-[14px] text-[12px] font-normal lg:data-[has-margin='true']:mb-[10px] data-[has-margin='true']:mb-[5px] text-lightText dark:text-darkText"
      >
        {children}
      </h3>
    );
  } else {
    return (
      <h6
        data-has-margin={(noMargin === false)}
        className="lg:text-[12px] text-[10px] font-light lg:data-[has-margin='true']:mb-[5px] data-[has-margin='true']:mb-[2px] text-lightText dark:text-darkText"
      >
        {children}
      </h6>
    );
  }
}
