// const search = document.getElementById('header-search');
//         search.addEventListener('focus', () => {
//             console.log("alo")
//             const searchArea = document.getElementById('searchArea');
//             searchArea.style.transform = 'translateY(-11%)';
//         })
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        const search = document.getElementById('header-search');
        search.addEventListener('focus', () => {
            console.log("alo")
            const searchArea = document.getElementById('searchArea');
            searchArea.style.transform = 'translateY(-11%)';
        })
    }
    else {
        const search = document.getElementById('header-search');
        search.addEventListener('focus', () => {
            console.log("alo")
            const searchArea = document.getElementById('searchArea');
            searchArea.style.transform = 'translateY(0%)';
        })
    }
})

// search.addEventListener('focusout', () => {
//     const searchArea = document.getElementById('searchArea');
//     searchArea.style.transform = 'translateY(-150%)';
// })

const btnCloseSearch = document.getElementById('close-search');
btnCloseSearch.addEventListener('click', () => {
    const searchArea = document.getElementById('searchArea');
    searchArea.style.transform = 'translateY(-150%)';
})

//changeColorHeart

// const changeColorHeart = document.querySelectorAll('.heart');
// changeColorHeart.addEventListener('click', () => {
//     changeColorHeart.classList.toggle('red');
// })


// show more

const showMorebtn = document.querySelector('#show-more');
const moreRowTitle = document.querySelector('.show-more');

showMorebtn.addEventListener('click', () => {
    const showMorebtn = document.querySelector('#show-more');
    const moreRowTitle = document.querySelector('.show-more');
    const getHeight = getComputedStyle(moreRowTitle).height;


    if(getHeight == "0px") {
        moreRowTitle.style.height = "100%";
        showMorebtn.innerHTML = "Ẩn bớt..."
    }
    else {

        moreRowTitle.style.height = "0";
        showMorebtn.innerHTML = "Xem thêm..."
    }
});

