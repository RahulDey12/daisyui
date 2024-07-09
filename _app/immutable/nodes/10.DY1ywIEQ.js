import{a as b,t as y,b as e,s as a,f as S}from"../chunks/disclose-version.CGgwR5Q_.js";import{h as s}from"../chunks/html.CJZrRl2i.js";import{l as k,s as v}from"../chunks/props._SqaxKkw.js";import{M as T}from"../chunks/mdsvex-blog.Cvw-s-f0.js";var _=y(`<p>Tailwind CSS is a utility-first CSS framework that is rapidly growing in popularity and there are many plugins that can boost your workflow and make your life easier.</p> <p><strong>Let’s begin!</strong></p> <h3 id="how-to-install-tailwind-css-plugins"><a aria-hidden="true" tabindex="-1" href="#how-to-install-tailwind-css-plugins"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>How to install Tailwind CSS plugins?</h3> <p>Installing Tailwind CSS plugins is easy.</p> <ol><li>First you install the package. For example to install daisyUI plugin, you run:</li></ol> <pre class="language-undefined"><!></pre> <ol start="2"><li>Then you add the plugin to <code>tailwind.config.js</code> file in <code>plugins</code> array:</li></ol> <pre class="language-js"><!></pre> <h3 id="heres-the-list-of-best-tailwind-css-plugins"><a aria-hidden="true" tabindex="-1" href="#heres-the-list-of-best-tailwind-css-plugins"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Here’s the list of best Tailwind CSS plugins:</h3> <p><img src="https://img.daisyui.com/images/blog/daisyui-tailwind-components.jpg" alt="daisyUI is the best Tailwind CSS component library"></p> <h2 id="1-daisyui"><a aria-hidden="true" tabindex="-1" href="#1-daisyui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>1. daisyUI</h2> <p><a href="https://daisyui.com/" rel="nofollow" target="_blank">daisyUI</a> is a free component library for Tailwind CSS that adds component class names to Tailwind CSS.<br> It helps you to build websites faster. daisyUI uses human-friendly and descriptive class names like <code>btn</code>, <code>card</code>, <code>toggle</code>, <code>alert</code>, <code>modal</code> etc. which helps you use less class names and keep your HTML clean.<br> daisyUI also comes with a lot of built-in themes and dark mode support so you don’t have to write any additional class names to enable dark mode. It works out of the box.</p> <p>Learn more about daisyUI:</p> <ul><li><a href="https://daisyui.com/" rel="nofollow" target="_blank">Official docs</a></li> <li><a href="https://github.com/saadeghi/daisyui" rel="nofollow" target="_blank">GitHub</a></li></ul> <p><img src="https://img.daisyui.com/images/blog/tailwindcss-typography.jpg" alt="tailwindcss/typography Tailwind CSS plugin"></p> <h2 id="2-tailwindcsstypography"><a aria-hidden="true" tabindex="-1" href="#2-tailwindcsstypography"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>2. tailwindcss/typography</h2> <p><a href="https://tailwindcss.com/docs/typography-plugin" rel="nofollow" target="_blank">tailwindcss/typography</a> is the official Tailwind CSS plugin that adds default styles for all your text content.<br> Typography plugin is made by the Tailwind CSS team and it’s a must-have plugin for any Tailwind CSS project especially if you are building a blog or a website with a lot of text content. It plays well with Markdown content since all you have to do is to add <code>prose</code> class to your container and it will automatically style all your text content.</p> <p>Learn more about Typography plugin:</p> <ul><li><a href="https://tailwindcss.com/docs/typography-plugin" rel="nofollow" target="_blank">Official docs</a></li> <li><a href="https://github.com/tailwindlabs/tailwindcss-typography" rel="nofollow" target="_blank">GitHub</a></li></ul> <p><img src="https://img.daisyui.com/images/blog/tailwindcss-container-queries.jpg" alt="tailwindcss/container-queries Tailwind CSS plugin"></p> <h2 id="3-tailwindcsscontainer-queries"><a aria-hidden="true" tabindex="-1" href="#3-tailwindcsscontainer-queries"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>3. tailwindcss/container-queries</h2> <p>Another plugin from Tailwind team, <a href="https://tailwindcss.com/docs/plugins#container-queries" rel="nofollow" target="_blank">tailwindcss/container-queries</a> adds the new cool CSS feature called <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries" rel="nofollow" target="_blank">container queries</a> to Tailwind CSS. Container queries are similar to media queries but instead of checking the screen size, they check the size of the container. This is useful if you want to change the layout of your website based on the size of the container.</p> <p>Container queries are <a href="https://caniuse.com/css-container-query-units" rel="nofollow" target="_blank">supported by all modern browsers</a> and soon the class names will be added to Tailwind CSS core, but for now you can use this plugin to implement container queries in your project.</p> <p>Learn more about tailwindcss/container-queries</p> <ul><li><a href="https://tailwindcss.com/docs/plugins#container-queries" rel="nofollow" target="_blank">Official docs</a></li> <li><a href="https://github.com/tailwindlabs/tailwindcss-container-queries" rel="nofollow" target="_blank">GitHub</a></li></ul> <p><img src="https://img.daisyui.com/images/blog/tailwindcss-flip.jpg" alt="tailwindcss-flip Tailwind CSS plugin"></p> <h2 id="4-tailwindcss-flip"><a aria-hidden="true" tabindex="-1" href="#4-tailwindcss-flip"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>4. tailwindcss-flip</h2> <p><a href="https://github.com/cvrajeesh/tailwindcss-flip" rel="nofollow" target="_blank">tailwindcss-flip</a> is a Tailwind CSS plugin that mirrors all your CSS properties to the opposite direction. For example if you have <code>mr-6</code> instead of <code>margin-right</code>, it will give you <code>margin-left</code>. This is useful if you want to support RTL languages like Arabic, Persian, Hebrew etc. Using tailwindcss-flip is effortless. All you have to do is to install it and add <code>dir="rtl"</code> to <code>&lt;html&gt;</code> tag.</p> <p>Read more about tailwindcss-flip:</p> <ul><li><a href="https://github.com/cvrajeesh/tailwindcss-flip" rel="nofollow" target="_blank">GitHub</a></li></ul> <p><img src="https://img.daisyui.com/images/blog/tailwindcss-animate.jpg" alt="tailwindcss-animate Tailwind CSS plugin"></p> <h2 id="5-tailwindcss-animate"><a aria-hidden="true" tabindex="-1" href="#5-tailwindcss-animate"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>5. tailwindcss-animate</h2> <p><a href="https://github.com/jamiebuilds/tailwindcss-animate" rel="nofollow" target="_blank">tailwindcss-animate</a> adds animation class names to Tailwind CSS. It’s much easier to use this plugin than adding your own animations in <code>tailwind.config.js</code> file. All you have to do is to install it and add <code>animate-&lt;animation-name&gt;</code> class to your element.</p> <p>Learn more about tailwindcss-animate:</p> <ul><li><a href="https://github.com/jamiebuilds/tailwindcss-animate" rel="nofollow" target="_blank">GitHub</a></li></ul> <p><img src="https://img.daisyui.com/images/blog/tailwind-scrollbar-hide.jpg" alt="tailwind-scrollbar-hide Tailwind CSS plugin"></p> <h2 id="6-tailwind-scrollbar-hide"><a aria-hidden="true" tabindex="-1" href="#6-tailwind-scrollbar-hide"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>6. tailwind-scrollbar-hide</h2> <p><a href="https://github.com/reslear/tailwind-scrollbar-hide" rel="nofollow" target="_blank">tailwind-scrollbar-hide</a> plugin simply adds new utility class names to Tailwind CSS to hide scrollbars.</p> <p>Learn more about tailwind-scrollbar-hide:</p> <ul><li><a href="https://github.com/reslear/tailwind-scrollbar-hide" rel="nofollow" target="_blank">GitHub</a></li></ul> <p><img src="https://img.daisyui.com/images/blog/tailwindcss-forms.jpg" alt="tailwindcss/forms Tailwind CSS plugin"></p> <h2 id="7-tailwindcssforms"><a aria-hidden="true" tabindex="-1" href="#7-tailwindcssforms"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>7. tailwindcss/forms</h2> <p><a href="https://github.com/tailwindlabs/tailwindcss-forms" rel="nofollow" target="_blank">tailwindcss/forms</a> is a plugin from Tailwind team that adds default styles for all your form elements. Just be careful that if you’re using this plugin along with any component library (like daisyUI), you should <a href="https://github.com/tailwindlabs/tailwindcss-forms#using-only-global-styles-or-only-classes" rel="nofollow" target="_blank">enable <code>strategy: 'class'</code></a> for this plugin so it only adds styles to elements you choose. Otherwise it will have conflicts because both plugins add styles to the same elements.</p> <p>Learn more about tailwindcss/forms</p> <ul><li><a href="https://github.com/tailwindlabs/tailwindcss-forms" rel="nofollow" target="_blank">GitHub</a></li></ul> <p><img src="https://img.daisyui.com/images/blog/tailwindcss-opentype.jpg" alt="tailwindcss-opentype Tailwind CSS plugin"></p> <h2 id="8-tailwindcss-opentype"><a aria-hidden="true" tabindex="-1" href="#8-tailwindcss-opentype"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>8. tailwindcss-opentype</h2> <p><a href="https://tailwindcss-opentype.netlify.app/" rel="nofollow" target="_blank">tailwindcss-opentype</a> is a plugin that adds OpenType features to Tailwind CSS. If the fonts you’re using has features like ligatures, kerning, alternate glyphs, etc. you definitely need this plugin to get most out of your fonts.</p> <p>Read more about tailwindcss-opentype:</p> <ul><li><a href="https://tailwindcss-opentype.netlify.app/" rel="nofollow" target="_blank">Official docs</a></li> <li><a href="https://github.com/stormwarning/tailwindcss-opentype" rel="nofollow" target="_blank">GitHub</a></li></ul> <p><img src="https://img.daisyui.com/images/blog/tailwindcss-3d.jpg" alt="tailwindcss-3d Tailwind CSS plugin"></p> <h2 id="9-tailwindcss-3d"><a aria-hidden="true" tabindex="-1" href="#9-tailwindcss-3d"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>9. tailwindcss-3d</h2> <p><a href="https://github.com/sambauers/tailwindcss-3d" rel="nofollow" target="_blank">tailwindcss-3d</a> adds 3D transforms to Tailwind CSS. It’s useful if you want to have 3D transformations to elements. The good thing about tailwindcss-3d plugin is that the utility classes are independent. You can use utility classes for <code>x, y, z</code> axis separately.</p> <p>Learn more about tailwindcss-3d:</p> <ul><li><a href="https://github.com/sambauers/tailwindcss-3d" rel="nofollow" target="_blank">GitHub</a></li></ul> <h2 id="conclusion"><a aria-hidden="true" tabindex="-1" href="#conclusion"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Conclusion</h2> <p>Tailwind CSS plugins are a great way to extend Tailwind CSS and add new features to it.<br> You can search for more plugins on GitHub and NPM but if you didn’t find what you’re looking for, you can also create your own plugin using <a href="https://tailwindcss.com/docs/plugins#adding-utilities" rel="nofollow" target="_blank">Tailwind CSS API</a>!</p> <p>Thanks for reading!</p>`,1);const C={title:"9 essential Tailwind CSS plugins for developers",desc:"In this post we will take a look at the list of best Tailwind CSS plugins to use in your next project",published:!0,date:"2023-10-12T00:00:00.000Z",author:"Pouya Saadeghi",thumbnail:"https://img.daisyui.com/images/blog/9-best-tailwind-css-plugins-for-developers.jpg",tags:["Tailwind CSS"]};function $(l,n){const o=k(n,["children","$$slots","$$events","$$legacy"]);T(l,v(()=>o,C,{children:(r,x)=>{var i=_(),d=S(i),p=a(a(d,!0)),c=a(a(p,!0)),u=a(a(c,!0)),h=a(a(u,!0)),t=a(a(h,!0)),g=e(t);s(g,()=>'<code class="language-undefined">npm i daisyui</code>');var m=a(a(t,!0)),w=a(a(m,!0)),f=e(w);s(f,()=>`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`),b(r,i)},$$slots:{default:!0},$$legacy:!0}))}export{$ as component};
