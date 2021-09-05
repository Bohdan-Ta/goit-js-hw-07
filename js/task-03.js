const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
];
const galleryImg = document.querySelector(`#gallery`);

const getGallery = options => {
  return options.map(({ url, alt }) => {
    return `<li><img src="${url}" alt="${alt}" width="420px" height="250px"><li>`}).join("")
};

galleryImg.insertAdjacentHTML('afterbegin', getGallery(images));

galleryImg.style.listStyle = 'none';
galleryImg.style.display = 'flex';
galleryImg.style.justifyContent = 'space-around';