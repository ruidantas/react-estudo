import { useState } from "react";

export function Form() {
  const [newAnime, setNewAnime] = useState();
  function handleSubmit(event) {
    event.preventDefault();

    setNewAnime({...newAnime, characters: []})

   
  }
  console.log(newAnime)
  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form-input">
        <section>
          <span>title</span>
          <input
            type="text"
            name="title"
            onChange={(event) => {
              setNewAnime({ ...newAnime, title: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>protagonist</span>
          <input
            type="text"
            name="protagonist"
            onChange={(event) => {
              setNewAnime({ ...newAnime, protagonist: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>gender</span>
          <input
            type="text"
            name="gender"
            onChange={(event) => {
              setNewAnime({ ...newAnime, gender: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>year</span>
          <input type="text" name="year" onChange={(event) => {
              setNewAnime({ ...newAnime, year: event.target.value });
            }}></input>
        </section>
        <button type="submit" className="btn-submit">
          submit
        </button>
      </form>
    </div>
  );
}
