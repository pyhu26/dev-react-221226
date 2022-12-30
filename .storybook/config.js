import {configure} from "@storybook/react";

function loadStories(){
    require("../src/story/DynamicStory");
}

configure(loadStories, module);