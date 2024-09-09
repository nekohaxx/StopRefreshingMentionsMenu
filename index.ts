/**
 * Copyright (c) 2024 nekohaxx. All rights reserved.
 */

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "StopRefreshingMentionsMenu",
    description: "Prevents the mentions menu from refreshing constantly",
    authors: [Devs.nekohaxx],
    patches: [
        {
            find: "currentWordIsAtStart,",
            replacement: {
                match: /updateResults\(\){/,
                replace: "$&if(this.props.textValue==$self.lastTextValue)return;$self.lastTextValue=this.props.textValue;"
            },
        },
    ],
});
