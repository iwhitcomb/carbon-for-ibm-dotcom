/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit-element';
import readme from './README.stories.mdx';
import textNullable from '../../../../.storybook/knob-text-nullable';
import '../tabs-extended';
import '../tabs-extended-tab';
// import 'carbon-web-components/es/components/tabs/tabs';
// import 'carbon-web-components/es/components/tabs/tab';

export const Default = ({ parameters }) => {
  const { heading } =
    parameters?.props?.TabsExtended ?? {};
  return html`
    <dds-tabs-extended trigger-content="Select an item" value="Bar" size="" type="">
      <dds-tabs-extended-tab id="tab-foo" target="panel-foo" value="Foo" role="listitem" selected="" type="">Foo</dds-tabs-extended-tab>
      <dds-tabs-extended-tab id="tab-bar" target="panel-bar" value="Bar" role="listitem" selected="" type="">Bar</dds-tabs-extended-tab>
    </dds-tabs-extended>
    <div class="bx-ce-demo-devenv--tab-panels">
      <div id="panel-foo" role="tabpanel" aria-labelledby="tab-foo" hidden="">Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</div>
      <div id="panel-bar" role="tabpanel" aria-labelledby="tab-bar" hidden="">Etiam porta sem malesuada magna mollis euismod.</div>
    </div>
  `;
};

Default.story = {
  parameters: {
    gridContentClasses: 'dds-ce-demo-devenv--simple-grid--tabs-extended',
  },
};

export default {
  title: 'Components/Tabs extended',
  decorators: [
    (story, { parameters }) => html`
      <div class="dds-ce-demo-devenv--simple-grid ${parameters.gridContentClasses}">
        ${story()}
      </div>
    `,
  ],
  parameters: {
    ...readme.parameters,
    hasVerticalSpacingInComponent: true,
    hasGrid: true,
    knobs: {
      TabsExtended: () => ({
        heading: textNullable('Heading (heading):', 'Aliquam condimentum'),
      }),
    },
  },
};
