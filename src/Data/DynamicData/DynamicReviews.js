export function DynamicStaticReviewsdata(data, element) {
  element.innerHTML = data
    .map(({ id, img, categoryname, productname, reviewername }) => {
      return `<div data-id=${id} class="swiper-slide reviews-box bg-white dark:bg-black dark:text-white rounded-sm ">

         <div class="reviews-img-layout flex h-auto w-full items-center justify-start gap-6 p-2">
     <div class="img h-24 w-24 bg-gray-100 rounded-sm">
      <img src="${img}" alt="pic" class="h-full w-full object-cover rounded-sm p-1">
     </div>
     <div class="text-container6 flex flex-col gap-0">
      <p class="text-gray-500 text-sm text-start w-100% dark:text-slate-200">${categoryname}</p>

      <div class="text-sub-container-6 flex flex-col gap-1 justify-center items-start">
   <p class="text-black text-lg font-DM  dark:text-white">${productname}</p>
      <p class="flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 border-none text-og-orange" fill="#f5b002" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg> 
      <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 border-none text-og-orange" fill="#f5b002" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 border-none text-og-orange" fill="#f5b002" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 border-none text-og-orange" fill="#f5b002" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 border-none text-og-orange" fill="#f5b002" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
     
  
    </p>
      </div>
   
      </div>
        </div>
      <div class="reviews-img-desc p-4 flex flex-col gap-6 justify-center items-start">
   <p class="font-Lato">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, vitae mollitia! Alias ipsum perspiciatis beatae cum repellat enim est aliquam ab nesciunt tenetur neque reprehenderit, fugit velit porro quaerat exercitationem</p>

   <p class="text-gray-500 dark:text-slate-200">${reviewername}</p>
   </div>
   
   </div>`;
    })
    .join(" ");
}
