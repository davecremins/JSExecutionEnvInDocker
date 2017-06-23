let condense = (text) => {
   if(text.length <= 30) return text;
   let blacklist = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"];
   return text.split('-').map((x) => { return !blacklist.includes(x) ? x[0] : ''; }).join('');
};

let createAnchor = (href, text) => {
   return `<a href="/${href}">${text}</a>`;
};

let createSpan = (text) => {
   return `<span class="active">${text}</span>`;
};

let buildBreadCrumb = (index, end, text, previousText, separator) => {
   if(index === end) {
      let spanText = condense(text).replace(/-/g, ' ');
      spanText = (~spanText.indexOf('.')) ? spanText.substring(0, spanText.indexOf('.')) : spanText;
      return createSpan(spanText.toUpperCase());
   } 

   let href = (index !== 0) ? previousText + text + '/' : '';
   let anchorText = condense(text).replace(/-/g, ' ').toUpperCase();
   return createAnchor(href, anchorText) + separator;
};

function generateBC(url, separator) {
   url = url.replace(/https?:\/\//, '');
   const qMark = /^(.*?)(?=\?|$)/, hash = /^(.*?)(?=#|$)/;
   url = qMark.test(url) ? qMark.exec(url)[0] : url;
   url = hash.test(url) ? hash.exec(url)[0] : url;

   let urlParts = url.split('/');
   if(urlParts[urlParts.length-1].includes('index')) urlParts.splice(-1);
   if(urlParts[urlParts.length-1] === '') urlParts.splice(-1);
   urlParts[0] = 'home';

   let result = '', end = urlParts.length-1, previous = '';
   for(let i = 0; i < urlParts.length; i++) {
      if(i > 1) previous += urlParts[i-1] + '/';
      result += buildBreadCrumb(i, end, urlParts[i], previous, separator);
   }
   return result;
}