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
import { RSFoundation } from '@rsmdc/base/foundation';
import { cssClasses, numbers, strings } from './constants';
var RSTopAppBarBaseFoundation = /** @class */ (function (_super) {
    tslib_1.__extends(RSTopAppBarBaseFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    function RSTopAppBarBaseFoundation(adapter) {
        var _this = _super.call(this, tslib_1.__assign({}, RSTopAppBarBaseFoundation.defaultAdapter, adapter)) || this;
        _this.navClickHandler_ = function () { return _this.adapter_.notifyNavigationIconClicked(); };
        return _this;
    }
    Object.defineProperty(RSTopAppBarBaseFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RSTopAppBarBaseFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RSTopAppBarBaseFoundation, "numbers", {
        get: function () {
            return numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RSTopAppBarBaseFoundation, "defaultAdapter", {
        /**
         * See {@link RSTopAppBarAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setStyle: function () { return undefined; },
                getTopAppBarHeight: function () { return 0; },
                registerNavigationIconInteractionHandler: function () { return undefined; },
                deregisterNavigationIconInteractionHandler: function () { return undefined; },
                notifyNavigationIconClicked: function () { return undefined; },
                registerScrollHandler: function () { return undefined; },
                deregisterScrollHandler: function () { return undefined; },
                registerResizeHandler: function () { return undefined; },
                deregisterResizeHandler: function () { return undefined; },
                getViewportScrollY: function () { return 0; },
                getTotalActionItems: function () { return 0; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    RSTopAppBarBaseFoundation.prototype.init = function () {
        this.initScrollHandler();
        this.initResizeHandler_();
        this.adapter_.registerNavigationIconInteractionHandler('click', this.navClickHandler_);
    };
    RSTopAppBarBaseFoundation.prototype.destroy = function () {
        this.destroyScrollHandler();
        this.destroyResizeHandler_();
        this.adapter_.deregisterNavigationIconInteractionHandler('click', this.navClickHandler_);
    };
    RSTopAppBarBaseFoundation.prototype.initScrollHandler = function () {
        if (this.scrollHandler_) {
            this.adapter_.registerScrollHandler(this.scrollHandler_);
        }
    };
    RSTopAppBarBaseFoundation.prototype.destroyScrollHandler = function () {
        if (this.scrollHandler_) {
            this.adapter_.deregisterScrollHandler(this.scrollHandler_);
        }
    };
    RSTopAppBarBaseFoundation.prototype.initResizeHandler_ = function () {
        if (this.resizeHandler_) {
            this.adapter_.registerResizeHandler(this.resizeHandler_);
        }
    };
    RSTopAppBarBaseFoundation.prototype.destroyResizeHandler_ = function () {
        if (this.resizeHandler_) {
            this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        }
    };
    return RSTopAppBarBaseFoundation;
}(RSFoundation));
export { RSTopAppBarBaseFoundation };
// tslint:disable-next-line:no-default-export Needed for backward compatibility with RS Web v0.44.0 and earlier.
export default RSTopAppBarBaseFoundation;
//# sourceMappingURL=foundation.js.map