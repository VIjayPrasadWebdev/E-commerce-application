export function DynamicStaticGallerydata(data, element) {
  element.innerHTML = data
    .map(({ id, img }) => {
      return `<div class="gallery-pic" data-id=${id}>
<img src="${img}"  alt="pic" class="cursor-pointer rounded-md border-8 border-white shadow-md" loading="lazy">
      </div>`;
    })
    .join(" ");
}
