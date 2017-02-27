<div id="comments"></div>
<script>
  window.addEventListener('message', receiveMessage, false);

  function receiveMessage(event) {
    if (event.data) {
      var msg;
      try {
        msg = JSON.parse(event.data);
      } catch (err) {}
      if (!msg)
        return false;
      if (msg.name === 'resize') {
        window.parent.postMessage({
          sentinel: 'amp',
          type: 'embed-size',
          height: msg.data.height
        }, '*');
      }
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (pair[0] == variable) {
        return pair[1];
      }
    }
    return (false);
  }
  
    var css = '#disqus_thread {font-family:' + getQueryVariable('fontBodyFamily') + '} a {color:#' + getQueryVariable('fontLinkColor') + '}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
head.appendChild(style);

                var disqus_shortname = getQueryVariable('shortname');
                var disqus_blogger_current_url = getQueryVariable('canonicalurl');

                if (!disqus_blogger_current_url.length) {
                    disqus_blogger_current_url = getQueryVariable('url');
                }

                var disqus_blogger_homepage_url = getQueryVariable('homepageurl');
                var disqus_blogger_canonical_homepage_url = getQueryVariable('canonicalhomepageurl');
 
                    (function() {
                        var bloggerjs = document.createElement('script');
                        bloggerjs.type = 'text/javascript';
                        bloggerjs.async = true;
                        bloggerjs.src = '//'+disqus_shortname+'.disqus.com/blogger_item.js';
                        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(bloggerjs);
                    })();

                (function() {
                    var bloggerjs = document.createElement('script');
                    bloggerjs.type = 'text/javascript';
                    bloggerjs.async = true;
                    bloggerjs.src = '//'+disqus_shortname+'.disqus.com/blogger_index.js';
                    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(bloggerjs);
                })();
</script>
