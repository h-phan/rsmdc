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
import { cssClasses } from '../constants';
import { RSTopAppBarFoundation } from '../standard/foundation';
var RSFixedTopAppBarFoundation = /** @class */ (function (_super) {
    tslib_1.__extends(RSFixedTopAppBarFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    function RSFixedTopAppBarFoundation(adapter) {
        var _this = _super.call(this, adapter) || this;
        /**
         * State variable for the previous scroll iteration top app bar state
         */
        _this.wasScrolled_ = false;
        _this.scrollHandler_ = function () { return _this.fixedScrollHandler_(); };
        return _this;
    }
    /**
     * Scroll handler for applying/removing the modifier class on the fixed top app bar.
     */
    RSFixedTopAppBarFoundation.prototype.fixedScrollHandler_ = function () {
        var currentScroll = this.adapter_.getViewportScrollY();
        if (currentScroll <= 0) {
            if (this.wasScrolled_) {
                this.adapter_.removeClass(cssClasses.FIXED_SCROLLED_CLASS);
                this.wasScrolled_ = false;
            }
        }
        else {
            if (!this.wasScrolled_) {
                this.adapter_.addClass(cssClasses.FIXED_SCROLLED_CLASS);
                this.wasScrolled_ = true;
            }
        }
    };
    return RSFixedTopAppBarFoundation;
}(RSTopAppBarFoundation));
export { RSFixedTopAppBarFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with RS Web v0.44.0 and earlier.
export default RSFixedTopAppBarFoundation;
//# sourceMappingURL=foundation.js.map