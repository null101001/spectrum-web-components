/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import baseStyles from './src/spectrum-base.css.js';
import langBaseStyles from './src/spectrum-lang.css.js';
import langOverrides from './src/lang-overrides.css.js';
import headingBaseStyles from './src/spectrum-heading.css.js';
import headingOverrides from './src/heading-overrides.css.js';

import { css } from 'lit';

const langStyles = css`
    ${langBaseStyles}
    ${langOverrides}
`;

const headingStyles = css`
    ${headingBaseStyles}
    ${headingOverrides}
`;

export default [baseStyles, langStyles, headingStyles];
