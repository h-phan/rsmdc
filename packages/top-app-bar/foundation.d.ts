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
import { RSFoundation } from '@rsmdc/base/foundation';
import { SpecificEventListener } from '@rsmdc/base/types';
import { RSTopAppBarAdapter } from './adapter';
export declare class RSTopAppBarBaseFoundation extends RSFoundation<RSTopAppBarAdapter> {
    static readonly strings: {
        ACTION_ITEM_SELECTOR: string;
        NAVIGATION_EVENT: string;
        NAVIGATION_ICON_SELECTOR: string;
        ROOT_SELECTOR: string;
        TITLE_SELECTOR: string;
    };
    static readonly cssClasses: {
        FIXED_CLASS: string;
        FIXED_SCROLLED_CLASS: string;
        SHORT_CLASS: string;
        SHORT_COLLAPSED_CLASS: string;
        SHORT_HAS_ACTION_ITEM_CLASS: string;
    };
    static readonly numbers: {
        DEBOUNCE_THROTTLE_RESIZE_TIME_MS: number;
        MAX_TOP_APP_BAR_HEIGHT: number;
    };
    /**
     * See {@link RSTopAppBarAdapter} for typing information on parameters and return types.
     */
    static readonly defaultAdapter: RSTopAppBarAdapter;
    protected scrollHandler_?: SpecificEventListener<'scroll'>;
    protected resizeHandler_?: SpecificEventListener<'resize'>;
    private readonly navClickHandler_;
    constructor(adapter?: Partial<RSTopAppBarAdapter>);
    init(): void;
    destroy(): void;
    initScrollHandler(): void;
    destroyScrollHandler(): void;
    private initResizeHandler_;
    private destroyResizeHandler_;
}
export default RSTopAppBarBaseFoundation;
