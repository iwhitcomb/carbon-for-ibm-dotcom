/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { customElement } from 'lit-element';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import BXTab from 'carbon-web-components/es/components/tabs/tab';
import styles from './tabs-extended.scss';
import StableSelectorMixin from '../../globals/mixins/stable-selector';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * A component to present tabbed content.
 *
 * @element dds-tabs-extended-tab
 */
@customElement(`${ddsPrefix}-tabs-extended-tab`)
class DDSTabsExtendedTab extends StableSelectorMixin(BXTab) {
  static styles = styles;
}

export default DDSTabsExtendedTab;
