/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, customElement, property, LitElement } from 'lit-element';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import styles from './tabs-extended.scss';
import StableSelectorMixin from '../../globals/mixins/stable-selector';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * The copy content of content item horizontal.
 *
 * @element dds-tab
 */
@customElement(`${ddsPrefix}-tab`)
class DDSTab extends StableSelectorMixin(LitElement) {
  /**
   * Defines label of the tab.
   */
  @property({ reflect: true })
  label = null;

  /**
   * Defines title of the tab.
   */
  @property({ reflect: true })
  title = null;

  /**
   * Defines the disabled state of the tab.
   */
  @property({ reflect: true })
  disabled = null;

  /**
   * Defines the disabled state of the tab.
   */
  @property({ reflect: true })
  active = false;

  /**
   * Defines the disabled state of the tab.
   */
  @property({ reflect: true })
  index = 0;

  render() {
    return html`
      <div class="tab-${this.index}-container" aria-hidden="${this.active}">
        <slot></slot>
      </div>
    `;
  }

  static get stableSelector() {
    return `${ddsPrefix}--tab`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default DDSTab;
