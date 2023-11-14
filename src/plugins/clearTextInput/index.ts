/*
 * Vencord, a Discord client mod
 * Copyright (c) 2023 Vendicated, Board, and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs } from "@utils/constants";
import { insertTextIntoChatInputBox } from "@utils/discord";
import definePlugin from "@utils/types";

const clearInput = (e: KeyboardEvent) => {
    if (e.key === "Escape" && document.querySelector("[role='textbox']:focus")) {
        insertTextIntoChatInputBox(""); // If only this actually overwrote the text :/
    }
};

export default definePlugin({
    name: "ClearTextInput",
    description: "Clears the text input when you press escape",
    authors: [
        Devs.Board
    ],
    start() {
        document.addEventListener("keyup", clearInput);
    },
    stop() {
        document.removeEventListener("keyup", clearInput);
    },

});
