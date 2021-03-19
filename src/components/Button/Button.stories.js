/* eslint-disable */
import React from "react";
import Button from "./Button";
import "./Button.css";
// import { actions } from "@storybook/addon-actions";

export default {
  title: "Button",
  component: Button,
};

export const Red = () => {
  return <Button variant="red">This is a Button for english</Button>;
};

export const Blue = () => {
  return <Button variant="blue">Blue</Button>;
};
