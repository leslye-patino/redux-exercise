import React from "react";
import {render} from '@testing-library/react'
import ComponentA from "./ComponentA";

//case only to ensure a correct instalation 
it("renders without crashing", () => {
    const {container} = render(<ComponentA />);
    expect(container).toBeTruthy()
});

