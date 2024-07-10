/*
 * Copyright (c) 2024 Sergio RD
 * 
 * This software includes code licensed under the MIT License.
 * For more information, see the LICENSE file in the root directory of this repository.
 */

import { commentConfig } from "./commentConfig";
import { forumConfig } from "./forumConfig"
import { postConfig } from "./postConfig";
import { subforumConfig } from "./subforumConfig";

export const entityConfig = (entityName) => {
    let config;

    switch (entityName) {
        case 'forums':
            config = forumConfig;
            break;
        case 'subforums':
            config = subforumConfig;
            break;
            case 'posts':
            config = postConfig;
            break;
            case 'comments':
            config = commentConfig;
            break;
        default:
            config = {};
            break;
    }

    return { config };
};
