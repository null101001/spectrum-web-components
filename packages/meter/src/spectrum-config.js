// @ts-check
/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import {
    builder,
    converterFor,
} from '../../../tasks/process-spectrum-utils.js';

const converter = converterFor('spectrum-ProgressBar');

/**
 * @type { import('../../../tasks/spectrum-css-converter').SpectrumCSSConverter }
 */
const config = {
    conversions: [
        {
            inPackage: '@spectrum-css/progressbar',
            outPackage: 'meter',
            fileName: 'progress-bar',
            components: [
                converter.classToHost(),
                converter.classToClass('spectrum-ProgressBar-track'),
                converter.classToClass('spectrum-ProgressBar-fill'),
                converter.classToClass('spectrum-ProgressBar-label'),
                converter.classToClass('spectrum-ProgressBar-percentage'),
                converter.classToAttribute(
                    'spectrum-ProgressBar--sideLabel',
                    'side-label'
                ),
                converter.classToAttribute(
                    'spectrum-ProgressBar--indeterminate'
                ),
                ...converter.enumerateAttributes(
                    [
                        ['spectrum-ProgressBar--staticBlack', 'black'],
                        ['spectrum-ProgressBar--staticWhite', 'white'],
                    ],
                    'static-color'
                ),
            ],
            excludeByComponents: [
                builder.class('spectrum-Meter--sizeS'),
                builder.class('spectrum-Meter--sizeL'),
            ],
        },
        {
            inPackage: '@spectrum-css/meter',
            outPackage: 'meter',
            fileName: 'meter',
            components: [
                converter.classToHost(),
                converter.classToHost('spectrum-Meter'),
                ...converter.enumerateAttributes(
                    [
                        ['spectrum-Meter--sizeS', 's'],
                        ['spectrum-Meter--sizeL', 'l'],
                    ],
                    'size'
                ),
                ...converter.enumerateAttributes(
                    [
                        ['is-positive', 'positive'],
                        ['is-notice', 'notice'],
                        ['is-negative', 'negative'],
                    ],
                    'variant'
                ),
            ],
        },
        {
            inPackage: '@spectrum-css/meter',
            outPackage: 'meter',
            fileName: 'meter',
            components: [
                converter.classToHost(),
                converter.classToHost('spectrum-Meter'),
                ...converter.enumerateAttributes(
                    [
                        ['spectrum-Meter--sizeS', 's'],
                        ['spectrum-Meter--sizeL', 'l'],
                    ],
                    'size'
                ),
                ...converter.enumerateAttributes(
                    [
                        ['is-positive', 'positive'],
                        ['is-notice', 'notice'],
                        ['is-negative', 'negative'],
                    ],
                    'variant'
                ),
            ],
        },
    ],
};

export default config;
