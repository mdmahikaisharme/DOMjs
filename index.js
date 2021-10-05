// ----- ----- CONST ----- -----

// ----- ----- $ ----- -----
function DOM(ele = "div") {
    // Tag
    this.tag = ele;

    // Get Element
    this.$ = ((ele) => {
        const $ele = document.querySelector(ele);
        return $ele;
    })(ele);

    // Create Element
    this.create = (tagName) => {
        this.$ = document.createElement(tagName || this.tag);
        return this;
    };

    // Create Text
    this.createTxt = (textNode) => {
        this.$ = document.createTextNode(textNode || this.tag);
        return this;
    };

    // Inner Html
    this.html = (html) => {
        if (!html) {
            return this.$.innerHTML;
        }
        this.$.innerHTML = html;
        return this;
    };

    // Inner Text
    this.txt = (text) => {
        if (!text) {
            return this.$.innerHTML;
        }
        this.$.innerText = text;
        return this;
    };

    // On
    this.on = (name, callback) => {
        const eventName = "on" + name;
        this.$[eventName] = callback;
        return this;
    };

    // Attribute
    this.attr = (key, value) => {
        // key === object
        if (typeof key === "object") {
            for (let value in key) {
                this.attr(value, key[value]);
            }
        }

        // get attribute
        if (!value) {
            return this.$.getAttribute(key);
        }

        // set attribute
        this.$.setAttribute(key, value);
        return this;
    };

    // CSS
    this.css = (key, value) => {
        // key === object
        if (typeof key === "object") {
            for (let i in key) {
                this.css(i, key[i]);
            }
            return this;
        }

        // get css
        if (!value) {
            return this.$.style[key];
        }

        // set css
        this.$.style[key] = value;
        return this;
    };

    // Add
    this.add = (child) => {
        // created by DOMjs
        if (child.$) {
            this.$.append(child.$);
        } else {
            this.$.append(child);
        }
        return this;
    };

    // Remove
    this.remove = () => this.$.remove();

    // Replace
    this.replace = (ele) => {
        // created by DOMjs
        if (ele.$) {
            this.$.replaceWith(ele.$);
        } else {
            this.$.replaceWith(ele);
        }
        return this;
    };

    return this;
}

export default function (tag) {
    return new DOM(tag);
}
