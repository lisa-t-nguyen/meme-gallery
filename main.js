var $gallery = document.querySelector('main');
var imageUrls = [
  'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://c.tenor.com/uYP_Nkq8VPsAAAAd/coding-hello-world.gif',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg',
  'https://static.fandomspot.com/images/05/6364/002-spongebob-work-from-home-meme.jpg',
  'https://cdn.vox-cdn.com/thumbor/9WQdjWjSF0bB0KYyBPcRXOZ1tL0=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/16204669/sb1.jpg',
  'https://www.liveabout.com/thmb/PBqAdL94ueTj9ij4I-OA7VSEU3Y=/768x710/filters:no_upscale():max_bytes(150000):strip_icc()/sub-buzz-31658-1467225297-1.png-5ae0b732642dca0037e60b47.jpeg',
  'https://bestlifeonline.com/wp-content/uploads/sites/3/2019/10/Screen-Shot-2019-10-02-at-5.14.57-PM.jpg?quality=82&strip=all'
];
var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');
$addImageButton.addEventListener('click', function () {
  if ($imageUrlInput.value !== '') {
    imageUrls.push($imageUrlInput.value);
    $imageUrlInput.value = '';
    updateGallery();
  }
});
function updateGallery() {
  $gallery.innerHTML = '';
  for (var j = 0; j < imageUrls.length; j++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[j];
    $gallery.appendChild($imageElement);
  }
}

updateGallery();
