/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
import { EventType, SpecificEventListener } from '@rsmdc/base/types';
/**
 * Defines the shape of the adapter expected by the foundation.
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 */
export interface RSTopAppBarAdapter {
    /**
     * Adds a class to the root Element.
     */
    addClass(className: string): void;
    /**
     * Removes a class from the root Element.
     */
    removeClass(className: string): void;
    /**
     * Returns true if the root Element contains the given class.
     */
    hasClass(className: string): boolean;
    /**
     * Sets the specified inline style property on the root Element to the given value.
     */
    setStyle(property: string, value: string): void;
    /**
     * Gets the height of the top app bar.
     */
    getTopAppBarHeight(): number;
    getViewportScrollY(): number;
    getTotalActionItems(): number;
    /**
     * Emits an event when the navigation icon is clicked.
     */
    notifyNavigationIconClicked(): void;
    /**
     * Registers an event handler on the navigation icon element for a given event.
     */
    registerNavigationIconInteractionHandler<K extends EventType>(type: K, handler: SpecificEventListener<K>): void;
    /**
     * Deregisters an event handler on the navigation icon element for a given event.
     */
    deregisterNavigationIconInteractionHandler<K extends EventType>(type: K, handler: SpecificEventListener<K>): void;
    registerScrollHandler(handler: SpecificEventListener<'scroll'>): void;
    deregisterScrollHandler(handler: SpecificEventListener<'scroll'>): void;
    registerResizeHandler(handler: SpecificEventListener<'resize'>): void;
    deregisterResizeHandler(handler: SpecificEventListener<'resize'>): void;
}
