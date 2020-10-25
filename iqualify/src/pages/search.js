import React, { Component } from "react";

export default class search extends Component {
  render() {
    return (
      <div>
        <form>
          <section class="input-container">
            <label>
              <input type="text" placeholder="input–1" name="product_name" />
              <span>input–1</span>
            </label>
          </section>

          <fieldset>
            <input type="radio" name="radio1" id="radio-1" value="radio-1" />
            <label for="radio-1">radio–1</label>

            <input
              type="radio"
              name="radio1"
              id="radio-2"
              value="radio-2"
              checked="checked"
            />
            <label for="radio-2">radio–2</label>

            <input type="radio" name="radio1" id="radio-3" value="radio-3" />
            <label for="radio-3">radio–3</label>
          </fieldset>
        </form>
      </div>
    );
  }
}
