'use strict';

document.addEventListener("DOMContentLoaded", () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = document.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if(newFilm.length > 21){
                newFilm = `${newFilm.slice(0,22)}...`;
            };
            
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        };

        event.target.reset();

    });

    const deleteAdv = (arr) => {
        arr.forEach(i => i.remove());
    };

    const makeChanged = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("./img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = '';

        films.forEach((film, i) => {
            parent.innerHTML += `   
        <li class="promo__interactive-item">
        ${i + 1} ${film}
            <div class="delete"></div>
        </li>
        `;
        });
    };


    deleteAdv(adv);
    makeChanged();
    sortArr(movieDB.movies);
    createMovieList(movieDB.movies, movieList);



});














