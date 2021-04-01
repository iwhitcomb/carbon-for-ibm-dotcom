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
import BXTabs from 'carbon-web-components/es/components/tabs/tabs';
import styles from './tabs-extended.scss';
import StableSelectorMixin from '../../globals/mixins/stable-selector';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * A component to present tabbed content.
 *
 * @element dds-tabs-extended
 */
@customElement(`${ddsPrefix}-tabs-extended`)
class DDSTabsExtended extends StableSelectorMixin(BXTabs) {
  /**
   * A selector that will return tabs.
   */
  static get selectorItem() {
    return `${ddsPrefix}-tabs-extended-tab`;
  }

  /**
   * A selector that will return enabled tabs.
   */
  static get selectorItemEnabled() {
    return `${ddsPrefix}-tabs-extended-tab:not([disabled])`;
  }

  /**
   * A selector that will return highlighted tabs.
   */
  static get selectorItemHighlighted() {
    return `${ddsPrefix}-tabs-extended-tab[highlighted]`;
  }

  /**
   * A selector that will return selected tabs.
   */
  static get selectorItemSelected() {
    return `${ddsPrefix}-tabs-extended-tab[selected]`;
  }
  static styles = styles;
}

export default DDSTabsExtended;
