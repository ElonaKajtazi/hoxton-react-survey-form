import { useState } from "react";

function Main() {
  // State for the challenge #3
  const [open, setOpen] = useState(false);

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <h3>
            What would you say that are the best features of your rubber duck?
          </h3>
          <ul>
            <li>
              <input
                type="checkbox"
                name="best-features"
                id="best-worst-feauters-1"
              />
              <label htmlFor="best-feauters-1">It's yellow!</label>
            </li>
            <li>
              <input
                type="checkbox"
                name="best-features"
                id="best-feauters-2"
              />
              <label htmlFor="best-feauters-2">It squeaks! </label>
            </li>
            <li>
              <input
                type="checkbox"
                name="best-features"
                id="best-feauters-3"
              />
              <label htmlFor="best-feauters-3">It has a logo </label>
            </li>
            <li>
              <input
                type="checkbox"
                name="best-features"
                id="best-feauters-4"
              />
              <label htmlFor="best-feauters-4">It's big!</label>
            </li>
          </ul>
          <h3>
            What would you say that are the worst bits of your rubber duck?
          </h3>
          <ul>
            <li>
              <input
                type="checkbox"
                name="worst-features"
                id="worst-feauters-1"
              />
              <label htmlFor="worst-feauters-1">It's yellow!</label>
            </li>
            <li>
              <input
                type="checkbox"
                name="worst-features"
                id="worst-feauters-2"
              />
              <label htmlFor="worst-feauters-2">It squeaks! </label>
            </li>
            <li>
              <input
                type="checkbox"
                name="worst-features"
                id="worst-feauters-3"
              />
              <label htmlFor="worst-feauters-3">It has a logo </label>
            </li>
            <li>
              <input
                type="checkbox"
                name="worst-features"
                id="worst-feauters-4"
              />
              <label htmlFor="worst-feauters-4">It's big!</label>
            </li>
          </ul>
          <h3>How do you rate your rubber duck consistency? </h3>
          <ul className="form__group radio">
            <li>
              <input type="radio" name="consistency" id="consistency-1" />
              <label htmlFor="consistency-1">1</label>
            </li>
            <li>
              <input type="radio" name="consistency" id="consistency-2" />
              <label htmlFor="consistency-2">2</label>
            </li>
            <li>
              <input type="radio" name="consistency" id="consistency-3" />
              <label htmlFor="consistency-3">3</label>
            </li>
            <li>
              <input type="radio" name="consistency" id="consistency-4" />
              <label htmlFor="consistency-4">4</label>
            </li>
          </ul>
          <h3>How do you rate your rubber duck colour?</h3>
          <ul className="form__group radio">
            <li>
              <input type="radio" name="colour" id="colour-1" />
              <label htmlFor="colour-1">1</label>
            </li>
            <li>
              <input type="radio" name="colour" id="colour-2" />
              <label htmlFor="colour-2">2</label>
            </li>
            <li>
              <input type="radio" name="colour" id="colour-3" />
              <label htmlFor="colour-3">3</label>
            </li>
            <li>
              <input type="radio" name="colour" id="colour-4" />
              <label htmlFor="colour-4">4</label>
            </li>
          </ul>
          <h3>How do you rate your rubber duck logo?</h3>
        </form>
      </section>
    </main>
  );
}

export default Main;
