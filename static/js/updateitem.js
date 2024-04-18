

const btnDownProduct = document.querySelector('#product-down');

btnDownProduct.addEventListener('click', () => {

    const productItem = document.querySelector('.checkout .checkout__content .order-detail .order-detail-content');
    productItem.classList.toggle('click');
})