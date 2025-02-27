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
import { RSComponent } from '@rsmdc/base/component';
import { RSRipple } from '@rsmdc/ripple/component';
import { cssClasses, strings } from './constants';
import { RSFixedTopAppBarFoundation } from './fixed/foundation';
import { RSShortTopAppBarFoundation } from './short/foundation';
import { RSTopAppBarFoundation } from './standard/foundation';
import { connectableObservableDescriptor } from "../../../Library/Caches/typescript/3.3/node_modules/rxjs/internal/observable/ConnectableObservable";
var RSTopAppBar = /** @class */ (function (_super) {
    tslib_1.__extends(RSTopAppBar, _super);
    function RSTopAppBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RSTopAppBar.attachTo = function (root) {
        return new RSTopAppBar(root);
    };
    RSTopAppBar.prototype.initialize = function (rippleFactory) {
        if (rippleFactory === void 0) { rippleFactory = function (el) { return RSRipple.attachTo(el); }; }
        this.navIcon_ = this.root_.querySelector(strings.NAVIGATION_ICON_SELECTOR);
        // Get all icons in the toolbar and instantiate the ripples
        var icons = [].slice.call(this.root_.querySelectorAll(strings.ACTION_ITEM_SELECTOR));
        if (this.navIcon_) {
            icons.push(this.navIcon_);
        }
        this.iconRipples_ = icons.map(function (icon) {
            var ripple = rippleFactory(icon);
            ripple.unbounded = true;
            return ripple;
        });
        this.scrollTarget_ = window;
    };
    RSTopAppBar.prototype.destroy = function () {
        this.iconRipples_.forEach(function (iconRipple) { return iconRipple.destroy(); });
        _super.prototype.destroy.call(this);
    };
    RSTopAppBar.prototype.setScrollTarget = function (target) {
        // Remove scroll handler from the previous scroll target
        this.foundation_.destroyScrollHandler();
        this.scrollTarget_ = target;
        // Initialize scroll handler on the new scroll target
        this.foundation_.initScrollHandler();
    };
    RSTopAppBar.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<RSFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            setStyle: function (property, value) { return _this.root_.style.setProperty(property, value); },
            getTopAppBarHeight: function () { return _this.root_.clientHeight; },
            registerNavigationIconInteractionHandler: function (evtType, handler) {
                if (_this.navIcon_) {
                    _this.navIcon_.addEventListener(evtType, handler);
                }
            },
            deregisterNavigationIconInteractionHandler: function (evtType, handler) {
                if (_this.navIcon_) {
                    _this.navIcon_.removeEventListener(evtType, handler);
                }
            },
            notifyNavigationIconClicked: function () { return _this.emit(strings.NAVIGATION_EVENT, {}); },
            registerScrollHandler: function (handler) { return _this.scrollTarget_.addEventListener('scroll', handler); },
            deregisterScrollHandler: function (handler) { return _this.scrollTarget_.removeEventListener('scroll', handler); },
            registerResizeHandler: function (handler) { return window.addEventListener('resize', handler); },
            deregisterResizeHandler: function (handler) { return window.removeEventListener('resize', handler); },
            getViewportScrollY: function () {
                var win = _this.scrollTarget_;
                var el = _this.scrollTarget_;
                return win.pageYOffset !== undefined ? win.pageYOffset : el.scrollTop;
            },
            getTotalActionItems: function () { return _this.root_.querySelectorAll(strings.ACTION_ITEM_SELECTOR).length; },
        };
        // tslint:enable:object-literal-sort-keys
        var foundation;
        if (this.root_.classList.contains(cssClasses.SHORT_CLASS)) {
            foundation = new RSShortTopAppBarFoundation(adapter);
        }
        else if (this.root_.classList.contains(cssClasses.FIXED_CLASS)) {
            foundation = new RSFixedTopAppBarFoundation(adapter);
        }
        else {
            foundation = new RSTopAppBarFoundation(adapter);
        }
        return foundation;
    };
    return RSTopAppBar;
}(RSComponent));
export { RSTopAppBar };
//# sourceMappingURL=component.js.map