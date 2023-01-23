import React from "react";
import { render, screen } from "@testing-library/react";
import Render from "./Render";

describe("存在の確認テスト", () => {
    it("Should render all the elements correctly", () => {
        render(<Render></Render>);
        screen.debug();
    });
});
