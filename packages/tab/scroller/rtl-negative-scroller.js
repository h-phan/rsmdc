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
import * as tslib_1 from "tslib";
import { RSTabScrollerRTL } from './rtl-scroller';
var RSTabScrollerRTLNegative = /** @class */ (function (_super) {
    tslib_1.__extends(RSTabScrollerRTLNegative, _super);
    function RSTabScrollerRTLNegative() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RSTabScrollerRTLNegative.prototype.getScrollPositionRTL = function (translateX) {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        return Math.round(translateX - currentScrollLeft);
    };
    RSTabScrollerRTLNegative.prototype.scrollToRTL = function (scrollX) {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(-scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft,
        };
    };
    RSTabScrollerRTLNegative.prototype.incrementScrollRTL = function (scrollX) {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft,
        };
    };
    RSTabScrollerRTLNegative.prototype.getAnimatingScrollPosition = function (scrollX, translateX) {
        return scrollX - translateX;
    };
    RSTabScrollerRTLNegative.prototype.calculateScrollEdges_ = function () {
        var contentWidth = this.adapter_.getScrollContentOffsetWidth();
        var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
        return {
            left: rootWidth - contentWidth,
            right: 0,
        };
    };
    RSTabScrollerRTLNegative.prototype.clampScrollValue_ = function (scrollX) {
        var edges = this.calculateScrollEdges_();
        return Math.max(Math.min(edges.right, scrollX), edges.left);
    };
    return RSTabScrollerRTLNegative;
}(RSTabScrollerRTL));
export { RSTabScrollerRTLNegative };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with RS Web v0.44.0 and earlier.
export default RSTabScrollerRTLNegative;
//# sourceMappingURL=rtl-negative-scroller.js.map